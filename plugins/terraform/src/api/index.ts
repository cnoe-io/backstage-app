import { createApiRef } from "@backstage/core-plugin-api";

export { Terraform } from "./Terraform";

export const TerraformApiRef = createApiRef<TerraformApi>({
  id: "plugin.terraform",
});
export interface TerraformApi {

  getSecret(
    clusterName: string | undefined,
    namespace: string | undefined,
    secretName: string,
  ): Promise<string>;

  deflate(
    tfState:string
  ): Promise<string>;

  s3GetFileList(
    Bucket:string,
    Prefix:string
  ): Promise<string>;

  localGetFileList(
    FileLocation:string
  ): Promise<string>;

  getTFStateFile(
    Bucket:string,
    file:any
  ): Promise<string>;

}
