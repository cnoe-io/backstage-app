import { Terraform } from "./Terraform";
import { KubernetesApi } from "@backstage/plugin-kubernetes";
import { FrontendHostDiscovery } from "@backstage/core-app-api";
import { UserIdentity } from "@backstage/core-components";
import { IdentityApi, ConfigApi } from "@backstage/core-plugin-api"

describe("TerraformClient", () => {
  const mockKClient: jest.Mocked<KubernetesApi> = {
    getObjectsByEntity: jest.fn(),
    getClusters: jest.fn(),
    getCluster: jest.fn(),
    getWorkloadsByEntity: jest.fn(),
    getCustomObjectsByEntity: jest.fn(),
    proxy: jest.fn(),
  };

  const mockIdentity: jest.Mocked<IdentityApi> = {
    getProfileInfo:jest.fn(),
    getBackstageIdentity: jest.fn(),
    getCredentials: jest.fn(),
    signOut: jest.fn(),

  }

  const mockConfig: jest.Mocked<ConfigApi> = {
    has: jest.fn(),
    keys: jest.fn(),
    get: jest.fn(),
    getOptional: jest.fn(),
    getConfig: jest.fn(),
    getOptionalConfig: jest.fn(),
    getConfigArray: jest.fn(),
    getOptionalConfigArray: jest.fn(),
    getNumber: jest.fn(),
    getOptionalNumber: jest.fn(),
    getBoolean: jest.fn(),
    getOptionalBoolean: jest.fn(),
    getString: jest.fn(),
    getOptionalString: jest.fn(),
    getStringArray: jest.fn(),
    getOptionalStringArray: jest.fn(),
  }

  beforeAll(() => {
    jest
      .spyOn(FrontendHostDiscovery.prototype, "getBaseUrl")
      .mockImplementation((id) => {
        return Promise.resolve(`https://backstage.io/${id}`);
      });
    jest
      .spyOn(UserIdentity.prototype, "getCredentials")
      .mockImplementation(() => {
        return Promise.resolve({ token: "abc" });
      });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("can fetch from k8s", async () => {
    mockKClient.proxy.mockResolvedValue({
      status: 200,
      ok: true,
      text: async () => "teststring",
    } as Response);
    const a = new Terraform(mockKClient, mockIdentity, mockConfig);
    const spy = jest.spyOn(mockKClient, "proxy");
    const resp = await a.getSecret("abc", "default", "test");
    expect(resp).toBeDefined();
    expect(spy).toHaveBeenCalledWith({
      clusterName: "abc",
      path: "/apis/v1/namespaces/default/secrets/test?timeoutSeconds=30",
    });
  });
  it("can fetch from default k8s cluster", async () => {
    mockKClient.proxy.mockResolvedValue({
      status: 200,
      ok: true,
      text: async () => "teststring"
    } as Response);
    mockKClient.getClusters.mockResolvedValue([
      {
        name: "cluster-1",
        authProvider: "provider-1",
      },
    ]);

    const a = new Terraform(mockKClient, mockIdentity, mockConfig);
    const spy = jest.spyOn(a, "getFirstCluster");
    const resp = await a.getSecret(undefined, "default", "test");
    expect(resp).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });
  it("rejects when non-ok status returned", async () => {
    mockKClient.proxy.mockResolvedValue({
      status: 500,
      ok: false,
      statusText: "something went wrong",
      text: async () => "oh no",
    } as Response);

    const a = new Terraform(mockKClient, mockIdentity, mockConfig);
    await expect(
      a.getSecret("abc", "default", "test")
    ).rejects.toEqual(
      "failed to fetch resources: 500, something went wrong, oh no"
    );
  });
});
