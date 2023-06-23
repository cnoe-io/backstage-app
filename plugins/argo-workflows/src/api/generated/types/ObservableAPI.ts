import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { EventsourceCreateEventSourceRequest } from '../models/EventsourceCreateEventSourceRequest';
import { EventsourceEventSourceWatchEvent } from '../models/EventsourceEventSourceWatchEvent';
import { EventsourceLogEntry } from '../models/EventsourceLogEntry';
import { EventsourceUpdateEventSourceRequest } from '../models/EventsourceUpdateEventSourceRequest';
import { GoogleProtobufAny } from '../models/GoogleProtobufAny';
import { GrpcGatewayRuntimeError } from '../models/GrpcGatewayRuntimeError';
import { GrpcGatewayRuntimeStreamError } from '../models/GrpcGatewayRuntimeStreamError';
import { IoArgoprojEventsV1alpha1AMQPConsumeConfig } from '../models/IoArgoprojEventsV1alpha1AMQPConsumeConfig';
import { IoArgoprojEventsV1alpha1AMQPEventSource } from '../models/IoArgoprojEventsV1alpha1AMQPEventSource';
import { IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig } from '../models/IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig';
import { IoArgoprojEventsV1alpha1AMQPQueueBindConfig } from '../models/IoArgoprojEventsV1alpha1AMQPQueueBindConfig';
import { IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig } from '../models/IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig';
import { IoArgoprojEventsV1alpha1AWSLambdaTrigger } from '../models/IoArgoprojEventsV1alpha1AWSLambdaTrigger';
import { IoArgoprojEventsV1alpha1Amount } from '../models/IoArgoprojEventsV1alpha1Amount';
import { IoArgoprojEventsV1alpha1ArgoWorkflowTrigger } from '../models/IoArgoprojEventsV1alpha1ArgoWorkflowTrigger';
import { IoArgoprojEventsV1alpha1ArtifactLocation } from '../models/IoArgoprojEventsV1alpha1ArtifactLocation';
import { IoArgoprojEventsV1alpha1AzureEventHubsTrigger } from '../models/IoArgoprojEventsV1alpha1AzureEventHubsTrigger';
import { IoArgoprojEventsV1alpha1AzureEventsHubEventSource } from '../models/IoArgoprojEventsV1alpha1AzureEventsHubEventSource';
import { IoArgoprojEventsV1alpha1Backoff } from '../models/IoArgoprojEventsV1alpha1Backoff';
import { IoArgoprojEventsV1alpha1BasicAuth } from '../models/IoArgoprojEventsV1alpha1BasicAuth';
import { IoArgoprojEventsV1alpha1BitbucketAuth } from '../models/IoArgoprojEventsV1alpha1BitbucketAuth';
import { IoArgoprojEventsV1alpha1BitbucketBasicAuth } from '../models/IoArgoprojEventsV1alpha1BitbucketBasicAuth';
import { IoArgoprojEventsV1alpha1BitbucketEventSource } from '../models/IoArgoprojEventsV1alpha1BitbucketEventSource';
import { IoArgoprojEventsV1alpha1BitbucketRepository } from '../models/IoArgoprojEventsV1alpha1BitbucketRepository';
import { IoArgoprojEventsV1alpha1BitbucketServerEventSource } from '../models/IoArgoprojEventsV1alpha1BitbucketServerEventSource';
import { IoArgoprojEventsV1alpha1BitbucketServerRepository } from '../models/IoArgoprojEventsV1alpha1BitbucketServerRepository';
import { IoArgoprojEventsV1alpha1CalendarEventSource } from '../models/IoArgoprojEventsV1alpha1CalendarEventSource';
import { IoArgoprojEventsV1alpha1CatchupConfiguration } from '../models/IoArgoprojEventsV1alpha1CatchupConfiguration';
import { IoArgoprojEventsV1alpha1Condition } from '../models/IoArgoprojEventsV1alpha1Condition';
import { IoArgoprojEventsV1alpha1ConditionsResetByTime } from '../models/IoArgoprojEventsV1alpha1ConditionsResetByTime';
import { IoArgoprojEventsV1alpha1ConditionsResetCriteria } from '../models/IoArgoprojEventsV1alpha1ConditionsResetCriteria';
import { IoArgoprojEventsV1alpha1ConfigMapPersistence } from '../models/IoArgoprojEventsV1alpha1ConfigMapPersistence';
import { IoArgoprojEventsV1alpha1CustomTrigger } from '../models/IoArgoprojEventsV1alpha1CustomTrigger';
import { IoArgoprojEventsV1alpha1DataFilter } from '../models/IoArgoprojEventsV1alpha1DataFilter';
import { IoArgoprojEventsV1alpha1EmitterEventSource } from '../models/IoArgoprojEventsV1alpha1EmitterEventSource';
import { IoArgoprojEventsV1alpha1EventContext } from '../models/IoArgoprojEventsV1alpha1EventContext';
import { IoArgoprojEventsV1alpha1EventDependency } from '../models/IoArgoprojEventsV1alpha1EventDependency';
import { IoArgoprojEventsV1alpha1EventDependencyFilter } from '../models/IoArgoprojEventsV1alpha1EventDependencyFilter';
import { IoArgoprojEventsV1alpha1EventDependencyTransformer } from '../models/IoArgoprojEventsV1alpha1EventDependencyTransformer';
import { IoArgoprojEventsV1alpha1EventPersistence } from '../models/IoArgoprojEventsV1alpha1EventPersistence';
import { IoArgoprojEventsV1alpha1EventSource } from '../models/IoArgoprojEventsV1alpha1EventSource';
import { IoArgoprojEventsV1alpha1EventSourceFilter } from '../models/IoArgoprojEventsV1alpha1EventSourceFilter';
import { IoArgoprojEventsV1alpha1EventSourceList } from '../models/IoArgoprojEventsV1alpha1EventSourceList';
import { IoArgoprojEventsV1alpha1EventSourceSpec } from '../models/IoArgoprojEventsV1alpha1EventSourceSpec';
import { IoArgoprojEventsV1alpha1EventSourceStatus } from '../models/IoArgoprojEventsV1alpha1EventSourceStatus';
import { IoArgoprojEventsV1alpha1ExprFilter } from '../models/IoArgoprojEventsV1alpha1ExprFilter';
import { IoArgoprojEventsV1alpha1FileArtifact } from '../models/IoArgoprojEventsV1alpha1FileArtifact';
import { IoArgoprojEventsV1alpha1FileEventSource } from '../models/IoArgoprojEventsV1alpha1FileEventSource';
import { IoArgoprojEventsV1alpha1GenericEventSource } from '../models/IoArgoprojEventsV1alpha1GenericEventSource';
import { IoArgoprojEventsV1alpha1GitArtifact } from '../models/IoArgoprojEventsV1alpha1GitArtifact';
import { IoArgoprojEventsV1alpha1GitCreds } from '../models/IoArgoprojEventsV1alpha1GitCreds';
import { IoArgoprojEventsV1alpha1GitRemoteConfig } from '../models/IoArgoprojEventsV1alpha1GitRemoteConfig';
import { IoArgoprojEventsV1alpha1GithubAppCreds } from '../models/IoArgoprojEventsV1alpha1GithubAppCreds';
import { IoArgoprojEventsV1alpha1GithubEventSource } from '../models/IoArgoprojEventsV1alpha1GithubEventSource';
import { IoArgoprojEventsV1alpha1GitlabEventSource } from '../models/IoArgoprojEventsV1alpha1GitlabEventSource';
import { IoArgoprojEventsV1alpha1HDFSEventSource } from '../models/IoArgoprojEventsV1alpha1HDFSEventSource';
import { IoArgoprojEventsV1alpha1HTTPTrigger } from '../models/IoArgoprojEventsV1alpha1HTTPTrigger';
import { IoArgoprojEventsV1alpha1Int64OrString } from '../models/IoArgoprojEventsV1alpha1Int64OrString';
import { IoArgoprojEventsV1alpha1K8SResourcePolicy } from '../models/IoArgoprojEventsV1alpha1K8SResourcePolicy';
import { IoArgoprojEventsV1alpha1KafkaConsumerGroup } from '../models/IoArgoprojEventsV1alpha1KafkaConsumerGroup';
import { IoArgoprojEventsV1alpha1KafkaEventSource } from '../models/IoArgoprojEventsV1alpha1KafkaEventSource';
import { IoArgoprojEventsV1alpha1KafkaTrigger } from '../models/IoArgoprojEventsV1alpha1KafkaTrigger';
import { IoArgoprojEventsV1alpha1LogTrigger } from '../models/IoArgoprojEventsV1alpha1LogTrigger';
import { IoArgoprojEventsV1alpha1MQTTEventSource } from '../models/IoArgoprojEventsV1alpha1MQTTEventSource';
import { IoArgoprojEventsV1alpha1Metadata } from '../models/IoArgoprojEventsV1alpha1Metadata';
import { IoArgoprojEventsV1alpha1NATSAuth } from '../models/IoArgoprojEventsV1alpha1NATSAuth';
import { IoArgoprojEventsV1alpha1NATSEventsSource } from '../models/IoArgoprojEventsV1alpha1NATSEventsSource';
import { IoArgoprojEventsV1alpha1NATSTrigger } from '../models/IoArgoprojEventsV1alpha1NATSTrigger';
import { IoArgoprojEventsV1alpha1NSQEventSource } from '../models/IoArgoprojEventsV1alpha1NSQEventSource';
import { IoArgoprojEventsV1alpha1OpenWhiskTrigger } from '../models/IoArgoprojEventsV1alpha1OpenWhiskTrigger';
import { IoArgoprojEventsV1alpha1OwnedRepositories } from '../models/IoArgoprojEventsV1alpha1OwnedRepositories';
import { IoArgoprojEventsV1alpha1PayloadField } from '../models/IoArgoprojEventsV1alpha1PayloadField';
import { IoArgoprojEventsV1alpha1PubSubEventSource } from '../models/IoArgoprojEventsV1alpha1PubSubEventSource';
import { IoArgoprojEventsV1alpha1PulsarEventSource } from '../models/IoArgoprojEventsV1alpha1PulsarEventSource';
import { IoArgoprojEventsV1alpha1PulsarTrigger } from '../models/IoArgoprojEventsV1alpha1PulsarTrigger';
import { IoArgoprojEventsV1alpha1RateLimit } from '../models/IoArgoprojEventsV1alpha1RateLimit';
import { IoArgoprojEventsV1alpha1RedisEventSource } from '../models/IoArgoprojEventsV1alpha1RedisEventSource';
import { IoArgoprojEventsV1alpha1RedisStreamEventSource } from '../models/IoArgoprojEventsV1alpha1RedisStreamEventSource';
import { IoArgoprojEventsV1alpha1Resource } from '../models/IoArgoprojEventsV1alpha1Resource';
import { IoArgoprojEventsV1alpha1ResourceEventSource } from '../models/IoArgoprojEventsV1alpha1ResourceEventSource';
import { IoArgoprojEventsV1alpha1ResourceFilter } from '../models/IoArgoprojEventsV1alpha1ResourceFilter';
import { IoArgoprojEventsV1alpha1S3Artifact } from '../models/IoArgoprojEventsV1alpha1S3Artifact';
import { IoArgoprojEventsV1alpha1S3Bucket } from '../models/IoArgoprojEventsV1alpha1S3Bucket';
import { IoArgoprojEventsV1alpha1S3Filter } from '../models/IoArgoprojEventsV1alpha1S3Filter';
import { IoArgoprojEventsV1alpha1SASLConfig } from '../models/IoArgoprojEventsV1alpha1SASLConfig';
import { IoArgoprojEventsV1alpha1SNSEventSource } from '../models/IoArgoprojEventsV1alpha1SNSEventSource';
import { IoArgoprojEventsV1alpha1SQSEventSource } from '../models/IoArgoprojEventsV1alpha1SQSEventSource';
import { IoArgoprojEventsV1alpha1SecureHeader } from '../models/IoArgoprojEventsV1alpha1SecureHeader';
import { IoArgoprojEventsV1alpha1Selector } from '../models/IoArgoprojEventsV1alpha1Selector';
import { IoArgoprojEventsV1alpha1Sensor } from '../models/IoArgoprojEventsV1alpha1Sensor';
import { IoArgoprojEventsV1alpha1SensorList } from '../models/IoArgoprojEventsV1alpha1SensorList';
import { IoArgoprojEventsV1alpha1SensorSpec } from '../models/IoArgoprojEventsV1alpha1SensorSpec';
import { IoArgoprojEventsV1alpha1SensorStatus } from '../models/IoArgoprojEventsV1alpha1SensorStatus';
import { IoArgoprojEventsV1alpha1Service } from '../models/IoArgoprojEventsV1alpha1Service';
import { IoArgoprojEventsV1alpha1SlackEventSource } from '../models/IoArgoprojEventsV1alpha1SlackEventSource';
import { IoArgoprojEventsV1alpha1SlackTrigger } from '../models/IoArgoprojEventsV1alpha1SlackTrigger';
import { IoArgoprojEventsV1alpha1StandardK8STrigger } from '../models/IoArgoprojEventsV1alpha1StandardK8STrigger';
import { IoArgoprojEventsV1alpha1Status } from '../models/IoArgoprojEventsV1alpha1Status';
import { IoArgoprojEventsV1alpha1StatusPolicy } from '../models/IoArgoprojEventsV1alpha1StatusPolicy';
import { IoArgoprojEventsV1alpha1StorageGridEventSource } from '../models/IoArgoprojEventsV1alpha1StorageGridEventSource';
import { IoArgoprojEventsV1alpha1StorageGridFilter } from '../models/IoArgoprojEventsV1alpha1StorageGridFilter';
import { IoArgoprojEventsV1alpha1StripeEventSource } from '../models/IoArgoprojEventsV1alpha1StripeEventSource';
import { IoArgoprojEventsV1alpha1TLSConfig } from '../models/IoArgoprojEventsV1alpha1TLSConfig';
import { IoArgoprojEventsV1alpha1Template } from '../models/IoArgoprojEventsV1alpha1Template';
import { IoArgoprojEventsV1alpha1TimeFilter } from '../models/IoArgoprojEventsV1alpha1TimeFilter';
import { IoArgoprojEventsV1alpha1Trigger } from '../models/IoArgoprojEventsV1alpha1Trigger';
import { IoArgoprojEventsV1alpha1TriggerParameter } from '../models/IoArgoprojEventsV1alpha1TriggerParameter';
import { IoArgoprojEventsV1alpha1TriggerParameterSource } from '../models/IoArgoprojEventsV1alpha1TriggerParameterSource';
import { IoArgoprojEventsV1alpha1TriggerPolicy } from '../models/IoArgoprojEventsV1alpha1TriggerPolicy';
import { IoArgoprojEventsV1alpha1TriggerTemplate } from '../models/IoArgoprojEventsV1alpha1TriggerTemplate';
import { IoArgoprojEventsV1alpha1URLArtifact } from '../models/IoArgoprojEventsV1alpha1URLArtifact';
import { IoArgoprojEventsV1alpha1ValueFromSource } from '../models/IoArgoprojEventsV1alpha1ValueFromSource';
import { IoArgoprojEventsV1alpha1WatchPathConfig } from '../models/IoArgoprojEventsV1alpha1WatchPathConfig';
import { IoArgoprojEventsV1alpha1WebhookContext } from '../models/IoArgoprojEventsV1alpha1WebhookContext';
import { IoArgoprojEventsV1alpha1WebhookEventSource } from '../models/IoArgoprojEventsV1alpha1WebhookEventSource';
import { IoArgoprojWorkflowV1alpha1ArchiveStrategy } from '../models/IoArgoprojWorkflowV1alpha1ArchiveStrategy';
import { IoArgoprojWorkflowV1alpha1Arguments } from '../models/IoArgoprojWorkflowV1alpha1Arguments';
import { IoArgoprojWorkflowV1alpha1ArtGCStatus } from '../models/IoArgoprojWorkflowV1alpha1ArtGCStatus';
import { IoArgoprojWorkflowV1alpha1Artifact } from '../models/IoArgoprojWorkflowV1alpha1Artifact';
import { IoArgoprojWorkflowV1alpha1ArtifactGC } from '../models/IoArgoprojWorkflowV1alpha1ArtifactGC';
import { IoArgoprojWorkflowV1alpha1ArtifactGCSpec } from '../models/IoArgoprojWorkflowV1alpha1ArtifactGCSpec';
import { IoArgoprojWorkflowV1alpha1ArtifactGCStatus } from '../models/IoArgoprojWorkflowV1alpha1ArtifactGCStatus';
import { IoArgoprojWorkflowV1alpha1ArtifactLocation } from '../models/IoArgoprojWorkflowV1alpha1ArtifactLocation';
import { IoArgoprojWorkflowV1alpha1ArtifactNodeSpec } from '../models/IoArgoprojWorkflowV1alpha1ArtifactNodeSpec';
import { IoArgoprojWorkflowV1alpha1ArtifactPaths } from '../models/IoArgoprojWorkflowV1alpha1ArtifactPaths';
import { IoArgoprojWorkflowV1alpha1ArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1ArtifactRepository';
import { IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef } from '../models/IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef';
import { IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus } from '../models/IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus';
import { IoArgoprojWorkflowV1alpha1ArtifactResult } from '../models/IoArgoprojWorkflowV1alpha1ArtifactResult';
import { IoArgoprojWorkflowV1alpha1ArtifactResultNodeStatus } from '../models/IoArgoprojWorkflowV1alpha1ArtifactResultNodeStatus';
import { IoArgoprojWorkflowV1alpha1ArtifactoryArtifact } from '../models/IoArgoprojWorkflowV1alpha1ArtifactoryArtifact';
import { IoArgoprojWorkflowV1alpha1ArtifactoryArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1ArtifactoryArtifactRepository';
import { IoArgoprojWorkflowV1alpha1AzureArtifact } from '../models/IoArgoprojWorkflowV1alpha1AzureArtifact';
import { IoArgoprojWorkflowV1alpha1AzureArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1AzureArtifactRepository';
import { IoArgoprojWorkflowV1alpha1Backoff } from '../models/IoArgoprojWorkflowV1alpha1Backoff';
import { IoArgoprojWorkflowV1alpha1BasicAuth } from '../models/IoArgoprojWorkflowV1alpha1BasicAuth';
import { IoArgoprojWorkflowV1alpha1Cache } from '../models/IoArgoprojWorkflowV1alpha1Cache';
import { IoArgoprojWorkflowV1alpha1ClientCertAuth } from '../models/IoArgoprojWorkflowV1alpha1ClientCertAuth';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate } from '../models/IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest } from '../models/IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest } from '../models/IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList } from '../models/IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest } from '../models/IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest';
import { IoArgoprojWorkflowV1alpha1CollectEventRequest } from '../models/IoArgoprojWorkflowV1alpha1CollectEventRequest';
import { IoArgoprojWorkflowV1alpha1Column } from '../models/IoArgoprojWorkflowV1alpha1Column';
import { IoArgoprojWorkflowV1alpha1Condition } from '../models/IoArgoprojWorkflowV1alpha1Condition';
import { IoArgoprojWorkflowV1alpha1ContainerNode } from '../models/IoArgoprojWorkflowV1alpha1ContainerNode';
import { IoArgoprojWorkflowV1alpha1ContainerSetRetryStrategy } from '../models/IoArgoprojWorkflowV1alpha1ContainerSetRetryStrategy';
import { IoArgoprojWorkflowV1alpha1ContainerSetTemplate } from '../models/IoArgoprojWorkflowV1alpha1ContainerSetTemplate';
import { IoArgoprojWorkflowV1alpha1ContinueOn } from '../models/IoArgoprojWorkflowV1alpha1ContinueOn';
import { IoArgoprojWorkflowV1alpha1Counter } from '../models/IoArgoprojWorkflowV1alpha1Counter';
import { IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest } from '../models/IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1CreateS3BucketOptions } from '../models/IoArgoprojWorkflowV1alpha1CreateS3BucketOptions';
import { IoArgoprojWorkflowV1alpha1CronWorkflow } from '../models/IoArgoprojWorkflowV1alpha1CronWorkflow';
import { IoArgoprojWorkflowV1alpha1CronWorkflowList } from '../models/IoArgoprojWorkflowV1alpha1CronWorkflowList';
import { IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest } from '../models/IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest';
import { IoArgoprojWorkflowV1alpha1CronWorkflowSpec } from '../models/IoArgoprojWorkflowV1alpha1CronWorkflowSpec';
import { IoArgoprojWorkflowV1alpha1CronWorkflowStatus } from '../models/IoArgoprojWorkflowV1alpha1CronWorkflowStatus';
import { IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest } from '../models/IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest';
import { IoArgoprojWorkflowV1alpha1DAGTask } from '../models/IoArgoprojWorkflowV1alpha1DAGTask';
import { IoArgoprojWorkflowV1alpha1DAGTemplate } from '../models/IoArgoprojWorkflowV1alpha1DAGTemplate';
import { IoArgoprojWorkflowV1alpha1Data } from '../models/IoArgoprojWorkflowV1alpha1Data';
import { IoArgoprojWorkflowV1alpha1DataSource } from '../models/IoArgoprojWorkflowV1alpha1DataSource';
import { IoArgoprojWorkflowV1alpha1Event } from '../models/IoArgoprojWorkflowV1alpha1Event';
import { IoArgoprojWorkflowV1alpha1ExecutorConfig } from '../models/IoArgoprojWorkflowV1alpha1ExecutorConfig';
import { IoArgoprojWorkflowV1alpha1GCSArtifact } from '../models/IoArgoprojWorkflowV1alpha1GCSArtifact';
import { IoArgoprojWorkflowV1alpha1GCSArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1GCSArtifactRepository';
import { IoArgoprojWorkflowV1alpha1Gauge } from '../models/IoArgoprojWorkflowV1alpha1Gauge';
import { IoArgoprojWorkflowV1alpha1GetUserInfoResponse } from '../models/IoArgoprojWorkflowV1alpha1GetUserInfoResponse';
import { IoArgoprojWorkflowV1alpha1GitArtifact } from '../models/IoArgoprojWorkflowV1alpha1GitArtifact';
import { IoArgoprojWorkflowV1alpha1HDFSArtifact } from '../models/IoArgoprojWorkflowV1alpha1HDFSArtifact';
import { IoArgoprojWorkflowV1alpha1HDFSArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1HDFSArtifactRepository';
import { IoArgoprojWorkflowV1alpha1HTTP } from '../models/IoArgoprojWorkflowV1alpha1HTTP';
import { IoArgoprojWorkflowV1alpha1HTTPArtifact } from '../models/IoArgoprojWorkflowV1alpha1HTTPArtifact';
import { IoArgoprojWorkflowV1alpha1HTTPAuth } from '../models/IoArgoprojWorkflowV1alpha1HTTPAuth';
import { IoArgoprojWorkflowV1alpha1HTTPBodySource } from '../models/IoArgoprojWorkflowV1alpha1HTTPBodySource';
import { IoArgoprojWorkflowV1alpha1HTTPHeader } from '../models/IoArgoprojWorkflowV1alpha1HTTPHeader';
import { IoArgoprojWorkflowV1alpha1HTTPHeaderSource } from '../models/IoArgoprojWorkflowV1alpha1HTTPHeaderSource';
import { IoArgoprojWorkflowV1alpha1Header } from '../models/IoArgoprojWorkflowV1alpha1Header';
import { IoArgoprojWorkflowV1alpha1Histogram } from '../models/IoArgoprojWorkflowV1alpha1Histogram';
import { IoArgoprojWorkflowV1alpha1InfoResponse } from '../models/IoArgoprojWorkflowV1alpha1InfoResponse';
import { IoArgoprojWorkflowV1alpha1Inputs } from '../models/IoArgoprojWorkflowV1alpha1Inputs';
import { IoArgoprojWorkflowV1alpha1LabelKeys } from '../models/IoArgoprojWorkflowV1alpha1LabelKeys';
import { IoArgoprojWorkflowV1alpha1LabelValueFrom } from '../models/IoArgoprojWorkflowV1alpha1LabelValueFrom';
import { IoArgoprojWorkflowV1alpha1LabelValues } from '../models/IoArgoprojWorkflowV1alpha1LabelValues';
import { IoArgoprojWorkflowV1alpha1LifecycleHook } from '../models/IoArgoprojWorkflowV1alpha1LifecycleHook';
import { IoArgoprojWorkflowV1alpha1Link } from '../models/IoArgoprojWorkflowV1alpha1Link';
import { IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest } from '../models/IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1LogEntry } from '../models/IoArgoprojWorkflowV1alpha1LogEntry';
import { IoArgoprojWorkflowV1alpha1ManifestFrom } from '../models/IoArgoprojWorkflowV1alpha1ManifestFrom';
import { IoArgoprojWorkflowV1alpha1MemoizationStatus } from '../models/IoArgoprojWorkflowV1alpha1MemoizationStatus';
import { IoArgoprojWorkflowV1alpha1Memoize } from '../models/IoArgoprojWorkflowV1alpha1Memoize';
import { IoArgoprojWorkflowV1alpha1Metadata } from '../models/IoArgoprojWorkflowV1alpha1Metadata';
import { IoArgoprojWorkflowV1alpha1MetricLabel } from '../models/IoArgoprojWorkflowV1alpha1MetricLabel';
import { IoArgoprojWorkflowV1alpha1Metrics } from '../models/IoArgoprojWorkflowV1alpha1Metrics';
import { IoArgoprojWorkflowV1alpha1Mutex } from '../models/IoArgoprojWorkflowV1alpha1Mutex';
import { IoArgoprojWorkflowV1alpha1MutexHolding } from '../models/IoArgoprojWorkflowV1alpha1MutexHolding';
import { IoArgoprojWorkflowV1alpha1MutexStatus } from '../models/IoArgoprojWorkflowV1alpha1MutexStatus';
import { IoArgoprojWorkflowV1alpha1NodeResult } from '../models/IoArgoprojWorkflowV1alpha1NodeResult';
import { IoArgoprojWorkflowV1alpha1NodeStatus } from '../models/IoArgoprojWorkflowV1alpha1NodeStatus';
import { IoArgoprojWorkflowV1alpha1NodeSynchronizationStatus } from '../models/IoArgoprojWorkflowV1alpha1NodeSynchronizationStatus';
import { IoArgoprojWorkflowV1alpha1OAuth2Auth } from '../models/IoArgoprojWorkflowV1alpha1OAuth2Auth';
import { IoArgoprojWorkflowV1alpha1OAuth2EndpointParam } from '../models/IoArgoprojWorkflowV1alpha1OAuth2EndpointParam';
import { IoArgoprojWorkflowV1alpha1OSSArtifact } from '../models/IoArgoprojWorkflowV1alpha1OSSArtifact';
import { IoArgoprojWorkflowV1alpha1OSSArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1OSSArtifactRepository';
import { IoArgoprojWorkflowV1alpha1OSSLifecycleRule } from '../models/IoArgoprojWorkflowV1alpha1OSSLifecycleRule';
import { IoArgoprojWorkflowV1alpha1Outputs } from '../models/IoArgoprojWorkflowV1alpha1Outputs';
import { IoArgoprojWorkflowV1alpha1Parameter } from '../models/IoArgoprojWorkflowV1alpha1Parameter';
import { IoArgoprojWorkflowV1alpha1PodGC } from '../models/IoArgoprojWorkflowV1alpha1PodGC';
import { IoArgoprojWorkflowV1alpha1Prometheus } from '../models/IoArgoprojWorkflowV1alpha1Prometheus';
import { IoArgoprojWorkflowV1alpha1RawArtifact } from '../models/IoArgoprojWorkflowV1alpha1RawArtifact';
import { IoArgoprojWorkflowV1alpha1ResourceTemplate } from '../models/IoArgoprojWorkflowV1alpha1ResourceTemplate';
import { IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest } from '../models/IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1RetryAffinity } from '../models/IoArgoprojWorkflowV1alpha1RetryAffinity';
import { IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest } from '../models/IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1RetryStrategy } from '../models/IoArgoprojWorkflowV1alpha1RetryStrategy';
import { IoArgoprojWorkflowV1alpha1S3Artifact } from '../models/IoArgoprojWorkflowV1alpha1S3Artifact';
import { IoArgoprojWorkflowV1alpha1S3ArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1S3ArtifactRepository';
import { IoArgoprojWorkflowV1alpha1S3EncryptionOptions } from '../models/IoArgoprojWorkflowV1alpha1S3EncryptionOptions';
import { IoArgoprojWorkflowV1alpha1ScriptTemplate } from '../models/IoArgoprojWorkflowV1alpha1ScriptTemplate';
import { IoArgoprojWorkflowV1alpha1SemaphoreHolding } from '../models/IoArgoprojWorkflowV1alpha1SemaphoreHolding';
import { IoArgoprojWorkflowV1alpha1SemaphoreRef } from '../models/IoArgoprojWorkflowV1alpha1SemaphoreRef';
import { IoArgoprojWorkflowV1alpha1SemaphoreStatus } from '../models/IoArgoprojWorkflowV1alpha1SemaphoreStatus';
import { IoArgoprojWorkflowV1alpha1Sequence } from '../models/IoArgoprojWorkflowV1alpha1Sequence';
import { IoArgoprojWorkflowV1alpha1Submit } from '../models/IoArgoprojWorkflowV1alpha1Submit';
import { IoArgoprojWorkflowV1alpha1SubmitOpts } from '../models/IoArgoprojWorkflowV1alpha1SubmitOpts';
import { IoArgoprojWorkflowV1alpha1SuspendTemplate } from '../models/IoArgoprojWorkflowV1alpha1SuspendTemplate';
import { IoArgoprojWorkflowV1alpha1Synchronization } from '../models/IoArgoprojWorkflowV1alpha1Synchronization';
import { IoArgoprojWorkflowV1alpha1SynchronizationStatus } from '../models/IoArgoprojWorkflowV1alpha1SynchronizationStatus';
import { IoArgoprojWorkflowV1alpha1TTLStrategy } from '../models/IoArgoprojWorkflowV1alpha1TTLStrategy';
import { IoArgoprojWorkflowV1alpha1TarStrategy } from '../models/IoArgoprojWorkflowV1alpha1TarStrategy';
import { IoArgoprojWorkflowV1alpha1Template } from '../models/IoArgoprojWorkflowV1alpha1Template';
import { IoArgoprojWorkflowV1alpha1TemplateRef } from '../models/IoArgoprojWorkflowV1alpha1TemplateRef';
import { IoArgoprojWorkflowV1alpha1TransformationStep } from '../models/IoArgoprojWorkflowV1alpha1TransformationStep';
import { IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest } from '../models/IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1UserContainer } from '../models/IoArgoprojWorkflowV1alpha1UserContainer';
import { IoArgoprojWorkflowV1alpha1ValueFrom } from '../models/IoArgoprojWorkflowV1alpha1ValueFrom';
import { IoArgoprojWorkflowV1alpha1Version } from '../models/IoArgoprojWorkflowV1alpha1Version';
import { IoArgoprojWorkflowV1alpha1VolumeClaimGC } from '../models/IoArgoprojWorkflowV1alpha1VolumeClaimGC';
import { IoArgoprojWorkflowV1alpha1Workflow } from '../models/IoArgoprojWorkflowV1alpha1Workflow';
import { IoArgoprojWorkflowV1alpha1WorkflowCreateRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowCreateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowEventBinding } from '../models/IoArgoprojWorkflowV1alpha1WorkflowEventBinding';
import { IoArgoprojWorkflowV1alpha1WorkflowEventBindingList } from '../models/IoArgoprojWorkflowV1alpha1WorkflowEventBindingList';
import { IoArgoprojWorkflowV1alpha1WorkflowEventBindingSpec } from '../models/IoArgoprojWorkflowV1alpha1WorkflowEventBindingSpec';
import { IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC } from '../models/IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC';
import { IoArgoprojWorkflowV1alpha1WorkflowLintRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowLintRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowList } from '../models/IoArgoprojWorkflowV1alpha1WorkflowList';
import { IoArgoprojWorkflowV1alpha1WorkflowMetadata } from '../models/IoArgoprojWorkflowV1alpha1WorkflowMetadata';
import { IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowResumeRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowResumeRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowRetryRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowRetryRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSetRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSetRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSpec } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSpec';
import { IoArgoprojWorkflowV1alpha1WorkflowStatus } from '../models/IoArgoprojWorkflowV1alpha1WorkflowStatus';
import { IoArgoprojWorkflowV1alpha1WorkflowStep } from '../models/IoArgoprojWorkflowV1alpha1WorkflowStep';
import { IoArgoprojWorkflowV1alpha1WorkflowStopRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowStopRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTaskSetSpec } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTaskSetSpec';
import { IoArgoprojWorkflowV1alpha1WorkflowTaskSetStatus } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTaskSetStatus';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplate } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTemplate';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateList } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTemplateList';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateRef } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTemplateRef';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowWatchEvent } from '../models/IoArgoprojWorkflowV1alpha1WorkflowWatchEvent';
import { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from '../models/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import { IoK8sApiCoreV1Affinity } from '../models/IoK8sApiCoreV1Affinity';
import { IoK8sApiCoreV1AzureDiskVolumeSource } from '../models/IoK8sApiCoreV1AzureDiskVolumeSource';
import { IoK8sApiCoreV1AzureFileVolumeSource } from '../models/IoK8sApiCoreV1AzureFileVolumeSource';
import { IoK8sApiCoreV1CSIVolumeSource } from '../models/IoK8sApiCoreV1CSIVolumeSource';
import { IoK8sApiCoreV1Capabilities } from '../models/IoK8sApiCoreV1Capabilities';
import { IoK8sApiCoreV1CephFSVolumeSource } from '../models/IoK8sApiCoreV1CephFSVolumeSource';
import { IoK8sApiCoreV1CinderVolumeSource } from '../models/IoK8sApiCoreV1CinderVolumeSource';
import { IoK8sApiCoreV1ConfigMapEnvSource } from '../models/IoK8sApiCoreV1ConfigMapEnvSource';
import { IoK8sApiCoreV1ConfigMapKeySelector } from '../models/IoK8sApiCoreV1ConfigMapKeySelector';
import { IoK8sApiCoreV1ConfigMapProjection } from '../models/IoK8sApiCoreV1ConfigMapProjection';
import { IoK8sApiCoreV1ConfigMapVolumeSource } from '../models/IoK8sApiCoreV1ConfigMapVolumeSource';
import { IoK8sApiCoreV1Container } from '../models/IoK8sApiCoreV1Container';
import { IoK8sApiCoreV1ContainerPort } from '../models/IoK8sApiCoreV1ContainerPort';
import { IoK8sApiCoreV1DownwardAPIProjection } from '../models/IoK8sApiCoreV1DownwardAPIProjection';
import { IoK8sApiCoreV1DownwardAPIVolumeFile } from '../models/IoK8sApiCoreV1DownwardAPIVolumeFile';
import { IoK8sApiCoreV1DownwardAPIVolumeSource } from '../models/IoK8sApiCoreV1DownwardAPIVolumeSource';
import { IoK8sApiCoreV1EmptyDirVolumeSource } from '../models/IoK8sApiCoreV1EmptyDirVolumeSource';
import { IoK8sApiCoreV1EnvFromSource } from '../models/IoK8sApiCoreV1EnvFromSource';
import { IoK8sApiCoreV1EnvVar } from '../models/IoK8sApiCoreV1EnvVar';
import { IoK8sApiCoreV1EnvVarSource } from '../models/IoK8sApiCoreV1EnvVarSource';
import { IoK8sApiCoreV1EphemeralVolumeSource } from '../models/IoK8sApiCoreV1EphemeralVolumeSource';
import { IoK8sApiCoreV1Event } from '../models/IoK8sApiCoreV1Event';
import { IoK8sApiCoreV1EventSeries } from '../models/IoK8sApiCoreV1EventSeries';
import { IoK8sApiCoreV1EventSource } from '../models/IoK8sApiCoreV1EventSource';
import { IoK8sApiCoreV1ExecAction } from '../models/IoK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1FCVolumeSource } from '../models/IoK8sApiCoreV1FCVolumeSource';
import { IoK8sApiCoreV1FlexVolumeSource } from '../models/IoK8sApiCoreV1FlexVolumeSource';
import { IoK8sApiCoreV1FlockerVolumeSource } from '../models/IoK8sApiCoreV1FlockerVolumeSource';
import { IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from '../models/IoK8sApiCoreV1GCEPersistentDiskVolumeSource';
import { IoK8sApiCoreV1GRPCAction } from '../models/IoK8sApiCoreV1GRPCAction';
import { IoK8sApiCoreV1GitRepoVolumeSource } from '../models/IoK8sApiCoreV1GitRepoVolumeSource';
import { IoK8sApiCoreV1GlusterfsVolumeSource } from '../models/IoK8sApiCoreV1GlusterfsVolumeSource';
import { IoK8sApiCoreV1HTTPGetAction } from '../models/IoK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1HTTPHeader } from '../models/IoK8sApiCoreV1HTTPHeader';
import { IoK8sApiCoreV1HostAlias } from '../models/IoK8sApiCoreV1HostAlias';
import { IoK8sApiCoreV1HostPathVolumeSource } from '../models/IoK8sApiCoreV1HostPathVolumeSource';
import { IoK8sApiCoreV1ISCSIVolumeSource } from '../models/IoK8sApiCoreV1ISCSIVolumeSource';
import { IoK8sApiCoreV1KeyToPath } from '../models/IoK8sApiCoreV1KeyToPath';
import { IoK8sApiCoreV1Lifecycle } from '../models/IoK8sApiCoreV1Lifecycle';
import { IoK8sApiCoreV1LifecycleHandler } from '../models/IoK8sApiCoreV1LifecycleHandler';
import { IoK8sApiCoreV1LocalObjectReference } from '../models/IoK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1NFSVolumeSource } from '../models/IoK8sApiCoreV1NFSVolumeSource';
import { IoK8sApiCoreV1NodeAffinity } from '../models/IoK8sApiCoreV1NodeAffinity';
import { IoK8sApiCoreV1NodeSelector } from '../models/IoK8sApiCoreV1NodeSelector';
import { IoK8sApiCoreV1NodeSelectorRequirement } from '../models/IoK8sApiCoreV1NodeSelectorRequirement';
import { IoK8sApiCoreV1NodeSelectorTerm } from '../models/IoK8sApiCoreV1NodeSelectorTerm';
import { IoK8sApiCoreV1ObjectFieldSelector } from '../models/IoK8sApiCoreV1ObjectFieldSelector';
import { IoK8sApiCoreV1ObjectReference } from '../models/IoK8sApiCoreV1ObjectReference';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '../models/IoK8sApiCoreV1PersistentVolumeClaim';
import { IoK8sApiCoreV1PersistentVolumeClaimCondition } from '../models/IoK8sApiCoreV1PersistentVolumeClaimCondition';
import { IoK8sApiCoreV1PersistentVolumeClaimSpec } from '../models/IoK8sApiCoreV1PersistentVolumeClaimSpec';
import { IoK8sApiCoreV1PersistentVolumeClaimStatus } from '../models/IoK8sApiCoreV1PersistentVolumeClaimStatus';
import { IoK8sApiCoreV1PersistentVolumeClaimTemplate } from '../models/IoK8sApiCoreV1PersistentVolumeClaimTemplate';
import { IoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from '../models/IoK8sApiCoreV1PersistentVolumeClaimVolumeSource';
import { IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from '../models/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import { IoK8sApiCoreV1PodAffinity } from '../models/IoK8sApiCoreV1PodAffinity';
import { IoK8sApiCoreV1PodAffinityTerm } from '../models/IoK8sApiCoreV1PodAffinityTerm';
import { IoK8sApiCoreV1PodAntiAffinity } from '../models/IoK8sApiCoreV1PodAntiAffinity';
import { IoK8sApiCoreV1PodDNSConfig } from '../models/IoK8sApiCoreV1PodDNSConfig';
import { IoK8sApiCoreV1PodDNSConfigOption } from '../models/IoK8sApiCoreV1PodDNSConfigOption';
import { IoK8sApiCoreV1PodSecurityContext } from '../models/IoK8sApiCoreV1PodSecurityContext';
import { IoK8sApiCoreV1PortworxVolumeSource } from '../models/IoK8sApiCoreV1PortworxVolumeSource';
import { IoK8sApiCoreV1PreferredSchedulingTerm } from '../models/IoK8sApiCoreV1PreferredSchedulingTerm';
import { IoK8sApiCoreV1Probe } from '../models/IoK8sApiCoreV1Probe';
import { IoK8sApiCoreV1ProjectedVolumeSource } from '../models/IoK8sApiCoreV1ProjectedVolumeSource';
import { IoK8sApiCoreV1QuobyteVolumeSource } from '../models/IoK8sApiCoreV1QuobyteVolumeSource';
import { IoK8sApiCoreV1RBDVolumeSource } from '../models/IoK8sApiCoreV1RBDVolumeSource';
import { IoK8sApiCoreV1ResourceFieldSelector } from '../models/IoK8sApiCoreV1ResourceFieldSelector';
import { IoK8sApiCoreV1ResourceRequirements } from '../models/IoK8sApiCoreV1ResourceRequirements';
import { IoK8sApiCoreV1SELinuxOptions } from '../models/IoK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1ScaleIOVolumeSource } from '../models/IoK8sApiCoreV1ScaleIOVolumeSource';
import { IoK8sApiCoreV1SeccompProfile } from '../models/IoK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1SecretEnvSource } from '../models/IoK8sApiCoreV1SecretEnvSource';
import { IoK8sApiCoreV1SecretKeySelector } from '../models/IoK8sApiCoreV1SecretKeySelector';
import { IoK8sApiCoreV1SecretProjection } from '../models/IoK8sApiCoreV1SecretProjection';
import { IoK8sApiCoreV1SecretVolumeSource } from '../models/IoK8sApiCoreV1SecretVolumeSource';
import { IoK8sApiCoreV1SecurityContext } from '../models/IoK8sApiCoreV1SecurityContext';
import { IoK8sApiCoreV1ServiceAccountTokenProjection } from '../models/IoK8sApiCoreV1ServiceAccountTokenProjection';
import { IoK8sApiCoreV1ServicePort } from '../models/IoK8sApiCoreV1ServicePort';
import { IoK8sApiCoreV1StorageOSVolumeSource } from '../models/IoK8sApiCoreV1StorageOSVolumeSource';
import { IoK8sApiCoreV1Sysctl } from '../models/IoK8sApiCoreV1Sysctl';
import { IoK8sApiCoreV1TCPSocketAction } from '../models/IoK8sApiCoreV1TCPSocketAction';
import { IoK8sApiCoreV1Toleration } from '../models/IoK8sApiCoreV1Toleration';
import { IoK8sApiCoreV1TypedLocalObjectReference } from '../models/IoK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiCoreV1Volume } from '../models/IoK8sApiCoreV1Volume';
import { IoK8sApiCoreV1VolumeDevice } from '../models/IoK8sApiCoreV1VolumeDevice';
import { IoK8sApiCoreV1VolumeMount } from '../models/IoK8sApiCoreV1VolumeMount';
import { IoK8sApiCoreV1VolumeProjection } from '../models/IoK8sApiCoreV1VolumeProjection';
import { IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from '../models/IoK8sApiCoreV1VsphereVirtualDiskVolumeSource';
import { IoK8sApiCoreV1WeightedPodAffinityTerm } from '../models/IoK8sApiCoreV1WeightedPodAffinityTerm';
import { IoK8sApiCoreV1WindowsSecurityContextOptions } from '../models/IoK8sApiCoreV1WindowsSecurityContextOptions';
import { IoK8sApiPolicyV1PodDisruptionBudgetSpec } from '../models/IoK8sApiPolicyV1PodDisruptionBudgetSpec';
import { IoK8sApimachineryPkgApisMetaV1CreateOptions } from '../models/IoK8sApimachineryPkgApisMetaV1CreateOptions';
import { IoK8sApimachineryPkgApisMetaV1GroupVersionResource } from '../models/IoK8sApimachineryPkgApisMetaV1GroupVersionResource';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../models/IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from '../models/IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement';
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from '../models/IoK8sApimachineryPkgApisMetaV1ListMeta';
import { IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from '../models/IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../models/IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { IoK8sApimachineryPkgApisMetaV1OwnerReference } from '../models/IoK8sApimachineryPkgApisMetaV1OwnerReference';
import { IoK8sApimachineryPkgApisMetaV1StatusCause } from '../models/IoK8sApimachineryPkgApisMetaV1StatusCause';
import { SensorCreateSensorRequest } from '../models/SensorCreateSensorRequest';
import { SensorLogEntry } from '../models/SensorLogEntry';
import { SensorSensorWatchEvent } from '../models/SensorSensorWatchEvent';
import { SensorUpdateSensorRequest } from '../models/SensorUpdateSensorRequest';
import { StreamResultOfEventsourceEventSourceWatchEvent } from '../models/StreamResultOfEventsourceEventSourceWatchEvent';
import { StreamResultOfEventsourceLogEntry } from '../models/StreamResultOfEventsourceLogEntry';
import { StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry } from '../models/StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry';
import { StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent } from '../models/StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent';
import { StreamResultOfIoK8sApiCoreV1Event } from '../models/StreamResultOfIoK8sApiCoreV1Event';
import { StreamResultOfSensorLogEntry } from '../models/StreamResultOfSensorLogEntry';
import { StreamResultOfSensorSensorWatchEvent } from '../models/StreamResultOfSensorSensorWatchEvent';

import { ArchivedWorkflowServiceApiRequestFactory, ArchivedWorkflowServiceApiResponseProcessor} from "../apis/ArchivedWorkflowServiceApi";
export class ObservableArchivedWorkflowServiceApi {
    private requestFactory: ArchivedWorkflowServiceApiRequestFactory;
    private responseProcessor: ArchivedWorkflowServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArchivedWorkflowServiceApiRequestFactory,
        responseProcessor?: ArchivedWorkflowServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArchivedWorkflowServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArchivedWorkflowServiceApiResponseProcessor();
    }

    /**
     * @param uid 
     * @param namespace 
     */
    public archivedWorkflowServiceDeleteArchivedWorkflow(uid: string, namespace?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.archivedWorkflowServiceDeleteArchivedWorkflow(uid, namespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archivedWorkflowServiceDeleteArchivedWorkflow(rsp)));
            }));
    }

    /**
     * @param uid 
     * @param namespace 
     * @param name 
     */
    public archivedWorkflowServiceGetArchivedWorkflow(uid: string, namespace?: string, name?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.archivedWorkflowServiceGetArchivedWorkflow(uid, namespace, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archivedWorkflowServiceGetArchivedWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     */
    public archivedWorkflowServiceListArchivedWorkflowLabelKeys(namespace?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1LabelKeys> {
        const requestContextPromise = this.requestFactory.archivedWorkflowServiceListArchivedWorkflowLabelKeys(namespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archivedWorkflowServiceListArchivedWorkflowLabelKeys(rsp)));
            }));
    }

    /**
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param namespace 
     */
    public archivedWorkflowServiceListArchivedWorkflowLabelValues(listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, namespace?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1LabelValues> {
        const requestContextPromise = this.requestFactory.archivedWorkflowServiceListArchivedWorkflowLabelValues(listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, namespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archivedWorkflowServiceListArchivedWorkflowLabelValues(rsp)));
            }));
    }

    /**
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param namePrefix 
     * @param namespace 
     */
    public archivedWorkflowServiceListArchivedWorkflows(listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, namePrefix?: string, namespace?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowList> {
        const requestContextPromise = this.requestFactory.archivedWorkflowServiceListArchivedWorkflows(listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, namePrefix, namespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archivedWorkflowServiceListArchivedWorkflows(rsp)));
            }));
    }

    /**
     * @param uid 
     * @param body 
     */
    public archivedWorkflowServiceResubmitArchivedWorkflow(uid: string, body: IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.archivedWorkflowServiceResubmitArchivedWorkflow(uid, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archivedWorkflowServiceResubmitArchivedWorkflow(rsp)));
            }));
    }

    /**
     * @param uid 
     * @param body 
     */
    public archivedWorkflowServiceRetryArchivedWorkflow(uid: string, body: IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.archivedWorkflowServiceRetryArchivedWorkflow(uid, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archivedWorkflowServiceRetryArchivedWorkflow(rsp)));
            }));
    }

}

import { ArtifactServiceApiRequestFactory, ArtifactServiceApiResponseProcessor} from "../apis/ArtifactServiceApi";
export class ObservableArtifactServiceApi {
    private requestFactory: ArtifactServiceApiRequestFactory;
    private responseProcessor: ArtifactServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArtifactServiceApiRequestFactory,
        responseProcessor?: ArtifactServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArtifactServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArtifactServiceApiResponseProcessor();
    }

    /**
     * Get an artifact.
     * @param namespace 
     * @param idDiscriminator 
     * @param id 
     * @param nodeId 
     * @param artifactName 
     * @param artifactDiscriminator 
     */
    public artifactServiceGetArtifactFile(namespace: string, idDiscriminator: 'workflow' | 'archived-workflows ', id: string, nodeId: string, artifactName: string, artifactDiscriminator: 'outputs', _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.artifactServiceGetArtifactFile(namespace, idDiscriminator, id, nodeId, artifactName, artifactDiscriminator, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactServiceGetArtifactFile(rsp)));
            }));
    }

    /**
     * Get an input artifact.
     * @param namespace 
     * @param name 
     * @param nodeId 
     * @param artifactName 
     */
    public artifactServiceGetInputArtifact(namespace: string, name: string, nodeId: string, artifactName: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.artifactServiceGetInputArtifact(namespace, name, nodeId, artifactName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactServiceGetInputArtifact(rsp)));
            }));
    }

    /**
     * Get an input artifact by UID.
     * @param uid 
     * @param nodeId 
     * @param artifactName 
     */
    public artifactServiceGetInputArtifactByUID(uid: string, nodeId: string, artifactName: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.artifactServiceGetInputArtifactByUID(uid, nodeId, artifactName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactServiceGetInputArtifactByUID(rsp)));
            }));
    }

    /**
     * Get an output artifact.
     * @param namespace 
     * @param name 
     * @param nodeId 
     * @param artifactName 
     */
    public artifactServiceGetOutputArtifact(namespace: string, name: string, nodeId: string, artifactName: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.artifactServiceGetOutputArtifact(namespace, name, nodeId, artifactName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactServiceGetOutputArtifact(rsp)));
            }));
    }

    /**
     * Get an output artifact by UID.
     * @param uid 
     * @param nodeId 
     * @param artifactName 
     */
    public artifactServiceGetOutputArtifactByUID(uid: string, nodeId: string, artifactName: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.artifactServiceGetOutputArtifactByUID(uid, nodeId, artifactName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactServiceGetOutputArtifactByUID(rsp)));
            }));
    }

}

import { ClusterWorkflowTemplateServiceApiRequestFactory, ClusterWorkflowTemplateServiceApiResponseProcessor} from "../apis/ClusterWorkflowTemplateServiceApi";
export class ObservableClusterWorkflowTemplateServiceApi {
    private requestFactory: ClusterWorkflowTemplateServiceApiRequestFactory;
    private responseProcessor: ClusterWorkflowTemplateServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClusterWorkflowTemplateServiceApiRequestFactory,
        responseProcessor?: ClusterWorkflowTemplateServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClusterWorkflowTemplateServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClusterWorkflowTemplateServiceApiResponseProcessor();
    }

    /**
     * @param body 
     */
    public clusterWorkflowTemplateServiceCreateClusterWorkflowTemplate(body: IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        const requestContextPromise = this.requestFactory.clusterWorkflowTemplateServiceCreateClusterWorkflowTemplate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clusterWorkflowTemplateServiceCreateClusterWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param name 
     * @param deleteOptionsGracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @param deleteOptionsPreconditionsUid Specifies the target UID. +optional.
     * @param deleteOptionsPreconditionsResourceVersion Specifies the target ResourceVersion +optional.
     * @param deleteOptionsOrphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @param deleteOptionsPropagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @param deleteOptionsDryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     */
    public clusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate(name: string, deleteOptionsGracePeriodSeconds?: string, deleteOptionsPreconditionsUid?: string, deleteOptionsPreconditionsResourceVersion?: string, deleteOptionsOrphanDependents?: boolean, deleteOptionsPropagationPolicy?: string, deleteOptionsDryRun?: Array<string>, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.clusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate(name, deleteOptionsGracePeriodSeconds, deleteOptionsPreconditionsUid, deleteOptionsPreconditionsResourceVersion, deleteOptionsOrphanDependents, deleteOptionsPropagationPolicy, deleteOptionsDryRun, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param name 
     * @param getOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     */
    public clusterWorkflowTemplateServiceGetClusterWorkflowTemplate(name: string, getOptionsResourceVersion?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        const requestContextPromise = this.requestFactory.clusterWorkflowTemplateServiceGetClusterWorkflowTemplate(name, getOptionsResourceVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clusterWorkflowTemplateServiceGetClusterWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public clusterWorkflowTemplateServiceLintClusterWorkflowTemplate(body: IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        const requestContextPromise = this.requestFactory.clusterWorkflowTemplateServiceLintClusterWorkflowTemplate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clusterWorkflowTemplateServiceLintClusterWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public clusterWorkflowTemplateServiceListClusterWorkflowTemplates(listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList> {
        const requestContextPromise = this.requestFactory.clusterWorkflowTemplateServiceListClusterWorkflowTemplates(listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clusterWorkflowTemplateServiceListClusterWorkflowTemplates(rsp)));
            }));
    }

    /**
     * @param name DEPRECATED: This field is ignored.
     * @param body 
     */
    public clusterWorkflowTemplateServiceUpdateClusterWorkflowTemplate(name: string, body: IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        const requestContextPromise = this.requestFactory.clusterWorkflowTemplateServiceUpdateClusterWorkflowTemplate(name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clusterWorkflowTemplateServiceUpdateClusterWorkflowTemplate(rsp)));
            }));
    }

}

import { CronWorkflowServiceApiRequestFactory, CronWorkflowServiceApiResponseProcessor} from "../apis/CronWorkflowServiceApi";
export class ObservableCronWorkflowServiceApi {
    private requestFactory: CronWorkflowServiceApiRequestFactory;
    private responseProcessor: CronWorkflowServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CronWorkflowServiceApiRequestFactory,
        responseProcessor?: CronWorkflowServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CronWorkflowServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CronWorkflowServiceApiResponseProcessor();
    }

    /**
     * @param namespace 
     * @param body 
     */
    public cronWorkflowServiceCreateCronWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceCreateCronWorkflow(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceCreateCronWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param deleteOptionsGracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @param deleteOptionsPreconditionsUid Specifies the target UID. +optional.
     * @param deleteOptionsPreconditionsResourceVersion Specifies the target ResourceVersion +optional.
     * @param deleteOptionsOrphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @param deleteOptionsPropagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @param deleteOptionsDryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     */
    public cronWorkflowServiceDeleteCronWorkflow(namespace: string, name: string, deleteOptionsGracePeriodSeconds?: string, deleteOptionsPreconditionsUid?: string, deleteOptionsPreconditionsResourceVersion?: string, deleteOptionsOrphanDependents?: boolean, deleteOptionsPropagationPolicy?: string, deleteOptionsDryRun?: Array<string>, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceDeleteCronWorkflow(namespace, name, deleteOptionsGracePeriodSeconds, deleteOptionsPreconditionsUid, deleteOptionsPreconditionsResourceVersion, deleteOptionsOrphanDependents, deleteOptionsPropagationPolicy, deleteOptionsDryRun, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceDeleteCronWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param getOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     */
    public cronWorkflowServiceGetCronWorkflow(namespace: string, name: string, getOptionsResourceVersion?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceGetCronWorkflow(namespace, name, getOptionsResourceVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceGetCronWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param body 
     */
    public cronWorkflowServiceLintCronWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceLintCronWorkflow(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceLintCronWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public cronWorkflowServiceListCronWorkflows(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1CronWorkflowList> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceListCronWorkflows(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceListCronWorkflows(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public cronWorkflowServiceResumeCronWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceResumeCronWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceResumeCronWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public cronWorkflowServiceSuspendCronWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceSuspendCronWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceSuspendCronWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name DEPRECATED: This field is ignored.
     * @param body 
     */
    public cronWorkflowServiceUpdateCronWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        const requestContextPromise = this.requestFactory.cronWorkflowServiceUpdateCronWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cronWorkflowServiceUpdateCronWorkflow(rsp)));
            }));
    }

}

import { EventServiceApiRequestFactory, EventServiceApiResponseProcessor} from "../apis/EventServiceApi";
export class ObservableEventServiceApi {
    private requestFactory: EventServiceApiRequestFactory;
    private responseProcessor: EventServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventServiceApiRequestFactory,
        responseProcessor?: EventServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventServiceApiResponseProcessor();
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public eventServiceListWorkflowEventBindings(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowEventBindingList> {
        const requestContextPromise = this.requestFactory.eventServiceListWorkflowEventBindings(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventServiceListWorkflowEventBindings(rsp)));
            }));
    }

    /**
     * @param namespace The namespace for the io.argoproj.workflow.v1alpha1. This can be empty if the client has cluster scoped permissions. If empty, then the event is \&quot;broadcast\&quot; to workflow event binding in all namespaces.
     * @param discriminator Optional discriminator for the io.argoproj.workflow.v1alpha1. This should almost always be empty. Used for edge-cases where the event payload alone is not provide enough information to discriminate the event. This MUST NOT be used as security mechanism, e.g. to allow two clients to use the same access token, or to support webhooks on unsecured server. Instead, use access tokens. This is made available as &#x60;discriminator&#x60; in the event binding selector (&#x60;/spec/event/selector)&#x60;
     * @param body The event itself can be any data.
     */
    public eventServiceReceiveEvent(namespace: string, discriminator: string, body: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.eventServiceReceiveEvent(namespace, discriminator, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventServiceReceiveEvent(rsp)));
            }));
    }

}

import { EventSourceServiceApiRequestFactory, EventSourceServiceApiResponseProcessor} from "../apis/EventSourceServiceApi";
export class ObservableEventSourceServiceApi {
    private requestFactory: EventSourceServiceApiRequestFactory;
    private responseProcessor: EventSourceServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventSourceServiceApiRequestFactory,
        responseProcessor?: EventSourceServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventSourceServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventSourceServiceApiResponseProcessor();
    }

    /**
     * @param namespace 
     * @param body 
     */
    public eventSourceServiceCreateEventSource(namespace: string, body: EventsourceCreateEventSourceRequest, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1EventSource> {
        const requestContextPromise = this.requestFactory.eventSourceServiceCreateEventSource(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventSourceServiceCreateEventSource(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param deleteOptionsGracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @param deleteOptionsPreconditionsUid Specifies the target UID. +optional.
     * @param deleteOptionsPreconditionsResourceVersion Specifies the target ResourceVersion +optional.
     * @param deleteOptionsOrphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @param deleteOptionsPropagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @param deleteOptionsDryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     */
    public eventSourceServiceDeleteEventSource(namespace: string, name: string, deleteOptionsGracePeriodSeconds?: string, deleteOptionsPreconditionsUid?: string, deleteOptionsPreconditionsResourceVersion?: string, deleteOptionsOrphanDependents?: boolean, deleteOptionsPropagationPolicy?: string, deleteOptionsDryRun?: Array<string>, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.eventSourceServiceDeleteEventSource(namespace, name, deleteOptionsGracePeriodSeconds, deleteOptionsPreconditionsUid, deleteOptionsPreconditionsResourceVersion, deleteOptionsOrphanDependents, deleteOptionsPropagationPolicy, deleteOptionsDryRun, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventSourceServiceDeleteEventSource(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name optional - only return entries for this event source.
     * @param eventSourceType optional - only return entries for this event source type (e.g. &#x60;webhook&#x60;).
     * @param eventName optional - only return entries for this event name (e.g. &#x60;example&#x60;).
     * @param grep optional - only return entries where &#x60;msg&#x60; matches this regular expression.
     * @param podLogOptionsContainer The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @param podLogOptionsFollow Follow the log stream of the pod. Defaults to false. +optional.
     * @param podLogOptionsPrevious Return previous terminated container logs. Defaults to false. +optional.
     * @param podLogOptionsSinceSeconds A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @param podLogOptionsSinceTimeSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param podLogOptionsSinceTimeNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @param podLogOptionsTimestamps If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @param podLogOptionsTailLines If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @param podLogOptionsLimitBytes If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @param podLogOptionsInsecureSkipTLSVerifyBackend insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     */
    public eventSourceServiceEventSourcesLogs(namespace: string, name?: string, eventSourceType?: string, eventName?: string, grep?: string, podLogOptionsContainer?: string, podLogOptionsFollow?: boolean, podLogOptionsPrevious?: boolean, podLogOptionsSinceSeconds?: string, podLogOptionsSinceTimeSeconds?: string, podLogOptionsSinceTimeNanos?: number, podLogOptionsTimestamps?: boolean, podLogOptionsTailLines?: string, podLogOptionsLimitBytes?: string, podLogOptionsInsecureSkipTLSVerifyBackend?: boolean, _options?: Configuration): Observable<StreamResultOfEventsourceLogEntry> {
        const requestContextPromise = this.requestFactory.eventSourceServiceEventSourcesLogs(namespace, name, eventSourceType, eventName, grep, podLogOptionsContainer, podLogOptionsFollow, podLogOptionsPrevious, podLogOptionsSinceSeconds, podLogOptionsSinceTimeSeconds, podLogOptionsSinceTimeNanos, podLogOptionsTimestamps, podLogOptionsTailLines, podLogOptionsLimitBytes, podLogOptionsInsecureSkipTLSVerifyBackend, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventSourceServiceEventSourcesLogs(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     */
    public eventSourceServiceGetEventSource(namespace: string, name: string, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1EventSource> {
        const requestContextPromise = this.requestFactory.eventSourceServiceGetEventSource(namespace, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventSourceServiceGetEventSource(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public eventSourceServiceListEventSources(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1EventSourceList> {
        const requestContextPromise = this.requestFactory.eventSourceServiceListEventSources(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventSourceServiceListEventSources(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public eventSourceServiceUpdateEventSource(namespace: string, name: string, body: EventsourceUpdateEventSourceRequest, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1EventSource> {
        const requestContextPromise = this.requestFactory.eventSourceServiceUpdateEventSource(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventSourceServiceUpdateEventSource(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public eventSourceServiceWatchEventSources(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<StreamResultOfEventsourceEventSourceWatchEvent> {
        const requestContextPromise = this.requestFactory.eventSourceServiceWatchEventSources(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventSourceServiceWatchEventSources(rsp)));
            }));
    }

}

import { InfoServiceApiRequestFactory, InfoServiceApiResponseProcessor} from "../apis/InfoServiceApi";
export class ObservableInfoServiceApi {
    private requestFactory: InfoServiceApiRequestFactory;
    private responseProcessor: InfoServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InfoServiceApiRequestFactory,
        responseProcessor?: InfoServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InfoServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InfoServiceApiResponseProcessor();
    }

    /**
     * @param body 
     */
    public infoServiceCollectEvent(body: IoArgoprojWorkflowV1alpha1CollectEventRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.infoServiceCollectEvent(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.infoServiceCollectEvent(rsp)));
            }));
    }

    /**
     */
    public infoServiceGetInfo(_options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1InfoResponse> {
        const requestContextPromise = this.requestFactory.infoServiceGetInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.infoServiceGetInfo(rsp)));
            }));
    }

    /**
     */
    public infoServiceGetUserInfo(_options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1GetUserInfoResponse> {
        const requestContextPromise = this.requestFactory.infoServiceGetUserInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.infoServiceGetUserInfo(rsp)));
            }));
    }

    /**
     */
    public infoServiceGetVersion(_options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Version> {
        const requestContextPromise = this.requestFactory.infoServiceGetVersion(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.infoServiceGetVersion(rsp)));
            }));
    }

}

import { SensorServiceApiRequestFactory, SensorServiceApiResponseProcessor} from "../apis/SensorServiceApi";
export class ObservableSensorServiceApi {
    private requestFactory: SensorServiceApiRequestFactory;
    private responseProcessor: SensorServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SensorServiceApiRequestFactory,
        responseProcessor?: SensorServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SensorServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SensorServiceApiResponseProcessor();
    }

    /**
     * @param namespace 
     * @param body 
     */
    public sensorServiceCreateSensor(namespace: string, body: SensorCreateSensorRequest, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1Sensor> {
        const requestContextPromise = this.requestFactory.sensorServiceCreateSensor(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sensorServiceCreateSensor(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param deleteOptionsGracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @param deleteOptionsPreconditionsUid Specifies the target UID. +optional.
     * @param deleteOptionsPreconditionsResourceVersion Specifies the target ResourceVersion +optional.
     * @param deleteOptionsOrphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @param deleteOptionsPropagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @param deleteOptionsDryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     */
    public sensorServiceDeleteSensor(namespace: string, name: string, deleteOptionsGracePeriodSeconds?: string, deleteOptionsPreconditionsUid?: string, deleteOptionsPreconditionsResourceVersion?: string, deleteOptionsOrphanDependents?: boolean, deleteOptionsPropagationPolicy?: string, deleteOptionsDryRun?: Array<string>, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.sensorServiceDeleteSensor(namespace, name, deleteOptionsGracePeriodSeconds, deleteOptionsPreconditionsUid, deleteOptionsPreconditionsResourceVersion, deleteOptionsOrphanDependents, deleteOptionsPropagationPolicy, deleteOptionsDryRun, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sensorServiceDeleteSensor(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param getOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     */
    public sensorServiceGetSensor(namespace: string, name: string, getOptionsResourceVersion?: string, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1Sensor> {
        const requestContextPromise = this.requestFactory.sensorServiceGetSensor(namespace, name, getOptionsResourceVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sensorServiceGetSensor(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public sensorServiceListSensors(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1SensorList> {
        const requestContextPromise = this.requestFactory.sensorServiceListSensors(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sensorServiceListSensors(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name optional - only return entries for this sensor name.
     * @param triggerName optional - only return entries for this trigger.
     * @param grep option - only return entries where &#x60;msg&#x60; contains this regular expressions.
     * @param podLogOptionsContainer The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @param podLogOptionsFollow Follow the log stream of the pod. Defaults to false. +optional.
     * @param podLogOptionsPrevious Return previous terminated container logs. Defaults to false. +optional.
     * @param podLogOptionsSinceSeconds A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @param podLogOptionsSinceTimeSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param podLogOptionsSinceTimeNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @param podLogOptionsTimestamps If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @param podLogOptionsTailLines If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @param podLogOptionsLimitBytes If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @param podLogOptionsInsecureSkipTLSVerifyBackend insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     */
    public sensorServiceSensorsLogs(namespace: string, name?: string, triggerName?: string, grep?: string, podLogOptionsContainer?: string, podLogOptionsFollow?: boolean, podLogOptionsPrevious?: boolean, podLogOptionsSinceSeconds?: string, podLogOptionsSinceTimeSeconds?: string, podLogOptionsSinceTimeNanos?: number, podLogOptionsTimestamps?: boolean, podLogOptionsTailLines?: string, podLogOptionsLimitBytes?: string, podLogOptionsInsecureSkipTLSVerifyBackend?: boolean, _options?: Configuration): Observable<StreamResultOfSensorLogEntry> {
        const requestContextPromise = this.requestFactory.sensorServiceSensorsLogs(namespace, name, triggerName, grep, podLogOptionsContainer, podLogOptionsFollow, podLogOptionsPrevious, podLogOptionsSinceSeconds, podLogOptionsSinceTimeSeconds, podLogOptionsSinceTimeNanos, podLogOptionsTimestamps, podLogOptionsTailLines, podLogOptionsLimitBytes, podLogOptionsInsecureSkipTLSVerifyBackend, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sensorServiceSensorsLogs(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public sensorServiceUpdateSensor(namespace: string, name: string, body: SensorUpdateSensorRequest, _options?: Configuration): Observable<IoArgoprojEventsV1alpha1Sensor> {
        const requestContextPromise = this.requestFactory.sensorServiceUpdateSensor(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sensorServiceUpdateSensor(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public sensorServiceWatchSensors(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<StreamResultOfSensorSensorWatchEvent> {
        const requestContextPromise = this.requestFactory.sensorServiceWatchSensors(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sensorServiceWatchSensors(rsp)));
            }));
    }

}

import { WorkflowServiceApiRequestFactory, WorkflowServiceApiResponseProcessor} from "../apis/WorkflowServiceApi";
export class ObservableWorkflowServiceApi {
    private requestFactory: WorkflowServiceApiRequestFactory;
    private responseProcessor: WorkflowServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkflowServiceApiRequestFactory,
        responseProcessor?: WorkflowServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkflowServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkflowServiceApiResponseProcessor();
    }

    /**
     * @param namespace 
     * @param body 
     */
    public workflowServiceCreateWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowCreateRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceCreateWorkflow(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceCreateWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param deleteOptionsGracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @param deleteOptionsPreconditionsUid Specifies the target UID. +optional.
     * @param deleteOptionsPreconditionsResourceVersion Specifies the target ResourceVersion +optional.
     * @param deleteOptionsOrphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @param deleteOptionsPropagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @param deleteOptionsDryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @param force 
     */
    public workflowServiceDeleteWorkflow(namespace: string, name: string, deleteOptionsGracePeriodSeconds?: string, deleteOptionsPreconditionsUid?: string, deleteOptionsPreconditionsResourceVersion?: string, deleteOptionsOrphanDependents?: boolean, deleteOptionsPropagationPolicy?: string, deleteOptionsDryRun?: Array<string>, force?: boolean, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.workflowServiceDeleteWorkflow(namespace, name, deleteOptionsGracePeriodSeconds, deleteOptionsPreconditionsUid, deleteOptionsPreconditionsResourceVersion, deleteOptionsOrphanDependents, deleteOptionsPropagationPolicy, deleteOptionsDryRun, force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceDeleteWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param getOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param fields Fields to be included or excluded in the response. e.g. \&quot;spec,status.phase\&quot;, \&quot;-status.nodes\&quot;.
     */
    public workflowServiceGetWorkflow(namespace: string, name: string, getOptionsResourceVersion?: string, fields?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceGetWorkflow(namespace, name, getOptionsResourceVersion, fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceGetWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param body 
     */
    public workflowServiceLintWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowLintRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceLintWorkflow(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceLintWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fields Fields to be included or excluded in the response. e.g. \&quot;items.spec,items.status.phase\&quot;, \&quot;-items.status.nodes\&quot;.
     */
    public workflowServiceListWorkflows(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, fields?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowList> {
        const requestContextPromise = this.requestFactory.workflowServiceListWorkflows(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceListWorkflows(rsp)));
            }));
    }

    /**
     * DEPRECATED: Cannot work via HTTP if podName is an empty string. Use WorkflowLogs.
     * @param namespace 
     * @param name 
     * @param podName 
     * @param logOptionsContainer The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @param logOptionsFollow Follow the log stream of the pod. Defaults to false. +optional.
     * @param logOptionsPrevious Return previous terminated container logs. Defaults to false. +optional.
     * @param logOptionsSinceSeconds A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @param logOptionsSinceTimeSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param logOptionsSinceTimeNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @param logOptionsTimestamps If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @param logOptionsTailLines If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @param logOptionsLimitBytes If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @param logOptionsInsecureSkipTLSVerifyBackend insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @param grep 
     * @param selector 
     */
    public workflowServicePodLogs(namespace: string, name: string, podName: string, logOptionsContainer?: string, logOptionsFollow?: boolean, logOptionsPrevious?: boolean, logOptionsSinceSeconds?: string, logOptionsSinceTimeSeconds?: string, logOptionsSinceTimeNanos?: number, logOptionsTimestamps?: boolean, logOptionsTailLines?: string, logOptionsLimitBytes?: string, logOptionsInsecureSkipTLSVerifyBackend?: boolean, grep?: string, selector?: string, _options?: Configuration): Observable<StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry> {
        const requestContextPromise = this.requestFactory.workflowServicePodLogs(namespace, name, podName, logOptionsContainer, logOptionsFollow, logOptionsPrevious, logOptionsSinceSeconds, logOptionsSinceTimeSeconds, logOptionsSinceTimeNanos, logOptionsTimestamps, logOptionsTailLines, logOptionsLimitBytes, logOptionsInsecureSkipTLSVerifyBackend, grep, selector, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServicePodLogs(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public workflowServiceResubmitWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceResubmitWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceResubmitWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public workflowServiceResumeWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowResumeRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceResumeWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceResumeWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public workflowServiceRetryWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowRetryRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceRetryWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceRetryWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public workflowServiceSetWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowSetRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceSetWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceSetWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public workflowServiceStopWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowStopRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceStopWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceStopWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param body 
     */
    public workflowServiceSubmitWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceSubmitWorkflow(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceSubmitWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public workflowServiceSuspendWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceSuspendWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceSuspendWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param body 
     */
    public workflowServiceTerminateWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1Workflow> {
        const requestContextPromise = this.requestFactory.workflowServiceTerminateWorkflow(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceTerminateWorkflow(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public workflowServiceWatchEvents(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<StreamResultOfIoK8sApiCoreV1Event> {
        const requestContextPromise = this.requestFactory.workflowServiceWatchEvents(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceWatchEvents(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fields 
     */
    public workflowServiceWatchWorkflows(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, fields?: string, _options?: Configuration): Observable<StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent> {
        const requestContextPromise = this.requestFactory.workflowServiceWatchWorkflows(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceWatchWorkflows(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param podName 
     * @param logOptionsContainer The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @param logOptionsFollow Follow the log stream of the pod. Defaults to false. +optional.
     * @param logOptionsPrevious Return previous terminated container logs. Defaults to false. +optional.
     * @param logOptionsSinceSeconds A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @param logOptionsSinceTimeSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param logOptionsSinceTimeNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @param logOptionsTimestamps If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @param logOptionsTailLines If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @param logOptionsLimitBytes If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @param logOptionsInsecureSkipTLSVerifyBackend insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @param grep 
     * @param selector 
     */
    public workflowServiceWorkflowLogs(namespace: string, name: string, podName?: string, logOptionsContainer?: string, logOptionsFollow?: boolean, logOptionsPrevious?: boolean, logOptionsSinceSeconds?: string, logOptionsSinceTimeSeconds?: string, logOptionsSinceTimeNanos?: number, logOptionsTimestamps?: boolean, logOptionsTailLines?: string, logOptionsLimitBytes?: string, logOptionsInsecureSkipTLSVerifyBackend?: boolean, grep?: string, selector?: string, _options?: Configuration): Observable<StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry> {
        const requestContextPromise = this.requestFactory.workflowServiceWorkflowLogs(namespace, name, podName, logOptionsContainer, logOptionsFollow, logOptionsPrevious, logOptionsSinceSeconds, logOptionsSinceTimeSeconds, logOptionsSinceTimeNanos, logOptionsTimestamps, logOptionsTailLines, logOptionsLimitBytes, logOptionsInsecureSkipTLSVerifyBackend, grep, selector, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowServiceWorkflowLogs(rsp)));
            }));
    }

}

import { WorkflowTemplateServiceApiRequestFactory, WorkflowTemplateServiceApiResponseProcessor} from "../apis/WorkflowTemplateServiceApi";
export class ObservableWorkflowTemplateServiceApi {
    private requestFactory: WorkflowTemplateServiceApiRequestFactory;
    private responseProcessor: WorkflowTemplateServiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkflowTemplateServiceApiRequestFactory,
        responseProcessor?: WorkflowTemplateServiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkflowTemplateServiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkflowTemplateServiceApiResponseProcessor();
    }

    /**
     * @param namespace 
     * @param body 
     */
    public workflowTemplateServiceCreateWorkflowTemplate(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        const requestContextPromise = this.requestFactory.workflowTemplateServiceCreateWorkflowTemplate(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowTemplateServiceCreateWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param deleteOptionsGracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @param deleteOptionsPreconditionsUid Specifies the target UID. +optional.
     * @param deleteOptionsPreconditionsResourceVersion Specifies the target ResourceVersion +optional.
     * @param deleteOptionsOrphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @param deleteOptionsPropagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @param deleteOptionsDryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     */
    public workflowTemplateServiceDeleteWorkflowTemplate(namespace: string, name: string, deleteOptionsGracePeriodSeconds?: string, deleteOptionsPreconditionsUid?: string, deleteOptionsPreconditionsResourceVersion?: string, deleteOptionsOrphanDependents?: boolean, deleteOptionsPropagationPolicy?: string, deleteOptionsDryRun?: Array<string>, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.workflowTemplateServiceDeleteWorkflowTemplate(namespace, name, deleteOptionsGracePeriodSeconds, deleteOptionsPreconditionsUid, deleteOptionsPreconditionsResourceVersion, deleteOptionsOrphanDependents, deleteOptionsPropagationPolicy, deleteOptionsDryRun, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowTemplateServiceDeleteWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name 
     * @param getOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     */
    public workflowTemplateServiceGetWorkflowTemplate(namespace: string, name: string, getOptionsResourceVersion?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        const requestContextPromise = this.requestFactory.workflowTemplateServiceGetWorkflowTemplate(namespace, name, getOptionsResourceVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowTemplateServiceGetWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param body 
     */
    public workflowTemplateServiceLintWorkflowTemplate(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        const requestContextPromise = this.requestFactory.workflowTemplateServiceLintWorkflowTemplate(namespace, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowTemplateServiceLintWorkflowTemplate(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public workflowTemplateServiceListWorkflowTemplates(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowTemplateList> {
        const requestContextPromise = this.requestFactory.workflowTemplateServiceListWorkflowTemplates(namespace, listOptionsLabelSelector, listOptionsFieldSelector, listOptionsWatch, listOptionsAllowWatchBookmarks, listOptionsResourceVersion, listOptionsResourceVersionMatch, listOptionsTimeoutSeconds, listOptionsLimit, listOptionsContinue, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowTemplateServiceListWorkflowTemplates(rsp)));
            }));
    }

    /**
     * @param namespace 
     * @param name DEPRECATED: This field is ignored.
     * @param body 
     */
    public workflowTemplateServiceUpdateWorkflowTemplate(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest, _options?: Configuration): Observable<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        const requestContextPromise = this.requestFactory.workflowTemplateServiceUpdateWorkflowTemplate(namespace, name, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workflowTemplateServiceUpdateWorkflowTemplate(rsp)));
            }));
    }

}
