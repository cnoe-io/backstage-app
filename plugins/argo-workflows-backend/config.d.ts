export interface Config {
    /** Optional configurations for the Argo Workflows plugin */
    argoWorkflows?: {
        /**
         * @visibility secret
         */
        username?: string;
        /**
         * @visibility secret
         */
        password?: string;
        /**
         * The base url of the Argo Workflows instance.
         * @visibility frontend
         */
        baseUrl?: string;
        /**
         * The base url of the Argo Workflows instance.
         * @visibility frontend
         */
        appLocatorMethods?: Array</**
         * @visibility frontend
         */
            {
                /**
                 * Supported type is 'config'
                 * @visibility frontend
                 */
                type: string;
                instances: Array<{
                    /**
                     * @visibility frontend
                     */
                    name: string;
                    /**
                     * @visibility frontend
                     */
                    url: string;
                    /**
                     * @visibility secret
                     */
                    token?: string;
                    /**
                     * @visibility secret
                     */
                    username?: string;
                    /**
                     * @visibility secret
                     */
                    password?: string;
                }>;
            }>;
    };
}
