export interface Config {
  /** Optional configurations for the Argo Workflows plugin
   * @visibility frontend
   */
  argoWorkflows?: {
    /**
     * The base url of the Argo Workflows installation.
     * @visibility frontend
     */
    baseUrl: string;
  };
}
