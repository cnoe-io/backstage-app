# Stage 1 - Create yarn install skeleton layer
FROM node:22-bookworm-slim AS packages

WORKDIR /app
COPY package.json yarn.lock ./

COPY packages packages
COPY plugins plugins

RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -exec rm -rf {} \+

# Stage 2 - Install dependencies and build packages
FROM node:22-bookworm-slim AS build

USER node
WORKDIR /app

COPY --from=packages --chown=node:node /app .

RUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \
    yarn install --frozen-lockfile --network-timeout 600000

COPY --chown=node:node . .

RUN yarn tsc
RUN yarn --cwd packages/backend build

RUN mkdir packages/backend/dist/skeleton packages/backend/dist/bundle \
    && tar xzf packages/backend/dist/skeleton.tar.gz -C packages/backend/dist/skeleton \
    && tar xzf packages/backend/dist/bundle.tar.gz -C packages/backend/dist/bundle

# Stage 3 - Build the actual backend image and install production dependencies
FROM node:22-bookworm-slim

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && \
    apt-get install -y --no-install-recommends python3 python3-pip python3-venv g++ build-essential ca-certificates curl

RUN yarn config set python /usr/bin/python3

# Add kubectl for the kube apply plugin
RUN curl -L -o /usr/local/bin/kubectl https://dl.k8s.io/release/v1.29.9/bin/linux/amd64/kubectl && chmod +x /usr/local/bin/kubectl

# Add cnoe-cli
RUN curl -L -O https://github.com/cnoe-io/cnoe-cli/releases/download/v0.1.0/cnoe_Linux_x86_64.tar.gz && \
    curl -L -O https://github.com/cnoe-io/cnoe-cli/releases/download/v0.1.0/checksums.txt && \
    sha256sum -c --strict --status --ignore-missing checksums.txt && \
    tar -xzf cnoe_Linux_x86_64.tar.gz && \
    mv cnoe /usr/bin/cnoe-cli && \
    chmod +x /usr/bin/cnoe-cli && \
    rm checksums.txt cnoe_Linux_x86_64.tar.gz
COPY ./cnoe-wrapper.sh /usr/bin/cnoe
RUN chmod +x /usr/bin/cnoe

# Add mkdocs for TechDocs
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN pip3 install 'mkdocs-techdocs-core==1.4.2'

USER node
WORKDIR /app

COPY --from=build --chown=node:node /app/yarn.lock /app/package.json /app/packages/backend/dist/skeleton/ ./

RUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \
    yarn install --frozen-lockfile --production --network-timeout 600000

COPY --from=build --chown=node:node /app/packages/backend/dist/bundle/ ./
COPY --chown=node:node app-config.yaml app-config.production.yaml ./

ENV NODE_ENV production
ENV NODE_OPTIONS="--no-node-snapshot"

CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]
