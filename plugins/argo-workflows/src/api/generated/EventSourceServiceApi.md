# .EventSourceServiceApi

All URIs are relative to *http://localhost:2746*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventSourceServiceCreateEventSource**](EventSourceServiceApi.md#eventSourceServiceCreateEventSource) | **POST** /api/v1/event-sources/{namespace} | 
[**eventSourceServiceDeleteEventSource**](EventSourceServiceApi.md#eventSourceServiceDeleteEventSource) | **DELETE** /api/v1/event-sources/{namespace}/{name} | 
[**eventSourceServiceEventSourcesLogs**](EventSourceServiceApi.md#eventSourceServiceEventSourcesLogs) | **GET** /api/v1/stream/event-sources/{namespace}/logs | 
[**eventSourceServiceGetEventSource**](EventSourceServiceApi.md#eventSourceServiceGetEventSource) | **GET** /api/v1/event-sources/{namespace}/{name} | 
[**eventSourceServiceListEventSources**](EventSourceServiceApi.md#eventSourceServiceListEventSources) | **GET** /api/v1/event-sources/{namespace} | 
[**eventSourceServiceUpdateEventSource**](EventSourceServiceApi.md#eventSourceServiceUpdateEventSource) | **PUT** /api/v1/event-sources/{namespace}/{name} | 
[**eventSourceServiceWatchEventSources**](EventSourceServiceApi.md#eventSourceServiceWatchEventSources) | **GET** /api/v1/stream/event-sources/{namespace} | 


# **eventSourceServiceCreateEventSource**
> IoArgoprojEventsV1alpha1EventSource eventSourceServiceCreateEventSource(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventSourceServiceApi(configuration);

let body:.EventSourceServiceApiEventSourceServiceCreateEventSourceRequest = {
  // string
  namespace: "namespace_example",
  // EventsourceCreateEventSourceRequest
  body: {
    eventSource: {
      metadata: {
        annotations: {
          "key": "key_example",
        },
        clusterName: "clusterName_example",
        creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
        deletionGracePeriodSeconds: 1,
        deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
        finalizers: [
          "finalizers_example",
        ],
        generateName: "generateName_example",
        generation: 1,
        labels: {
          "key": "key_example",
        },
        managedFields: [
          {
            apiVersion: "apiVersion_example",
            fieldsType: "fieldsType_example",
            fieldsV1: {},
            manager: "manager_example",
            operation: "operation_example",
            subresource: "subresource_example",
            time: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
        name: "name_example",
        namespace: "namespace_example",
        ownerReferences: [
          {
            apiVersion: "apiVersion_example",
            blockOwnerDeletion: true,
            controller: true,
            kind: "kind_example",
            name: "name_example",
            uid: "uid_example",
          },
        ],
        resourceVersion: "resourceVersion_example",
        selfLink: "selfLink_example",
        uid: "uid_example",
      },
      spec: {
        amqp: {
          "key": {
            auth: {
              password: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              username: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            consume: {
              autoAck: true,
              consumerTag: "consumerTag_example",
              exclusive: true,
              noLocal: true,
              noWait: true,
            },
            exchangeDeclare: {
              autoDelete: true,
              durable: true,
              internal: true,
              noWait: true,
            },
            exchangeName: "exchangeName_example",
            exchangeType: "exchangeType_example",
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            queueBind: {
              noWait: true,
            },
            queueDeclare: {
              arguments: "arguments_example",
              autoDelete: true,
              durable: true,
              exclusive: true,
              name: "name_example",
              noWait: true,
            },
            routingKey: "routingKey_example",
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            url: "url_example",
            urlSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        azureEventsHub: {
          "key": {
            filter: {
              expression: "expression_example",
            },
            fqdn: "fqdn_example",
            hubName: "hubName_example",
            metadata: {
              "key": "key_example",
            },
            sharedAccessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            sharedAccessKeyName: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        bitbucket: {
          "key": {
            auth: {
              basic: {
                password: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
                username: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
              },
              oauthToken: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            deleteHookOnFinish: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            owner: "owner_example",
            projectKey: "projectKey_example",
            repositories: [
              {
                owner: "owner_example",
                repositorySlug: "repositorySlug_example",
              },
            ],
            repositorySlug: "repositorySlug_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        bitbucketserver: {
          "key": {
            accessToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            bitbucketserverBaseURL: "bitbucketserverBaseURL_example",
            deleteHookOnFinish: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            projectKey: "projectKey_example",
            repositories: [
              {
                projectKey: "projectKey_example",
                repositorySlug: "repositorySlug_example",
              },
            ],
            repositorySlug: "repositorySlug_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
            webhookSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        calendar: {
          "key": {
            exclusionDates: [
              "exclusionDates_example",
            ],
            filter: {
              expression: "expression_example",
            },
            interval: "interval_example",
            metadata: {
              "key": "key_example",
            },
            persistence: {
              catchup: {
                enabled: true,
                maxDuration: "maxDuration_example",
              },
              configMap: {
                createIfNotExist: true,
                name: "name_example",
              },
            },
            schedule: "schedule_example",
            timezone: "timezone_example",
          },
        },
        emitter: {
          "key": {
            broker: "broker_example",
            channelKey: "channelKey_example",
            channelName: "channelName_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            password: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            username: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        eventBusName: "eventBusName_example",
        file: {
          "key": {
            eventType: "eventType_example",
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            polling: true,
            watchPathConfig: {
              directory: "directory_example",
              path: "path_example",
              pathRegexp: "pathRegexp_example",
            },
          },
        },
        generic: {
          "key": {
            authSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            config: "config_example",
            filter: {
              expression: "expression_example",
            },
            insecure: true,
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            url: "url_example",
          },
        },
        github: {
          "key": {
            active: true,
            apiToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            contentType: "contentType_example",
            deleteHookOnFinish: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            githubApp: {
              appID: "appID_example",
              installationID: "installationID_example",
              privateKey: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            githubBaseURL: "githubBaseURL_example",
            githubUploadURL: "githubUploadURL_example",
            id: "id_example",
            insecure: true,
            metadata: {
              "key": "key_example",
            },
            organizations: [
              "organizations_example",
            ],
            owner: "owner_example",
            repositories: [
              {
                names: [
                  "names_example",
                ],
                owner: "owner_example",
              },
            ],
            repository: "repository_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
            webhookSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        gitlab: {
          "key": {
            accessToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            deleteHookOnFinish: true,
            enableSSLVerification: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            gitlabBaseURL: "gitlabBaseURL_example",
            metadata: {
              "key": "key_example",
            },
            projectID: "projectID_example",
            projects: [
              "projects_example",
            ],
            secretToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        hdfs: {
          "key": {
            addresses: [
              "addresses_example",
            ],
            checkInterval: "checkInterval_example",
            filter: {
              expression: "expression_example",
            },
            hdfsUser: "hdfsUser_example",
            krbCCacheSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            krbConfigConfigMap: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            krbKeytabSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            krbRealm: "krbRealm_example",
            krbServicePrincipalName: "krbServicePrincipalName_example",
            krbUsername: "krbUsername_example",
            metadata: {
              "key": "key_example",
            },
            type: "type_example",
            watchPathConfig: {
              directory: "directory_example",
              path: "path_example",
              pathRegexp: "pathRegexp_example",
            },
          },
        },
        kafka: {
          "key": {
            config: "config_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            consumerGroup: {
              groupName: "groupName_example",
              oldest: true,
              rebalanceStrategy: "rebalanceStrategy_example",
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            limitEventsPerSecond: "limitEventsPerSecond_example",
            metadata: {
              "key": "key_example",
            },
            partition: "partition_example",
            sasl: {
              mechanism: "mechanism_example",
              password: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              user: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            topic: "topic_example",
            url: "url_example",
            version: "version_example",
          },
        },
        minio: {
          "key": {
            accessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            bucket: {
              key: "key_example",
              name: "name_example",
            },
            endpoint: "endpoint_example",
            events: [
              "events_example",
            ],
            filter: {
              prefix: "prefix_example",
              suffix: "suffix_example",
            },
            insecure: true,
            metadata: {
              "key": "key_example",
            },
            region: "region_example",
            secretKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        mqtt: {
          "key": {
            clientId: "clientId_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            topic: "topic_example",
            url: "url_example",
          },
        },
        nats: {
          "key": {
            auth: {
              basic: {
                password: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
                username: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
              },
              credential: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              nkey: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              token: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            subject: "subject_example",
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            url: "url_example",
          },
        },
        nsq: {
          "key": {
            channel: "channel_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            hostAddress: "hostAddress_example",
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            topic: "topic_example",
          },
        },
        pubSub: {
          "key": {
            credentialSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            deleteSubscriptionOnFinish: true,
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            projectID: "projectID_example",
            subscriptionID: "subscriptionID_example",
            topic: "topic_example",
            topicProjectID: "topicProjectID_example",
          },
        },
        pulsar: {
          "key": {
            authTokenSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            tlsAllowInsecureConnection: true,
            tlsTrustCertsSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            tlsValidateHostname: true,
            topics: [
              "topics_example",
            ],
            type: "type_example",
            url: "url_example",
          },
        },
        redis: {
          "key": {
            channels: [
              "channels_example",
            ],
            db: 1,
            filter: {
              expression: "expression_example",
            },
            hostAddress: "hostAddress_example",
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            namespace: "namespace_example",
            password: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            username: "username_example",
          },
        },
        redisStream: {
          "key": {
            consumerGroup: "consumerGroup_example",
            db: 1,
            filter: {
              expression: "expression_example",
            },
            hostAddress: "hostAddress_example",
            maxMsgCountPerRead: 1,
            metadata: {
              "key": "key_example",
            },
            password: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            streams: [
              "streams_example",
            ],
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            username: "username_example",
          },
        },
        replicas: 1,
        resource: {
          "key": {
            eventTypes: [
              "eventTypes_example",
            ],
            filter: {
              afterStart: true,
              createdBy: new Date('1970-01-01T00:00:00.00Z'),
              fields: [
                {
                  key: "key_example",
                  operation: "operation_example",
                  value: "value_example",
                },
              ],
              labels: [
                {
                  key: "key_example",
                  operation: "operation_example",
                  value: "value_example",
                },
              ],
              prefix: "prefix_example",
            },
            groupVersionResource: {
              group: "group_example",
              resource: "resource_example",
              version: "version_example",
            },
            metadata: {
              "key": "key_example",
            },
            namespace: "namespace_example",
          },
        },
        service: {
          clusterIP: "clusterIP_example",
          ports: [
            {
              appProtocol: "appProtocol_example",
              name: "name_example",
              nodePort: 1,
              port: 1,
              protocol: "SCTP",
              targetPort: "targetPort_example",
            },
          ],
        },
        slack: {
          "key": {
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            signingSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            token: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        sns: {
          "key": {
            accessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            endpoint: "endpoint_example",
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            region: "region_example",
            roleARN: "roleARN_example",
            secretKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            topicArn: "topicArn_example",
            validateSignature: true,
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        sqs: {
          "key": {
            accessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            dlq: true,
            endpoint: "endpoint_example",
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            queue: "queue_example",
            queueAccountId: "queueAccountId_example",
            region: "region_example",
            roleARN: "roleARN_example",
            secretKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            sessionToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            waitTimeSeconds: "waitTimeSeconds_example",
          },
        },
        storageGrid: {
          "key": {
            apiURL: "apiURL_example",
            authToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            bucket: "bucket_example",
            events: [
              "events_example",
            ],
            filter: {
              prefix: "prefix_example",
              suffix: "suffix_example",
            },
            metadata: {
              "key": "key_example",
            },
            region: "region_example",
            topicArn: "topicArn_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        stripe: {
          "key": {
            apiKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            createWebhook: true,
            eventFilter: [
              "eventFilter_example",
            ],
            metadata: {
              "key": "key_example",
            },
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        template: {
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          container: {
            args: [
              "args_example",
            ],
            command: [
              "command_example",
            ],
            env: [
              {
                name: "name_example",
                value: "value_example",
                valueFrom: {
                  configMapKeyRef: {
                    key: "key_example",
                    name: "name_example",
                    optional: true,
                  },
                  fieldRef: {
                    apiVersion: "apiVersion_example",
                    fieldPath: "fieldPath_example",
                  },
                  resourceFieldRef: {
                    containerName: "containerName_example",
                    divisor: "divisor_example",
                    resource: "resource_example",
                  },
                  secretKeyRef: {
                    key: "key_example",
                    name: "name_example",
                    optional: true,
                  },
                },
              },
            ],
            envFrom: [
              {
                configMapRef: {
                  name: "name_example",
                  optional: true,
                },
                prefix: "prefix_example",
                secretRef: {
                  name: "name_example",
                  optional: true,
                },
              },
            ],
            image: "image_example",
            imagePullPolicy: "Always",
            lifecycle: {
              postStart: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "HTTP",
                },
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
              },
              preStop: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "HTTP",
                },
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
              },
            },
            livenessProbe: {
              exec: {
                command: [
                  "command_example",
                ],
              },
              failureThreshold: 1,
              grpc: {
                port: 1,
                service: "service_example",
              },
              httpGet: {
                host: "host_example",
                httpHeaders: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                path: "path_example",
                port: "port_example",
                scheme: "HTTP",
              },
              initialDelaySeconds: 1,
              periodSeconds: 1,
              successThreshold: 1,
              tcpSocket: {
                host: "host_example",
                port: "port_example",
              },
              terminationGracePeriodSeconds: 1,
              timeoutSeconds: 1,
            },
            name: "name_example",
            ports: [
              {
                containerPort: 1,
                hostIP: "hostIP_example",
                hostPort: 1,
                name: "name_example",
                protocol: "SCTP",
              },
            ],
            readinessProbe: {
              exec: {
                command: [
                  "command_example",
                ],
              },
              failureThreshold: 1,
              grpc: {
                port: 1,
                service: "service_example",
              },
              httpGet: {
                host: "host_example",
                httpHeaders: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                path: "path_example",
                port: "port_example",
                scheme: "HTTP",
              },
              initialDelaySeconds: 1,
              periodSeconds: 1,
              successThreshold: 1,
              tcpSocket: {
                host: "host_example",
                port: "port_example",
              },
              terminationGracePeriodSeconds: 1,
              timeoutSeconds: 1,
            },
            resources: {
              limits: {
                "key": "key_example",
              },
              requests: {
                "key": "key_example",
              },
            },
            securityContext: {
              allowPrivilegeEscalation: true,
              capabilities: {
                add: [
                  "add_example",
                ],
                drop: [
                  "drop_example",
                ],
              },
              privileged: true,
              procMount: "procMount_example",
              readOnlyRootFilesystem: true,
              runAsGroup: 1,
              runAsNonRoot: true,
              runAsUser: 1,
              seLinuxOptions: {
                level: "level_example",
                role: "role_example",
                type: "type_example",
                user: "user_example",
              },
              seccompProfile: {
                localhostProfile: "localhostProfile_example",
                type: "Localhost",
              },
              windowsOptions: {
                gmsaCredentialSpec: "gmsaCredentialSpec_example",
                gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                hostProcess: true,
                runAsUserName: "runAsUserName_example",
              },
            },
            startupProbe: {
              exec: {
                command: [
                  "command_example",
                ],
              },
              failureThreshold: 1,
              grpc: {
                port: 1,
                service: "service_example",
              },
              httpGet: {
                host: "host_example",
                httpHeaders: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                path: "path_example",
                port: "port_example",
                scheme: "HTTP",
              },
              initialDelaySeconds: 1,
              periodSeconds: 1,
              successThreshold: 1,
              tcpSocket: {
                host: "host_example",
                port: "port_example",
              },
              terminationGracePeriodSeconds: 1,
              timeoutSeconds: 1,
            },
            stdin: true,
            stdinOnce: true,
            terminationMessagePath: "terminationMessagePath_example",
            terminationMessagePolicy: "FallbackToLogsOnError",
            tty: true,
            volumeDevices: [
              {
                devicePath: "devicePath_example",
                name: "name_example",
              },
            ],
            volumeMounts: [
              {
                mountPath: "mountPath_example",
                mountPropagation: "mountPropagation_example",
                name: "name_example",
                readOnly: true,
                subPath: "subPath_example",
                subPathExpr: "subPathExpr_example",
              },
            ],
            workingDir: "workingDir_example",
          },
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          metadata: {
            annotations: {
              "key": "key_example",
            },
            labels: {
              "key": "key_example",
            },
          },
          nodeSelector: {
            "key": "key_example",
          },
          priority: 1,
          priorityClassName: "priorityClassName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "Localhost",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccountName: "serviceAccountName_example",
          tolerations: [
            {
              effect: "NoExecute",
              key: "key_example",
              operator: "Equal",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
        webhook: {
          "key": {
            filter: {
              expression: "expression_example",
            },
            webhookContext: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
      },
      status: {
        status: {
          conditions: [
            {
              lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
              message: "message_example",
              reason: "reason_example",
              status: "status_example",
              type: "type_example",
            },
          ],
        },
      },
    },
    namespace: "namespace_example",
  },
};

apiInstance.eventSourceServiceCreateEventSource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EventsourceCreateEventSourceRequest**|  |
 **namespace** | [**string**] |  | defaults to undefined


### Return type

**IoArgoprojEventsV1alpha1EventSource**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventSourceServiceDeleteEventSource**
> any eventSourceServiceDeleteEventSource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventSourceServiceApi(configuration);

let body:.EventSourceServiceApiEventSourceServiceDeleteEventSourceRequest = {
  // string
  namespace: "namespace_example",
  // string
  name: "name_example",
  // string | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional. (optional)
  deleteOptionsGracePeriodSeconds: "deleteOptions.gracePeriodSeconds_example",
  // string | Specifies the target UID. +optional. (optional)
  deleteOptionsPreconditionsUid: "deleteOptions.preconditions.uid_example",
  // string | Specifies the target ResourceVersion +optional. (optional)
  deleteOptionsPreconditionsResourceVersion: "deleteOptions.preconditions.resourceVersion_example",
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional. (optional)
  deleteOptionsOrphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \'Orphan\' - orphan the dependents; \'Background\' - allow the garbage collector to delete the dependents in the background; \'Foreground\' - a cascading policy that deletes all dependents in the foreground. +optional. (optional)
  deleteOptionsPropagationPolicy: "deleteOptions.propagationPolicy_example",
  // Array<string> | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional. (optional)
  deleteOptionsDryRun: [
    "deleteOptions.dryRun_example",
  ],
};

apiInstance.eventSourceServiceDeleteEventSource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **deleteOptionsGracePeriodSeconds** | [**string**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional. | (optional) defaults to undefined
 **deleteOptionsPreconditionsUid** | [**string**] | Specifies the target UID. +optional. | (optional) defaults to undefined
 **deleteOptionsPreconditionsResourceVersion** | [**string**] | Specifies the target ResourceVersion +optional. | (optional) defaults to undefined
 **deleteOptionsOrphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional. | (optional) defaults to undefined
 **deleteOptionsPropagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional. | (optional) defaults to undefined
 **deleteOptionsDryRun** | **Array&lt;string&gt;** | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional. | (optional) defaults to undefined


### Return type

**any**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventSourceServiceEventSourcesLogs**
> StreamResultOfEventsourceLogEntry eventSourceServiceEventSourcesLogs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventSourceServiceApi(configuration);

let body:.EventSourceServiceApiEventSourceServiceEventSourcesLogsRequest = {
  // string
  namespace: "namespace_example",
  // string | optional - only return entries for this event source. (optional)
  name: "name_example",
  // string | optional - only return entries for this event source type (e.g. `webhook`). (optional)
  eventSourceType: "eventSourceType_example",
  // string | optional - only return entries for this event name (e.g. `example`). (optional)
  eventName: "eventName_example",
  // string | optional - only return entries where `msg` matches this regular expression. (optional)
  grep: "grep_example",
  // string | The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional. (optional)
  podLogOptionsContainer: "podLogOptions.container_example",
  // boolean | Follow the log stream of the pod. Defaults to false. +optional. (optional)
  podLogOptionsFollow: true,
  // boolean | Return previous terminated container logs. Defaults to false. +optional. (optional)
  podLogOptionsPrevious: true,
  // string | A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional. (optional)
  podLogOptionsSinceSeconds: "podLogOptions.sinceSeconds_example",
  // string | Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. (optional)
  podLogOptionsSinceTimeSeconds: "podLogOptions.sinceTime.seconds_example",
  // number | Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context. (optional)
  podLogOptionsSinceTimeNanos: 1,
  // boolean | If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional. (optional)
  podLogOptionsTimestamps: true,
  // string | If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional. (optional)
  podLogOptionsTailLines: "podLogOptions.tailLines_example",
  // string | If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional. (optional)
  podLogOptionsLimitBytes: "podLogOptions.limitBytes_example",
  // boolean | insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\'s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional. (optional)
  podLogOptionsInsecureSkipTLSVerifyBackend: true,
};

apiInstance.eventSourceServiceEventSourcesLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **name** | [**string**] | optional - only return entries for this event source. | (optional) defaults to undefined
 **eventSourceType** | [**string**] | optional - only return entries for this event source type (e.g. &#x60;webhook&#x60;). | (optional) defaults to undefined
 **eventName** | [**string**] | optional - only return entries for this event name (e.g. &#x60;example&#x60;). | (optional) defaults to undefined
 **grep** | [**string**] | optional - only return entries where &#x60;msg&#x60; matches this regular expression. | (optional) defaults to undefined
 **podLogOptionsContainer** | [**string**] | The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional. | (optional) defaults to undefined
 **podLogOptionsFollow** | [**boolean**] | Follow the log stream of the pod. Defaults to false. +optional. | (optional) defaults to undefined
 **podLogOptionsPrevious** | [**boolean**] | Return previous terminated container logs. Defaults to false. +optional. | (optional) defaults to undefined
 **podLogOptionsSinceSeconds** | [**string**] | A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional. | (optional) defaults to undefined
 **podLogOptionsSinceTimeSeconds** | [**string**] | Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. | (optional) defaults to undefined
 **podLogOptionsSinceTimeNanos** | [**number**] | Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context. | (optional) defaults to undefined
 **podLogOptionsTimestamps** | [**boolean**] | If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional. | (optional) defaults to undefined
 **podLogOptionsTailLines** | [**string**] | If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional. | (optional) defaults to undefined
 **podLogOptionsLimitBytes** | [**string**] | If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional. | (optional) defaults to undefined
 **podLogOptionsInsecureSkipTLSVerifyBackend** | [**boolean**] | insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional. | (optional) defaults to undefined


### Return type

**StreamResultOfEventsourceLogEntry**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventSourceServiceGetEventSource**
> IoArgoprojEventsV1alpha1EventSource eventSourceServiceGetEventSource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventSourceServiceApi(configuration);

let body:.EventSourceServiceApiEventSourceServiceGetEventSourceRequest = {
  // string
  namespace: "namespace_example",
  // string
  name: "name_example",
};

apiInstance.eventSourceServiceGetEventSource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined


### Return type

**IoArgoprojEventsV1alpha1EventSource**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventSourceServiceListEventSources**
> IoArgoprojEventsV1alpha1EventSourceList eventSourceServiceListEventSources()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventSourceServiceApi(configuration);

let body:.EventSourceServiceApiEventSourceServiceListEventSourcesRequest = {
  // string
  namespace: "namespace_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional. (optional)
  listOptionsLabelSelector: "listOptions.labelSelector_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional. (optional)
  listOptionsFieldSelector: "listOptions.fieldSelector_example",
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional. (optional)
  listOptionsWatch: true,
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional. (optional)
  listOptionsAllowWatchBookmarks: true,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional (optional)
  listOptionsResourceVersion: "listOptions.resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional (optional)
  listOptionsResourceVersionMatch: "listOptions.resourceVersionMatch_example",
  // string | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional. (optional)
  listOptionsTimeoutSeconds: "listOptions.timeoutSeconds_example",
  // string | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  listOptionsLimit: "listOptions.limit_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  listOptionsContinue: "listOptions.continue_example",
};

apiInstance.eventSourceServiceListEventSources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **listOptionsLabelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional. | (optional) defaults to undefined
 **listOptionsFieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional. | (optional) defaults to undefined
 **listOptionsWatch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional. | (optional) defaults to undefined
 **listOptionsAllowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional. | (optional) defaults to undefined
 **listOptionsResourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional | (optional) defaults to undefined
 **listOptionsResourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional | (optional) defaults to undefined
 **listOptionsTimeoutSeconds** | [**string**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional. | (optional) defaults to undefined
 **listOptionsLimit** | [**string**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **listOptionsContinue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined


### Return type

**IoArgoprojEventsV1alpha1EventSourceList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventSourceServiceUpdateEventSource**
> IoArgoprojEventsV1alpha1EventSource eventSourceServiceUpdateEventSource(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventSourceServiceApi(configuration);

let body:.EventSourceServiceApiEventSourceServiceUpdateEventSourceRequest = {
  // string
  namespace: "namespace_example",
  // string
  name: "name_example",
  // EventsourceUpdateEventSourceRequest
  body: {
    eventSource: {
      metadata: {
        annotations: {
          "key": "key_example",
        },
        clusterName: "clusterName_example",
        creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
        deletionGracePeriodSeconds: 1,
        deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
        finalizers: [
          "finalizers_example",
        ],
        generateName: "generateName_example",
        generation: 1,
        labels: {
          "key": "key_example",
        },
        managedFields: [
          {
            apiVersion: "apiVersion_example",
            fieldsType: "fieldsType_example",
            fieldsV1: {},
            manager: "manager_example",
            operation: "operation_example",
            subresource: "subresource_example",
            time: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
        name: "name_example",
        namespace: "namespace_example",
        ownerReferences: [
          {
            apiVersion: "apiVersion_example",
            blockOwnerDeletion: true,
            controller: true,
            kind: "kind_example",
            name: "name_example",
            uid: "uid_example",
          },
        ],
        resourceVersion: "resourceVersion_example",
        selfLink: "selfLink_example",
        uid: "uid_example",
      },
      spec: {
        amqp: {
          "key": {
            auth: {
              password: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              username: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            consume: {
              autoAck: true,
              consumerTag: "consumerTag_example",
              exclusive: true,
              noLocal: true,
              noWait: true,
            },
            exchangeDeclare: {
              autoDelete: true,
              durable: true,
              internal: true,
              noWait: true,
            },
            exchangeName: "exchangeName_example",
            exchangeType: "exchangeType_example",
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            queueBind: {
              noWait: true,
            },
            queueDeclare: {
              arguments: "arguments_example",
              autoDelete: true,
              durable: true,
              exclusive: true,
              name: "name_example",
              noWait: true,
            },
            routingKey: "routingKey_example",
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            url: "url_example",
            urlSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        azureEventsHub: {
          "key": {
            filter: {
              expression: "expression_example",
            },
            fqdn: "fqdn_example",
            hubName: "hubName_example",
            metadata: {
              "key": "key_example",
            },
            sharedAccessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            sharedAccessKeyName: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        bitbucket: {
          "key": {
            auth: {
              basic: {
                password: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
                username: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
              },
              oauthToken: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            deleteHookOnFinish: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            owner: "owner_example",
            projectKey: "projectKey_example",
            repositories: [
              {
                owner: "owner_example",
                repositorySlug: "repositorySlug_example",
              },
            ],
            repositorySlug: "repositorySlug_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        bitbucketserver: {
          "key": {
            accessToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            bitbucketserverBaseURL: "bitbucketserverBaseURL_example",
            deleteHookOnFinish: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            projectKey: "projectKey_example",
            repositories: [
              {
                projectKey: "projectKey_example",
                repositorySlug: "repositorySlug_example",
              },
            ],
            repositorySlug: "repositorySlug_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
            webhookSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        calendar: {
          "key": {
            exclusionDates: [
              "exclusionDates_example",
            ],
            filter: {
              expression: "expression_example",
            },
            interval: "interval_example",
            metadata: {
              "key": "key_example",
            },
            persistence: {
              catchup: {
                enabled: true,
                maxDuration: "maxDuration_example",
              },
              configMap: {
                createIfNotExist: true,
                name: "name_example",
              },
            },
            schedule: "schedule_example",
            timezone: "timezone_example",
          },
        },
        emitter: {
          "key": {
            broker: "broker_example",
            channelKey: "channelKey_example",
            channelName: "channelName_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            password: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            username: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        eventBusName: "eventBusName_example",
        file: {
          "key": {
            eventType: "eventType_example",
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            polling: true,
            watchPathConfig: {
              directory: "directory_example",
              path: "path_example",
              pathRegexp: "pathRegexp_example",
            },
          },
        },
        generic: {
          "key": {
            authSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            config: "config_example",
            filter: {
              expression: "expression_example",
            },
            insecure: true,
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            url: "url_example",
          },
        },
        github: {
          "key": {
            active: true,
            apiToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            contentType: "contentType_example",
            deleteHookOnFinish: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            githubApp: {
              appID: "appID_example",
              installationID: "installationID_example",
              privateKey: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            githubBaseURL: "githubBaseURL_example",
            githubUploadURL: "githubUploadURL_example",
            id: "id_example",
            insecure: true,
            metadata: {
              "key": "key_example",
            },
            organizations: [
              "organizations_example",
            ],
            owner: "owner_example",
            repositories: [
              {
                names: [
                  "names_example",
                ],
                owner: "owner_example",
              },
            ],
            repository: "repository_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
            webhookSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        gitlab: {
          "key": {
            accessToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            deleteHookOnFinish: true,
            enableSSLVerification: true,
            events: [
              "events_example",
            ],
            filter: {
              expression: "expression_example",
            },
            gitlabBaseURL: "gitlabBaseURL_example",
            metadata: {
              "key": "key_example",
            },
            projectID: "projectID_example",
            projects: [
              "projects_example",
            ],
            secretToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        hdfs: {
          "key": {
            addresses: [
              "addresses_example",
            ],
            checkInterval: "checkInterval_example",
            filter: {
              expression: "expression_example",
            },
            hdfsUser: "hdfsUser_example",
            krbCCacheSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            krbConfigConfigMap: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            krbKeytabSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            krbRealm: "krbRealm_example",
            krbServicePrincipalName: "krbServicePrincipalName_example",
            krbUsername: "krbUsername_example",
            metadata: {
              "key": "key_example",
            },
            type: "type_example",
            watchPathConfig: {
              directory: "directory_example",
              path: "path_example",
              pathRegexp: "pathRegexp_example",
            },
          },
        },
        kafka: {
          "key": {
            config: "config_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            consumerGroup: {
              groupName: "groupName_example",
              oldest: true,
              rebalanceStrategy: "rebalanceStrategy_example",
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            limitEventsPerSecond: "limitEventsPerSecond_example",
            metadata: {
              "key": "key_example",
            },
            partition: "partition_example",
            sasl: {
              mechanism: "mechanism_example",
              password: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              user: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            topic: "topic_example",
            url: "url_example",
            version: "version_example",
          },
        },
        minio: {
          "key": {
            accessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            bucket: {
              key: "key_example",
              name: "name_example",
            },
            endpoint: "endpoint_example",
            events: [
              "events_example",
            ],
            filter: {
              prefix: "prefix_example",
              suffix: "suffix_example",
            },
            insecure: true,
            metadata: {
              "key": "key_example",
            },
            region: "region_example",
            secretKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
          },
        },
        mqtt: {
          "key": {
            clientId: "clientId_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            topic: "topic_example",
            url: "url_example",
          },
        },
        nats: {
          "key": {
            auth: {
              basic: {
                password: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
                username: {
                  key: "key_example",
                  name: "name_example",
                  optional: true,
                },
              },
              credential: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              nkey: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              token: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
            },
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            subject: "subject_example",
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            url: "url_example",
          },
        },
        nsq: {
          "key": {
            channel: "channel_example",
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            hostAddress: "hostAddress_example",
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            topic: "topic_example",
          },
        },
        pubSub: {
          "key": {
            credentialSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            deleteSubscriptionOnFinish: true,
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            projectID: "projectID_example",
            subscriptionID: "subscriptionID_example",
            topic: "topic_example",
            topicProjectID: "topicProjectID_example",
          },
        },
        pulsar: {
          "key": {
            authTokenSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            connectionBackoff: {
              duration: {
                int64Val: "int64Val_example",
                strVal: "strVal_example",
                type: "type_example",
              },
              factor: {
                value: 'YQ==',
              },
              jitter: {
                value: 'YQ==',
              },
              steps: 1,
            },
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            tlsAllowInsecureConnection: true,
            tlsTrustCertsSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            tlsValidateHostname: true,
            topics: [
              "topics_example",
            ],
            type: "type_example",
            url: "url_example",
          },
        },
        redis: {
          "key": {
            channels: [
              "channels_example",
            ],
            db: 1,
            filter: {
              expression: "expression_example",
            },
            hostAddress: "hostAddress_example",
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            namespace: "namespace_example",
            password: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            username: "username_example",
          },
        },
        redisStream: {
          "key": {
            consumerGroup: "consumerGroup_example",
            db: 1,
            filter: {
              expression: "expression_example",
            },
            hostAddress: "hostAddress_example",
            maxMsgCountPerRead: 1,
            metadata: {
              "key": "key_example",
            },
            password: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            streams: [
              "streams_example",
            ],
            tls: {
              caCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              clientKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              insecureSkipVerify: true,
            },
            username: "username_example",
          },
        },
        replicas: 1,
        resource: {
          "key": {
            eventTypes: [
              "eventTypes_example",
            ],
            filter: {
              afterStart: true,
              createdBy: new Date('1970-01-01T00:00:00.00Z'),
              fields: [
                {
                  key: "key_example",
                  operation: "operation_example",
                  value: "value_example",
                },
              ],
              labels: [
                {
                  key: "key_example",
                  operation: "operation_example",
                  value: "value_example",
                },
              ],
              prefix: "prefix_example",
            },
            groupVersionResource: {
              group: "group_example",
              resource: "resource_example",
              version: "version_example",
            },
            metadata: {
              "key": "key_example",
            },
            namespace: "namespace_example",
          },
        },
        service: {
          clusterIP: "clusterIP_example",
          ports: [
            {
              appProtocol: "appProtocol_example",
              name: "name_example",
              nodePort: 1,
              port: 1,
              protocol: "SCTP",
              targetPort: "targetPort_example",
            },
          ],
        },
        slack: {
          "key": {
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            signingSecret: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            token: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        sns: {
          "key": {
            accessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            endpoint: "endpoint_example",
            filter: {
              expression: "expression_example",
            },
            metadata: {
              "key": "key_example",
            },
            region: "region_example",
            roleARN: "roleARN_example",
            secretKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            topicArn: "topicArn_example",
            validateSignature: true,
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        sqs: {
          "key": {
            accessKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            dlq: true,
            endpoint: "endpoint_example",
            filter: {
              expression: "expression_example",
            },
            jsonBody: true,
            metadata: {
              "key": "key_example",
            },
            queue: "queue_example",
            queueAccountId: "queueAccountId_example",
            region: "region_example",
            roleARN: "roleARN_example",
            secretKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            sessionToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            waitTimeSeconds: "waitTimeSeconds_example",
          },
        },
        storageGrid: {
          "key": {
            apiURL: "apiURL_example",
            authToken: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            bucket: "bucket_example",
            events: [
              "events_example",
            ],
            filter: {
              prefix: "prefix_example",
              suffix: "suffix_example",
            },
            metadata: {
              "key": "key_example",
            },
            region: "region_example",
            topicArn: "topicArn_example",
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        stripe: {
          "key": {
            apiKey: {
              key: "key_example",
              name: "name_example",
              optional: true,
            },
            createWebhook: true,
            eventFilter: [
              "eventFilter_example",
            ],
            metadata: {
              "key": "key_example",
            },
            webhook: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
        template: {
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "DoesNotExist",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          container: {
            args: [
              "args_example",
            ],
            command: [
              "command_example",
            ],
            env: [
              {
                name: "name_example",
                value: "value_example",
                valueFrom: {
                  configMapKeyRef: {
                    key: "key_example",
                    name: "name_example",
                    optional: true,
                  },
                  fieldRef: {
                    apiVersion: "apiVersion_example",
                    fieldPath: "fieldPath_example",
                  },
                  resourceFieldRef: {
                    containerName: "containerName_example",
                    divisor: "divisor_example",
                    resource: "resource_example",
                  },
                  secretKeyRef: {
                    key: "key_example",
                    name: "name_example",
                    optional: true,
                  },
                },
              },
            ],
            envFrom: [
              {
                configMapRef: {
                  name: "name_example",
                  optional: true,
                },
                prefix: "prefix_example",
                secretRef: {
                  name: "name_example",
                  optional: true,
                },
              },
            ],
            image: "image_example",
            imagePullPolicy: "Always",
            lifecycle: {
              postStart: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "HTTP",
                },
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
              },
              preStop: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "HTTP",
                },
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
              },
            },
            livenessProbe: {
              exec: {
                command: [
                  "command_example",
                ],
              },
              failureThreshold: 1,
              grpc: {
                port: 1,
                service: "service_example",
              },
              httpGet: {
                host: "host_example",
                httpHeaders: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                path: "path_example",
                port: "port_example",
                scheme: "HTTP",
              },
              initialDelaySeconds: 1,
              periodSeconds: 1,
              successThreshold: 1,
              tcpSocket: {
                host: "host_example",
                port: "port_example",
              },
              terminationGracePeriodSeconds: 1,
              timeoutSeconds: 1,
            },
            name: "name_example",
            ports: [
              {
                containerPort: 1,
                hostIP: "hostIP_example",
                hostPort: 1,
                name: "name_example",
                protocol: "SCTP",
              },
            ],
            readinessProbe: {
              exec: {
                command: [
                  "command_example",
                ],
              },
              failureThreshold: 1,
              grpc: {
                port: 1,
                service: "service_example",
              },
              httpGet: {
                host: "host_example",
                httpHeaders: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                path: "path_example",
                port: "port_example",
                scheme: "HTTP",
              },
              initialDelaySeconds: 1,
              periodSeconds: 1,
              successThreshold: 1,
              tcpSocket: {
                host: "host_example",
                port: "port_example",
              },
              terminationGracePeriodSeconds: 1,
              timeoutSeconds: 1,
            },
            resources: {
              limits: {
                "key": "key_example",
              },
              requests: {
                "key": "key_example",
              },
            },
            securityContext: {
              allowPrivilegeEscalation: true,
              capabilities: {
                add: [
                  "add_example",
                ],
                drop: [
                  "drop_example",
                ],
              },
              privileged: true,
              procMount: "procMount_example",
              readOnlyRootFilesystem: true,
              runAsGroup: 1,
              runAsNonRoot: true,
              runAsUser: 1,
              seLinuxOptions: {
                level: "level_example",
                role: "role_example",
                type: "type_example",
                user: "user_example",
              },
              seccompProfile: {
                localhostProfile: "localhostProfile_example",
                type: "Localhost",
              },
              windowsOptions: {
                gmsaCredentialSpec: "gmsaCredentialSpec_example",
                gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                hostProcess: true,
                runAsUserName: "runAsUserName_example",
              },
            },
            startupProbe: {
              exec: {
                command: [
                  "command_example",
                ],
              },
              failureThreshold: 1,
              grpc: {
                port: 1,
                service: "service_example",
              },
              httpGet: {
                host: "host_example",
                httpHeaders: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                path: "path_example",
                port: "port_example",
                scheme: "HTTP",
              },
              initialDelaySeconds: 1,
              periodSeconds: 1,
              successThreshold: 1,
              tcpSocket: {
                host: "host_example",
                port: "port_example",
              },
              terminationGracePeriodSeconds: 1,
              timeoutSeconds: 1,
            },
            stdin: true,
            stdinOnce: true,
            terminationMessagePath: "terminationMessagePath_example",
            terminationMessagePolicy: "FallbackToLogsOnError",
            tty: true,
            volumeDevices: [
              {
                devicePath: "devicePath_example",
                name: "name_example",
              },
            ],
            volumeMounts: [
              {
                mountPath: "mountPath_example",
                mountPropagation: "mountPropagation_example",
                name: "name_example",
                readOnly: true,
                subPath: "subPath_example",
                subPathExpr: "subPathExpr_example",
              },
            ],
            workingDir: "workingDir_example",
          },
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          metadata: {
            annotations: {
              "key": "key_example",
            },
            labels: {
              "key": "key_example",
            },
          },
          nodeSelector: {
            "key": "key_example",
          },
          priority: 1,
          priorityClassName: "priorityClassName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "Localhost",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccountName: "serviceAccountName_example",
          tolerations: [
            {
              effect: "NoExecute",
              key: "key_example",
              operator: "Equal",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
        webhook: {
          "key": {
            filter: {
              expression: "expression_example",
            },
            webhookContext: {
              authSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              endpoint: "endpoint_example",
              maxPayloadSize: "maxPayloadSize_example",
              metadata: {
                "key": "key_example",
              },
              method: "method_example",
              port: "port_example",
              serverCertSecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              serverKeySecret: {
                key: "key_example",
                name: "name_example",
                optional: true,
              },
              url: "url_example",
            },
          },
        },
      },
      status: {
        status: {
          conditions: [
            {
              lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
              message: "message_example",
              reason: "reason_example",
              status: "status_example",
              type: "type_example",
            },
          ],
        },
      },
    },
    name: "name_example",
    namespace: "namespace_example",
  },
};

apiInstance.eventSourceServiceUpdateEventSource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EventsourceUpdateEventSourceRequest**|  |
 **namespace** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined


### Return type

**IoArgoprojEventsV1alpha1EventSource**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventSourceServiceWatchEventSources**
> StreamResultOfEventsourceEventSourceWatchEvent eventSourceServiceWatchEventSources()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventSourceServiceApi(configuration);

let body:.EventSourceServiceApiEventSourceServiceWatchEventSourcesRequest = {
  // string
  namespace: "namespace_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional. (optional)
  listOptionsLabelSelector: "listOptions.labelSelector_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional. (optional)
  listOptionsFieldSelector: "listOptions.fieldSelector_example",
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional. (optional)
  listOptionsWatch: true,
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional. (optional)
  listOptionsAllowWatchBookmarks: true,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional (optional)
  listOptionsResourceVersion: "listOptions.resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional (optional)
  listOptionsResourceVersionMatch: "listOptions.resourceVersionMatch_example",
  // string | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional. (optional)
  listOptionsTimeoutSeconds: "listOptions.timeoutSeconds_example",
  // string | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  listOptionsLimit: "listOptions.limit_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  listOptionsContinue: "listOptions.continue_example",
};

apiInstance.eventSourceServiceWatchEventSources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **listOptionsLabelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional. | (optional) defaults to undefined
 **listOptionsFieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional. | (optional) defaults to undefined
 **listOptionsWatch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional. | (optional) defaults to undefined
 **listOptionsAllowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional. | (optional) defaults to undefined
 **listOptionsResourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional | (optional) defaults to undefined
 **listOptionsResourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional | (optional) defaults to undefined
 **listOptionsTimeoutSeconds** | [**string**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional. | (optional) defaults to undefined
 **listOptionsLimit** | [**string**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **listOptionsContinue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined


### Return type

**StreamResultOfEventsourceEventSourceWatchEvent**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


