// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GrpcGatewayRuntimeError } from '../models/GrpcGatewayRuntimeError';

/**
 * no description
 */
export class ArtifactServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get an artifact.
     * @param namespace 
     * @param idDiscriminator 
     * @param id 
     * @param nodeId 
     * @param artifactName 
     * @param artifactDiscriminator 
     */
    public async artifactServiceGetArtifactFile(namespace: string, idDiscriminator: 'workflow' | 'archived-workflows ', id: string, nodeId: string, artifactName: string, artifactDiscriminator: 'outputs', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetArtifactFile", "namespace");
        }


        // verify required parameter 'idDiscriminator' is not null or undefined
        if (idDiscriminator === null || idDiscriminator === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetArtifactFile", "idDiscriminator");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetArtifactFile", "id");
        }


        // verify required parameter 'nodeId' is not null or undefined
        if (nodeId === null || nodeId === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetArtifactFile", "nodeId");
        }


        // verify required parameter 'artifactName' is not null or undefined
        if (artifactName === null || artifactName === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetArtifactFile", "artifactName");
        }


        // verify required parameter 'artifactDiscriminator' is not null or undefined
        if (artifactDiscriminator === null || artifactDiscriminator === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetArtifactFile", "artifactDiscriminator");
        }


        // Path Params
        const localVarPath = '/artifact-files/{namespace}/{idDiscriminator}/{id}/{nodeId}/{artifactDiscriminator}/{artifactName}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'idDiscriminator' + '}', encodeURIComponent(String(idDiscriminator)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'nodeId' + '}', encodeURIComponent(String(nodeId)))
            .replace('{' + 'artifactName' + '}', encodeURIComponent(String(artifactName)))
            .replace('{' + 'artifactDiscriminator' + '}', encodeURIComponent(String(artifactDiscriminator)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get an input artifact.
     * @param namespace 
     * @param name 
     * @param nodeId 
     * @param artifactName 
     */
    public async artifactServiceGetInputArtifact(namespace: string, name: string, nodeId: string, artifactName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetInputArtifact", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetInputArtifact", "name");
        }


        // verify required parameter 'nodeId' is not null or undefined
        if (nodeId === null || nodeId === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetInputArtifact", "nodeId");
        }


        // verify required parameter 'artifactName' is not null or undefined
        if (artifactName === null || artifactName === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetInputArtifact", "artifactName");
        }


        // Path Params
        const localVarPath = '/input-artifacts/{namespace}/{name}/{nodeId}/{artifactName}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'nodeId' + '}', encodeURIComponent(String(nodeId)))
            .replace('{' + 'artifactName' + '}', encodeURIComponent(String(artifactName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get an input artifact by UID.
     * @param uid 
     * @param nodeId 
     * @param artifactName 
     */
    public async artifactServiceGetInputArtifactByUID(uid: string, nodeId: string, artifactName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetInputArtifactByUID", "uid");
        }


        // verify required parameter 'nodeId' is not null or undefined
        if (nodeId === null || nodeId === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetInputArtifactByUID", "nodeId");
        }


        // verify required parameter 'artifactName' is not null or undefined
        if (artifactName === null || artifactName === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetInputArtifactByUID", "artifactName");
        }


        // Path Params
        const localVarPath = '/input-artifacts-by-uid/{uid}/{nodeId}/{artifactName}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)))
            .replace('{' + 'nodeId' + '}', encodeURIComponent(String(nodeId)))
            .replace('{' + 'artifactName' + '}', encodeURIComponent(String(artifactName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get an output artifact.
     * @param namespace 
     * @param name 
     * @param nodeId 
     * @param artifactName 
     */
    public async artifactServiceGetOutputArtifact(namespace: string, name: string, nodeId: string, artifactName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetOutputArtifact", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetOutputArtifact", "name");
        }


        // verify required parameter 'nodeId' is not null or undefined
        if (nodeId === null || nodeId === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetOutputArtifact", "nodeId");
        }


        // verify required parameter 'artifactName' is not null or undefined
        if (artifactName === null || artifactName === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetOutputArtifact", "artifactName");
        }


        // Path Params
        const localVarPath = '/artifacts/{namespace}/{name}/{nodeId}/{artifactName}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'nodeId' + '}', encodeURIComponent(String(nodeId)))
            .replace('{' + 'artifactName' + '}', encodeURIComponent(String(artifactName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get an output artifact by UID.
     * @param uid 
     * @param nodeId 
     * @param artifactName 
     */
    public async artifactServiceGetOutputArtifactByUID(uid: string, nodeId: string, artifactName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetOutputArtifactByUID", "uid");
        }


        // verify required parameter 'nodeId' is not null or undefined
        if (nodeId === null || nodeId === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetOutputArtifactByUID", "nodeId");
        }


        // verify required parameter 'artifactName' is not null or undefined
        if (artifactName === null || artifactName === undefined) {
            throw new RequiredError("ArtifactServiceApi", "artifactServiceGetOutputArtifactByUID", "artifactName");
        }


        // Path Params
        const localVarPath = '/artifacts-by-uid/{uid}/{nodeId}/{artifactName}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)))
            .replace('{' + 'nodeId' + '}', encodeURIComponent(String(nodeId)))
            .replace('{' + 'artifactName' + '}', encodeURIComponent(String(artifactName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ArtifactServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to artifactServiceGetArtifactFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async artifactServiceGetArtifactFile(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", "binary"
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to artifactServiceGetInputArtifact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async artifactServiceGetInputArtifact(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", "binary"
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to artifactServiceGetInputArtifactByUID
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async artifactServiceGetInputArtifactByUID(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", "binary"
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to artifactServiceGetOutputArtifact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async artifactServiceGetOutputArtifact(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", "binary"
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to artifactServiceGetOutputArtifactByUID
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async artifactServiceGetOutputArtifactByUID(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", "binary"
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
