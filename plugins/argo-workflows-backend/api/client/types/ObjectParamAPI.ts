import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableArchivedWorkflowServiceApi } from "./ObservableAPI";
import { ArchivedWorkflowServiceApiRequestFactory, ArchivedWorkflowServiceApiResponseProcessor} from "../apis/ArchivedWorkflowServiceApi";

export interface ArchivedWorkflowServiceApiArchivedWorkflowServiceDeleteArchivedWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceDeleteArchivedWorkflow
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceDeleteArchivedWorkflow
     */
    namespace?: string
}

export interface ArchivedWorkflowServiceApiArchivedWorkflowServiceGetArchivedWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceGetArchivedWorkflow
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceGetArchivedWorkflow
     */
    namespace?: string
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceGetArchivedWorkflow
     */
    name?: string
}

export interface ArchivedWorkflowServiceApiArchivedWorkflowServiceListArchivedWorkflowLabelKeysRequest {
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelKeys
     */
    namespace?: string
}

export interface ArchivedWorkflowServiceApiArchivedWorkflowServiceListArchivedWorkflowLabelValuesRequest {
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    listOptionsContinue?: string
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflowLabelValues
     */
    namespace?: string
}

export interface ArchivedWorkflowServiceApiArchivedWorkflowServiceListArchivedWorkflowsRequest {
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    listOptionsContinue?: string
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    namePrefix?: string
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceListArchivedWorkflows
     */
    namespace?: string
}

export interface ArchivedWorkflowServiceApiArchivedWorkflowServiceResubmitArchivedWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceResubmitArchivedWorkflow
     */
    uid: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceResubmitArchivedWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest
}

export interface ArchivedWorkflowServiceApiArchivedWorkflowServiceRetryArchivedWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceRetryArchivedWorkflow
     */
    uid: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest
     * @memberof ArchivedWorkflowServiceApiarchivedWorkflowServiceRetryArchivedWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest
}

export class ObjectArchivedWorkflowServiceApi {
    private api: ObservableArchivedWorkflowServiceApi

    public constructor(configuration: Configuration, requestFactory?: ArchivedWorkflowServiceApiRequestFactory, responseProcessor?: ArchivedWorkflowServiceApiResponseProcessor) {
        this.api = new ObservableArchivedWorkflowServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public archivedWorkflowServiceDeleteArchivedWorkflow(param: ArchivedWorkflowServiceApiArchivedWorkflowServiceDeleteArchivedWorkflowRequest, options?: Configuration): Promise<any> {
        return this.api.archivedWorkflowServiceDeleteArchivedWorkflow(param.uid, param.namespace,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archivedWorkflowServiceGetArchivedWorkflow(param: ArchivedWorkflowServiceApiArchivedWorkflowServiceGetArchivedWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.archivedWorkflowServiceGetArchivedWorkflow(param.uid, param.namespace, param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archivedWorkflowServiceListArchivedWorkflowLabelKeys(param: ArchivedWorkflowServiceApiArchivedWorkflowServiceListArchivedWorkflowLabelKeysRequest = {}, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1LabelKeys> {
        return this.api.archivedWorkflowServiceListArchivedWorkflowLabelKeys(param.namespace,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archivedWorkflowServiceListArchivedWorkflowLabelValues(param: ArchivedWorkflowServiceApiArchivedWorkflowServiceListArchivedWorkflowLabelValuesRequest = {}, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1LabelValues> {
        return this.api.archivedWorkflowServiceListArchivedWorkflowLabelValues(param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue, param.namespace,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archivedWorkflowServiceListArchivedWorkflows(param: ArchivedWorkflowServiceApiArchivedWorkflowServiceListArchivedWorkflowsRequest = {}, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
        return this.api.archivedWorkflowServiceListArchivedWorkflows(param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue, param.namePrefix, param.namespace,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archivedWorkflowServiceResubmitArchivedWorkflow(param: ArchivedWorkflowServiceApiArchivedWorkflowServiceResubmitArchivedWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.archivedWorkflowServiceResubmitArchivedWorkflow(param.uid, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archivedWorkflowServiceRetryArchivedWorkflow(param: ArchivedWorkflowServiceApiArchivedWorkflowServiceRetryArchivedWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.archivedWorkflowServiceRetryArchivedWorkflow(param.uid, param.body,  options).toPromise();
    }

}

import { ObservableArtifactServiceApi } from "./ObservableAPI";
import { ArtifactServiceApiRequestFactory, ArtifactServiceApiResponseProcessor} from "../apis/ArtifactServiceApi";

export interface ArtifactServiceApiArtifactServiceGetArtifactFileRequest {
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetArtifactFile
     */
    namespace: string
    /**
     * 
     * @type &#39;workflow&#39; | &#39;archived-workflows &#39;
     * @memberof ArtifactServiceApiartifactServiceGetArtifactFile
     */
    idDiscriminator: 'workflow' | 'archived-workflows '
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetArtifactFile
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetArtifactFile
     */
    nodeId: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetArtifactFile
     */
    artifactName: string
    /**
     * 
     * @type &#39;outputs&#39;
     * @memberof ArtifactServiceApiartifactServiceGetArtifactFile
     */
    artifactDiscriminator: 'outputs'
}

export interface ArtifactServiceApiArtifactServiceGetInputArtifactRequest {
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetInputArtifact
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetInputArtifact
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetInputArtifact
     */
    nodeId: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetInputArtifact
     */
    artifactName: string
}

export interface ArtifactServiceApiArtifactServiceGetInputArtifactByUIDRequest {
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetInputArtifactByUID
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetInputArtifactByUID
     */
    nodeId: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetInputArtifactByUID
     */
    artifactName: string
}

export interface ArtifactServiceApiArtifactServiceGetOutputArtifactRequest {
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetOutputArtifact
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetOutputArtifact
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetOutputArtifact
     */
    nodeId: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetOutputArtifact
     */
    artifactName: string
}

export interface ArtifactServiceApiArtifactServiceGetOutputArtifactByUIDRequest {
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetOutputArtifactByUID
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetOutputArtifactByUID
     */
    nodeId: string
    /**
     * 
     * @type string
     * @memberof ArtifactServiceApiartifactServiceGetOutputArtifactByUID
     */
    artifactName: string
}

export class ObjectArtifactServiceApi {
    private api: ObservableArtifactServiceApi

    public constructor(configuration: Configuration, requestFactory?: ArtifactServiceApiRequestFactory, responseProcessor?: ArtifactServiceApiResponseProcessor) {
        this.api = new ObservableArtifactServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get an artifact.
     * @param param the request object
     */
    public artifactServiceGetArtifactFile(param: ArtifactServiceApiArtifactServiceGetArtifactFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.artifactServiceGetArtifactFile(param.namespace, param.idDiscriminator, param.id, param.nodeId, param.artifactName, param.artifactDiscriminator,  options).toPromise();
    }

    /**
     * Get an input artifact.
     * @param param the request object
     */
    public artifactServiceGetInputArtifact(param: ArtifactServiceApiArtifactServiceGetInputArtifactRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.artifactServiceGetInputArtifact(param.namespace, param.name, param.nodeId, param.artifactName,  options).toPromise();
    }

    /**
     * Get an input artifact by UID.
     * @param param the request object
     */
    public artifactServiceGetInputArtifactByUID(param: ArtifactServiceApiArtifactServiceGetInputArtifactByUIDRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.artifactServiceGetInputArtifactByUID(param.uid, param.nodeId, param.artifactName,  options).toPromise();
    }

    /**
     * Get an output artifact.
     * @param param the request object
     */
    public artifactServiceGetOutputArtifact(param: ArtifactServiceApiArtifactServiceGetOutputArtifactRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.artifactServiceGetOutputArtifact(param.namespace, param.name, param.nodeId, param.artifactName,  options).toPromise();
    }

    /**
     * Get an output artifact by UID.
     * @param param the request object
     */
    public artifactServiceGetOutputArtifactByUID(param: ArtifactServiceApiArtifactServiceGetOutputArtifactByUIDRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.artifactServiceGetOutputArtifactByUID(param.uid, param.nodeId, param.artifactName,  options).toPromise();
    }

}

import { ObservableClusterWorkflowTemplateServiceApi } from "./ObservableAPI";
import { ClusterWorkflowTemplateServiceApiRequestFactory, ClusterWorkflowTemplateServiceApiResponseProcessor} from "../apis/ClusterWorkflowTemplateServiceApi";

export interface ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceCreateClusterWorkflowTemplateRequest {
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceCreateClusterWorkflowTemplate
     */
    body: IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest
}

export interface ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceDeleteClusterWorkflowTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate
     */
    name: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate
     */
    deleteOptionsGracePeriodSeconds?: string
    /**
     * Specifies the target UID. +optional.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate
     */
    deleteOptionsPreconditionsUid?: string
    /**
     * Specifies the target ResourceVersion +optional.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate
     */
    deleteOptionsPreconditionsResourceVersion?: string
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @type boolean
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate
     */
    deleteOptionsOrphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate
     */
    deleteOptionsPropagationPolicy?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @type Array&lt;string&gt;
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate
     */
    deleteOptionsDryRun?: Array<string>
}

export interface ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceGetClusterWorkflowTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceGetClusterWorkflowTemplate
     */
    name: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceGetClusterWorkflowTemplate
     */
    getOptionsResourceVersion?: string
}

export interface ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceLintClusterWorkflowTemplateRequest {
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceLintClusterWorkflowTemplate
     */
    body: IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest
}

export interface ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceListClusterWorkflowTemplatesRequest {
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceListClusterWorkflowTemplates
     */
    listOptionsContinue?: string
}

export interface ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceUpdateClusterWorkflowTemplateRequest {
    /**
     * DEPRECATED: This field is ignored.
     * @type string
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceUpdateClusterWorkflowTemplate
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest
     * @memberof ClusterWorkflowTemplateServiceApiclusterWorkflowTemplateServiceUpdateClusterWorkflowTemplate
     */
    body: IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest
}

export class ObjectClusterWorkflowTemplateServiceApi {
    private api: ObservableClusterWorkflowTemplateServiceApi

    public constructor(configuration: Configuration, requestFactory?: ClusterWorkflowTemplateServiceApiRequestFactory, responseProcessor?: ClusterWorkflowTemplateServiceApiResponseProcessor) {
        this.api = new ObservableClusterWorkflowTemplateServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public clusterWorkflowTemplateServiceCreateClusterWorkflowTemplate(param: ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceCreateClusterWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        return this.api.clusterWorkflowTemplateServiceCreateClusterWorkflowTemplate(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public clusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate(param: ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceDeleteClusterWorkflowTemplateRequest, options?: Configuration): Promise<any> {
        return this.api.clusterWorkflowTemplateServiceDeleteClusterWorkflowTemplate(param.name, param.deleteOptionsGracePeriodSeconds, param.deleteOptionsPreconditionsUid, param.deleteOptionsPreconditionsResourceVersion, param.deleteOptionsOrphanDependents, param.deleteOptionsPropagationPolicy, param.deleteOptionsDryRun,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public clusterWorkflowTemplateServiceGetClusterWorkflowTemplate(param: ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceGetClusterWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        return this.api.clusterWorkflowTemplateServiceGetClusterWorkflowTemplate(param.name, param.getOptionsResourceVersion,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public clusterWorkflowTemplateServiceLintClusterWorkflowTemplate(param: ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceLintClusterWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        return this.api.clusterWorkflowTemplateServiceLintClusterWorkflowTemplate(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public clusterWorkflowTemplateServiceListClusterWorkflowTemplates(param: ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceListClusterWorkflowTemplatesRequest = {}, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList> {
        return this.api.clusterWorkflowTemplateServiceListClusterWorkflowTemplates(param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public clusterWorkflowTemplateServiceUpdateClusterWorkflowTemplate(param: ClusterWorkflowTemplateServiceApiClusterWorkflowTemplateServiceUpdateClusterWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate> {
        return this.api.clusterWorkflowTemplateServiceUpdateClusterWorkflowTemplate(param.name, param.body,  options).toPromise();
    }

}

import { ObservableCronWorkflowServiceApi } from "./ObservableAPI";
import { CronWorkflowServiceApiRequestFactory, CronWorkflowServiceApiResponseProcessor} from "../apis/CronWorkflowServiceApi";

export interface CronWorkflowServiceApiCronWorkflowServiceCreateCronWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceCreateCronWorkflow
     */
    namespace: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest
     * @memberof CronWorkflowServiceApicronWorkflowServiceCreateCronWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest
}

export interface CronWorkflowServiceApiCronWorkflowServiceDeleteCronWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    name: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    deleteOptionsGracePeriodSeconds?: string
    /**
     * Specifies the target UID. +optional.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    deleteOptionsPreconditionsUid?: string
    /**
     * Specifies the target ResourceVersion +optional.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    deleteOptionsPreconditionsResourceVersion?: string
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @type boolean
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    deleteOptionsOrphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    deleteOptionsPropagationPolicy?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @type Array&lt;string&gt;
     * @memberof CronWorkflowServiceApicronWorkflowServiceDeleteCronWorkflow
     */
    deleteOptionsDryRun?: Array<string>
}

export interface CronWorkflowServiceApiCronWorkflowServiceGetCronWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceGetCronWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceGetCronWorkflow
     */
    name: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceGetCronWorkflow
     */
    getOptionsResourceVersion?: string
}

export interface CronWorkflowServiceApiCronWorkflowServiceLintCronWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceLintCronWorkflow
     */
    namespace: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest
     * @memberof CronWorkflowServiceApicronWorkflowServiceLintCronWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest
}

export interface CronWorkflowServiceApiCronWorkflowServiceListCronWorkflowsRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceListCronWorkflows
     */
    listOptionsContinue?: string
}

export interface CronWorkflowServiceApiCronWorkflowServiceResumeCronWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceResumeCronWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceResumeCronWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest
     * @memberof CronWorkflowServiceApicronWorkflowServiceResumeCronWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest
}

export interface CronWorkflowServiceApiCronWorkflowServiceSuspendCronWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceSuspendCronWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceSuspendCronWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest
     * @memberof CronWorkflowServiceApicronWorkflowServiceSuspendCronWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest
}

export interface CronWorkflowServiceApiCronWorkflowServiceUpdateCronWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceUpdateCronWorkflow
     */
    namespace: string
    /**
     * DEPRECATED: This field is ignored.
     * @type string
     * @memberof CronWorkflowServiceApicronWorkflowServiceUpdateCronWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest
     * @memberof CronWorkflowServiceApicronWorkflowServiceUpdateCronWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest
}

export class ObjectCronWorkflowServiceApi {
    private api: ObservableCronWorkflowServiceApi

    public constructor(configuration: Configuration, requestFactory?: CronWorkflowServiceApiRequestFactory, responseProcessor?: CronWorkflowServiceApiResponseProcessor) {
        this.api = new ObservableCronWorkflowServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceCreateCronWorkflow(param: CronWorkflowServiceApiCronWorkflowServiceCreateCronWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        return this.api.cronWorkflowServiceCreateCronWorkflow(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceDeleteCronWorkflow(param: CronWorkflowServiceApiCronWorkflowServiceDeleteCronWorkflowRequest, options?: Configuration): Promise<any> {
        return this.api.cronWorkflowServiceDeleteCronWorkflow(param.namespace, param.name, param.deleteOptionsGracePeriodSeconds, param.deleteOptionsPreconditionsUid, param.deleteOptionsPreconditionsResourceVersion, param.deleteOptionsOrphanDependents, param.deleteOptionsPropagationPolicy, param.deleteOptionsDryRun,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceGetCronWorkflow(param: CronWorkflowServiceApiCronWorkflowServiceGetCronWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        return this.api.cronWorkflowServiceGetCronWorkflow(param.namespace, param.name, param.getOptionsResourceVersion,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceLintCronWorkflow(param: CronWorkflowServiceApiCronWorkflowServiceLintCronWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        return this.api.cronWorkflowServiceLintCronWorkflow(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceListCronWorkflows(param: CronWorkflowServiceApiCronWorkflowServiceListCronWorkflowsRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1CronWorkflowList> {
        return this.api.cronWorkflowServiceListCronWorkflows(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceResumeCronWorkflow(param: CronWorkflowServiceApiCronWorkflowServiceResumeCronWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        return this.api.cronWorkflowServiceResumeCronWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceSuspendCronWorkflow(param: CronWorkflowServiceApiCronWorkflowServiceSuspendCronWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        return this.api.cronWorkflowServiceSuspendCronWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronWorkflowServiceUpdateCronWorkflow(param: CronWorkflowServiceApiCronWorkflowServiceUpdateCronWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1CronWorkflow> {
        return this.api.cronWorkflowServiceUpdateCronWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

}

import { ObservableEventServiceApi } from "./ObservableAPI";
import { EventServiceApiRequestFactory, EventServiceApiResponseProcessor} from "../apis/EventServiceApi";

export interface EventServiceApiEventServiceListWorkflowEventBindingsRequest {
    /**
     * 
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof EventServiceApieventServiceListWorkflowEventBindings
     */
    listOptionsContinue?: string
}

export interface EventServiceApiEventServiceReceiveEventRequest {
    /**
     * The namespace for the io.argoproj.workflow.v1alpha1. This can be empty if the client has cluster scoped permissions. If empty, then the event is \&quot;broadcast\&quot; to workflow event binding in all namespaces.
     * @type string
     * @memberof EventServiceApieventServiceReceiveEvent
     */
    namespace: string
    /**
     * Optional discriminator for the io.argoproj.workflow.v1alpha1. This should almost always be empty. Used for edge-cases where the event payload alone is not provide enough information to discriminate the event. This MUST NOT be used as security mechanism, e.g. to allow two clients to use the same access token, or to support webhooks on unsecured server. Instead, use access tokens. This is made available as &#x60;discriminator&#x60; in the event binding selector (&#x60;/spec/event/selector)&#x60;
     * @type string
     * @memberof EventServiceApieventServiceReceiveEvent
     */
    discriminator: string
    /**
     * The event itself can be any data.
     * @type any
     * @memberof EventServiceApieventServiceReceiveEvent
     */
    body: any
}

export class ObjectEventServiceApi {
    private api: ObservableEventServiceApi

    public constructor(configuration: Configuration, requestFactory?: EventServiceApiRequestFactory, responseProcessor?: EventServiceApiResponseProcessor) {
        this.api = new ObservableEventServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public eventServiceListWorkflowEventBindings(param: EventServiceApiEventServiceListWorkflowEventBindingsRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowEventBindingList> {
        return this.api.eventServiceListWorkflowEventBindings(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventServiceReceiveEvent(param: EventServiceApiEventServiceReceiveEventRequest, options?: Configuration): Promise<any> {
        return this.api.eventServiceReceiveEvent(param.namespace, param.discriminator, param.body,  options).toPromise();
    }

}

import { ObservableEventSourceServiceApi } from "./ObservableAPI";
import { EventSourceServiceApiRequestFactory, EventSourceServiceApiResponseProcessor} from "../apis/EventSourceServiceApi";

export interface EventSourceServiceApiEventSourceServiceCreateEventSourceRequest {
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceCreateEventSource
     */
    namespace: string
    /**
     * 
     * @type EventsourceCreateEventSourceRequest
     * @memberof EventSourceServiceApieventSourceServiceCreateEventSource
     */
    body: EventsourceCreateEventSourceRequest
}

export interface EventSourceServiceApiEventSourceServiceDeleteEventSourceRequest {
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    name: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    deleteOptionsGracePeriodSeconds?: string
    /**
     * Specifies the target UID. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    deleteOptionsPreconditionsUid?: string
    /**
     * Specifies the target ResourceVersion +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    deleteOptionsPreconditionsResourceVersion?: string
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    deleteOptionsOrphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    deleteOptionsPropagationPolicy?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @type Array&lt;string&gt;
     * @memberof EventSourceServiceApieventSourceServiceDeleteEventSource
     */
    deleteOptionsDryRun?: Array<string>
}

export interface EventSourceServiceApiEventSourceServiceEventSourcesLogsRequest {
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    namespace: string
    /**
     * optional - only return entries for this event source.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    name?: string
    /**
     * optional - only return entries for this event source type (e.g. &#x60;webhook&#x60;).
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    eventSourceType?: string
    /**
     * optional - only return entries for this event name (e.g. &#x60;example&#x60;).
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    eventName?: string
    /**
     * optional - only return entries where &#x60;msg&#x60; matches this regular expression.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    grep?: string
    /**
     * The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsContainer?: string
    /**
     * Follow the log stream of the pod. Defaults to false. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsFollow?: boolean
    /**
     * Return previous terminated container logs. Defaults to false. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsPrevious?: boolean
    /**
     * A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsSinceSeconds?: string
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsSinceTimeSeconds?: string
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @type number
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsSinceTimeNanos?: number
    /**
     * If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsTimestamps?: boolean
    /**
     * If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsTailLines?: string
    /**
     * If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsLimitBytes?: string
    /**
     * insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceEventSourcesLogs
     */
    podLogOptionsInsecureSkipTLSVerifyBackend?: boolean
}

export interface EventSourceServiceApiEventSourceServiceGetEventSourceRequest {
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceGetEventSource
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceGetEventSource
     */
    name: string
}

export interface EventSourceServiceApiEventSourceServiceListEventSourcesRequest {
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceListEventSources
     */
    listOptionsContinue?: string
}

export interface EventSourceServiceApiEventSourceServiceUpdateEventSourceRequest {
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceUpdateEventSource
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceUpdateEventSource
     */
    name: string
    /**
     * 
     * @type EventsourceUpdateEventSourceRequest
     * @memberof EventSourceServiceApieventSourceServiceUpdateEventSource
     */
    body: EventsourceUpdateEventSourceRequest
}

export interface EventSourceServiceApiEventSourceServiceWatchEventSourcesRequest {
    /**
     * 
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof EventSourceServiceApieventSourceServiceWatchEventSources
     */
    listOptionsContinue?: string
}

export class ObjectEventSourceServiceApi {
    private api: ObservableEventSourceServiceApi

    public constructor(configuration: Configuration, requestFactory?: EventSourceServiceApiRequestFactory, responseProcessor?: EventSourceServiceApiResponseProcessor) {
        this.api = new ObservableEventSourceServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public eventSourceServiceCreateEventSource(param: EventSourceServiceApiEventSourceServiceCreateEventSourceRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1EventSource> {
        return this.api.eventSourceServiceCreateEventSource(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventSourceServiceDeleteEventSource(param: EventSourceServiceApiEventSourceServiceDeleteEventSourceRequest, options?: Configuration): Promise<any> {
        return this.api.eventSourceServiceDeleteEventSource(param.namespace, param.name, param.deleteOptionsGracePeriodSeconds, param.deleteOptionsPreconditionsUid, param.deleteOptionsPreconditionsResourceVersion, param.deleteOptionsOrphanDependents, param.deleteOptionsPropagationPolicy, param.deleteOptionsDryRun,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventSourceServiceEventSourcesLogs(param: EventSourceServiceApiEventSourceServiceEventSourcesLogsRequest, options?: Configuration): Promise<StreamResultOfEventsourceLogEntry> {
        return this.api.eventSourceServiceEventSourcesLogs(param.namespace, param.name, param.eventSourceType, param.eventName, param.grep, param.podLogOptionsContainer, param.podLogOptionsFollow, param.podLogOptionsPrevious, param.podLogOptionsSinceSeconds, param.podLogOptionsSinceTimeSeconds, param.podLogOptionsSinceTimeNanos, param.podLogOptionsTimestamps, param.podLogOptionsTailLines, param.podLogOptionsLimitBytes, param.podLogOptionsInsecureSkipTLSVerifyBackend,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventSourceServiceGetEventSource(param: EventSourceServiceApiEventSourceServiceGetEventSourceRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1EventSource> {
        return this.api.eventSourceServiceGetEventSource(param.namespace, param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventSourceServiceListEventSources(param: EventSourceServiceApiEventSourceServiceListEventSourcesRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1EventSourceList> {
        return this.api.eventSourceServiceListEventSources(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventSourceServiceUpdateEventSource(param: EventSourceServiceApiEventSourceServiceUpdateEventSourceRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1EventSource> {
        return this.api.eventSourceServiceUpdateEventSource(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventSourceServiceWatchEventSources(param: EventSourceServiceApiEventSourceServiceWatchEventSourcesRequest, options?: Configuration): Promise<StreamResultOfEventsourceEventSourceWatchEvent> {
        return this.api.eventSourceServiceWatchEventSources(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

}

import { ObservableInfoServiceApi } from "./ObservableAPI";
import { InfoServiceApiRequestFactory, InfoServiceApiResponseProcessor} from "../apis/InfoServiceApi";

export interface InfoServiceApiInfoServiceCollectEventRequest {
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1CollectEventRequest
     * @memberof InfoServiceApiinfoServiceCollectEvent
     */
    body: IoArgoprojWorkflowV1alpha1CollectEventRequest
}

export interface InfoServiceApiInfoServiceGetInfoRequest {
}

export interface InfoServiceApiInfoServiceGetUserInfoRequest {
}

export interface InfoServiceApiInfoServiceGetVersionRequest {
}

export class ObjectInfoServiceApi {
    private api: ObservableInfoServiceApi

    public constructor(configuration: Configuration, requestFactory?: InfoServiceApiRequestFactory, responseProcessor?: InfoServiceApiResponseProcessor) {
        this.api = new ObservableInfoServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public infoServiceCollectEvent(param: InfoServiceApiInfoServiceCollectEventRequest, options?: Configuration): Promise<any> {
        return this.api.infoServiceCollectEvent(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public infoServiceGetInfo(param: InfoServiceApiInfoServiceGetInfoRequest = {}, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1InfoResponse> {
        return this.api.infoServiceGetInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public infoServiceGetUserInfo(param: InfoServiceApiInfoServiceGetUserInfoRequest = {}, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1GetUserInfoResponse> {
        return this.api.infoServiceGetUserInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public infoServiceGetVersion(param: InfoServiceApiInfoServiceGetVersionRequest = {}, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Version> {
        return this.api.infoServiceGetVersion( options).toPromise();
    }

}

import { ObservableSensorServiceApi } from "./ObservableAPI";
import { SensorServiceApiRequestFactory, SensorServiceApiResponseProcessor} from "../apis/SensorServiceApi";

export interface SensorServiceApiSensorServiceCreateSensorRequest {
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceCreateSensor
     */
    namespace: string
    /**
     * 
     * @type SensorCreateSensorRequest
     * @memberof SensorServiceApisensorServiceCreateSensor
     */
    body: SensorCreateSensorRequest
}

export interface SensorServiceApiSensorServiceDeleteSensorRequest {
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    name: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    deleteOptionsGracePeriodSeconds?: string
    /**
     * Specifies the target UID. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    deleteOptionsPreconditionsUid?: string
    /**
     * Specifies the target ResourceVersion +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    deleteOptionsPreconditionsResourceVersion?: string
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    deleteOptionsOrphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    deleteOptionsPropagationPolicy?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @type Array&lt;string&gt;
     * @memberof SensorServiceApisensorServiceDeleteSensor
     */
    deleteOptionsDryRun?: Array<string>
}

export interface SensorServiceApiSensorServiceGetSensorRequest {
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceGetSensor
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceGetSensor
     */
    name: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof SensorServiceApisensorServiceGetSensor
     */
    getOptionsResourceVersion?: string
}

export interface SensorServiceApiSensorServiceListSensorsRequest {
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof SensorServiceApisensorServiceListSensors
     */
    listOptionsContinue?: string
}

export interface SensorServiceApiSensorServiceSensorsLogsRequest {
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    namespace: string
    /**
     * optional - only return entries for this sensor name.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    name?: string
    /**
     * optional - only return entries for this trigger.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    triggerName?: string
    /**
     * option - only return entries where &#x60;msg&#x60; contains this regular expressions.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    grep?: string
    /**
     * The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsContainer?: string
    /**
     * Follow the log stream of the pod. Defaults to false. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsFollow?: boolean
    /**
     * Return previous terminated container logs. Defaults to false. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsPrevious?: boolean
    /**
     * A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsSinceSeconds?: string
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsSinceTimeSeconds?: string
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @type number
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsSinceTimeNanos?: number
    /**
     * If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsTimestamps?: boolean
    /**
     * If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsTailLines?: string
    /**
     * If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsLimitBytes?: string
    /**
     * insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceSensorsLogs
     */
    podLogOptionsInsecureSkipTLSVerifyBackend?: boolean
}

export interface SensorServiceApiSensorServiceUpdateSensorRequest {
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceUpdateSensor
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceUpdateSensor
     */
    name: string
    /**
     * 
     * @type SensorUpdateSensorRequest
     * @memberof SensorServiceApisensorServiceUpdateSensor
     */
    body: SensorUpdateSensorRequest
}

export interface SensorServiceApiSensorServiceWatchSensorsRequest {
    /**
     * 
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof SensorServiceApisensorServiceWatchSensors
     */
    listOptionsContinue?: string
}

export class ObjectSensorServiceApi {
    private api: ObservableSensorServiceApi

    public constructor(configuration: Configuration, requestFactory?: SensorServiceApiRequestFactory, responseProcessor?: SensorServiceApiResponseProcessor) {
        this.api = new ObservableSensorServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public sensorServiceCreateSensor(param: SensorServiceApiSensorServiceCreateSensorRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1Sensor> {
        return this.api.sensorServiceCreateSensor(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public sensorServiceDeleteSensor(param: SensorServiceApiSensorServiceDeleteSensorRequest, options?: Configuration): Promise<any> {
        return this.api.sensorServiceDeleteSensor(param.namespace, param.name, param.deleteOptionsGracePeriodSeconds, param.deleteOptionsPreconditionsUid, param.deleteOptionsPreconditionsResourceVersion, param.deleteOptionsOrphanDependents, param.deleteOptionsPropagationPolicy, param.deleteOptionsDryRun,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public sensorServiceGetSensor(param: SensorServiceApiSensorServiceGetSensorRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1Sensor> {
        return this.api.sensorServiceGetSensor(param.namespace, param.name, param.getOptionsResourceVersion,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public sensorServiceListSensors(param: SensorServiceApiSensorServiceListSensorsRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1SensorList> {
        return this.api.sensorServiceListSensors(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public sensorServiceSensorsLogs(param: SensorServiceApiSensorServiceSensorsLogsRequest, options?: Configuration): Promise<StreamResultOfSensorLogEntry> {
        return this.api.sensorServiceSensorsLogs(param.namespace, param.name, param.triggerName, param.grep, param.podLogOptionsContainer, param.podLogOptionsFollow, param.podLogOptionsPrevious, param.podLogOptionsSinceSeconds, param.podLogOptionsSinceTimeSeconds, param.podLogOptionsSinceTimeNanos, param.podLogOptionsTimestamps, param.podLogOptionsTailLines, param.podLogOptionsLimitBytes, param.podLogOptionsInsecureSkipTLSVerifyBackend,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public sensorServiceUpdateSensor(param: SensorServiceApiSensorServiceUpdateSensorRequest, options?: Configuration): Promise<IoArgoprojEventsV1alpha1Sensor> {
        return this.api.sensorServiceUpdateSensor(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public sensorServiceWatchSensors(param: SensorServiceApiSensorServiceWatchSensorsRequest, options?: Configuration): Promise<StreamResultOfSensorSensorWatchEvent> {
        return this.api.sensorServiceWatchSensors(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

}

import { ObservableWorkflowServiceApi } from "./ObservableAPI";
import { WorkflowServiceApiRequestFactory, WorkflowServiceApiResponseProcessor} from "../apis/WorkflowServiceApi";

export interface WorkflowServiceApiWorkflowServiceCreateWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceCreateWorkflow
     */
    namespace: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowCreateRequest
     * @memberof WorkflowServiceApiworkflowServiceCreateWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowCreateRequest
}

export interface WorkflowServiceApiWorkflowServiceDeleteWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    name: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    deleteOptionsGracePeriodSeconds?: string
    /**
     * Specifies the target UID. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    deleteOptionsPreconditionsUid?: string
    /**
     * Specifies the target ResourceVersion +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    deleteOptionsPreconditionsResourceVersion?: string
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    deleteOptionsOrphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    deleteOptionsPropagationPolicy?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @type Array&lt;string&gt;
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    deleteOptionsDryRun?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceDeleteWorkflow
     */
    force?: boolean
}

export interface WorkflowServiceApiWorkflowServiceGetWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceGetWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceGetWorkflow
     */
    name: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceGetWorkflow
     */
    getOptionsResourceVersion?: string
    /**
     * Fields to be included or excluded in the response. e.g. \&quot;spec,status.phase\&quot;, \&quot;-status.nodes\&quot;.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceGetWorkflow
     */
    fields?: string
}

export interface WorkflowServiceApiWorkflowServiceLintWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceLintWorkflow
     */
    namespace: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowLintRequest
     * @memberof WorkflowServiceApiworkflowServiceLintWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowLintRequest
}

export interface WorkflowServiceApiWorkflowServiceListWorkflowsRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    listOptionsContinue?: string
    /**
     * Fields to be included or excluded in the response. e.g. \&quot;items.spec,items.status.phase\&quot;, \&quot;-items.status.nodes\&quot;.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceListWorkflows
     */
    fields?: string
}

export interface WorkflowServiceApiWorkflowServicePodLogsRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    name: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    podName: string
    /**
     * The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsContainer?: string
    /**
     * Follow the log stream of the pod. Defaults to false. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsFollow?: boolean
    /**
     * Return previous terminated container logs. Defaults to false. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsPrevious?: boolean
    /**
     * A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsSinceSeconds?: string
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsSinceTimeSeconds?: string
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @type number
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsSinceTimeNanos?: number
    /**
     * If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsTimestamps?: boolean
    /**
     * If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsTailLines?: string
    /**
     * If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsLimitBytes?: string
    /**
     * insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    logOptionsInsecureSkipTLSVerifyBackend?: boolean
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    grep?: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServicePodLogs
     */
    selector?: string
}

export interface WorkflowServiceApiWorkflowServiceResubmitWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceResubmitWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceResubmitWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest
     * @memberof WorkflowServiceApiworkflowServiceResubmitWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest
}

export interface WorkflowServiceApiWorkflowServiceResumeWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceResumeWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceResumeWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowResumeRequest
     * @memberof WorkflowServiceApiworkflowServiceResumeWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowResumeRequest
}

export interface WorkflowServiceApiWorkflowServiceRetryWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceRetryWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceRetryWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowRetryRequest
     * @memberof WorkflowServiceApiworkflowServiceRetryWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowRetryRequest
}

export interface WorkflowServiceApiWorkflowServiceSetWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceSetWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceSetWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowSetRequest
     * @memberof WorkflowServiceApiworkflowServiceSetWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowSetRequest
}

export interface WorkflowServiceApiWorkflowServiceStopWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceStopWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceStopWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowStopRequest
     * @memberof WorkflowServiceApiworkflowServiceStopWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowStopRequest
}

export interface WorkflowServiceApiWorkflowServiceSubmitWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceSubmitWorkflow
     */
    namespace: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest
     * @memberof WorkflowServiceApiworkflowServiceSubmitWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest
}

export interface WorkflowServiceApiWorkflowServiceSuspendWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceSuspendWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceSuspendWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest
     * @memberof WorkflowServiceApiworkflowServiceSuspendWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest
}

export interface WorkflowServiceApiWorkflowServiceTerminateWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceTerminateWorkflow
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceTerminateWorkflow
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest
     * @memberof WorkflowServiceApiworkflowServiceTerminateWorkflow
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest
}

export interface WorkflowServiceApiWorkflowServiceWatchEventsRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchEvents
     */
    listOptionsContinue?: string
}

export interface WorkflowServiceApiWorkflowServiceWatchWorkflowsRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    listOptionsContinue?: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWatchWorkflows
     */
    fields?: string
}

export interface WorkflowServiceApiWorkflowServiceWorkflowLogsRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    name: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    podName?: string
    /**
     * The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsContainer?: string
    /**
     * Follow the log stream of the pod. Defaults to false. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsFollow?: boolean
    /**
     * Return previous terminated container logs. Defaults to false. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsPrevious?: boolean
    /**
     * A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsSinceSeconds?: string
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsSinceTimeSeconds?: string
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @type number
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsSinceTimeNanos?: number
    /**
     * If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsTimestamps?: boolean
    /**
     * If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsTailLines?: string
    /**
     * If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsLimitBytes?: string
    /**
     * insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @type boolean
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    logOptionsInsecureSkipTLSVerifyBackend?: boolean
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    grep?: string
    /**
     * 
     * @type string
     * @memberof WorkflowServiceApiworkflowServiceWorkflowLogs
     */
    selector?: string
}

export class ObjectWorkflowServiceApi {
    private api: ObservableWorkflowServiceApi

    public constructor(configuration: Configuration, requestFactory?: WorkflowServiceApiRequestFactory, responseProcessor?: WorkflowServiceApiResponseProcessor) {
        this.api = new ObservableWorkflowServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public workflowServiceCreateWorkflow(param: WorkflowServiceApiWorkflowServiceCreateWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceCreateWorkflow(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceDeleteWorkflow(param: WorkflowServiceApiWorkflowServiceDeleteWorkflowRequest, options?: Configuration): Promise<any> {
        return this.api.workflowServiceDeleteWorkflow(param.namespace, param.name, param.deleteOptionsGracePeriodSeconds, param.deleteOptionsPreconditionsUid, param.deleteOptionsPreconditionsResourceVersion, param.deleteOptionsOrphanDependents, param.deleteOptionsPropagationPolicy, param.deleteOptionsDryRun, param.force,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceGetWorkflow(param: WorkflowServiceApiWorkflowServiceGetWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceGetWorkflow(param.namespace, param.name, param.getOptionsResourceVersion, param.fields,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceLintWorkflow(param: WorkflowServiceApiWorkflowServiceLintWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceLintWorkflow(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceListWorkflows(param: WorkflowServiceApiWorkflowServiceListWorkflowsRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
        return this.api.workflowServiceListWorkflows(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue, param.fields,  options).toPromise();
    }

    /**
     * DEPRECATED: Cannot work via HTTP if podName is an empty string. Use WorkflowLogs.
     * @param param the request object
     */
    public workflowServicePodLogs(param: WorkflowServiceApiWorkflowServicePodLogsRequest, options?: Configuration): Promise<StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry> {
        return this.api.workflowServicePodLogs(param.namespace, param.name, param.podName, param.logOptionsContainer, param.logOptionsFollow, param.logOptionsPrevious, param.logOptionsSinceSeconds, param.logOptionsSinceTimeSeconds, param.logOptionsSinceTimeNanos, param.logOptionsTimestamps, param.logOptionsTailLines, param.logOptionsLimitBytes, param.logOptionsInsecureSkipTLSVerifyBackend, param.grep, param.selector,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceResubmitWorkflow(param: WorkflowServiceApiWorkflowServiceResubmitWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceResubmitWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceResumeWorkflow(param: WorkflowServiceApiWorkflowServiceResumeWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceResumeWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceRetryWorkflow(param: WorkflowServiceApiWorkflowServiceRetryWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceRetryWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceSetWorkflow(param: WorkflowServiceApiWorkflowServiceSetWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceSetWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceStopWorkflow(param: WorkflowServiceApiWorkflowServiceStopWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceStopWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceSubmitWorkflow(param: WorkflowServiceApiWorkflowServiceSubmitWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceSubmitWorkflow(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceSuspendWorkflow(param: WorkflowServiceApiWorkflowServiceSuspendWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceSuspendWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceTerminateWorkflow(param: WorkflowServiceApiWorkflowServiceTerminateWorkflowRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1Workflow> {
        return this.api.workflowServiceTerminateWorkflow(param.namespace, param.name, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceWatchEvents(param: WorkflowServiceApiWorkflowServiceWatchEventsRequest, options?: Configuration): Promise<StreamResultOfIoK8sApiCoreV1Event> {
        return this.api.workflowServiceWatchEvents(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceWatchWorkflows(param: WorkflowServiceApiWorkflowServiceWatchWorkflowsRequest, options?: Configuration): Promise<StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent> {
        return this.api.workflowServiceWatchWorkflows(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue, param.fields,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowServiceWorkflowLogs(param: WorkflowServiceApiWorkflowServiceWorkflowLogsRequest, options?: Configuration): Promise<StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry> {
        return this.api.workflowServiceWorkflowLogs(param.namespace, param.name, param.podName, param.logOptionsContainer, param.logOptionsFollow, param.logOptionsPrevious, param.logOptionsSinceSeconds, param.logOptionsSinceTimeSeconds, param.logOptionsSinceTimeNanos, param.logOptionsTimestamps, param.logOptionsTailLines, param.logOptionsLimitBytes, param.logOptionsInsecureSkipTLSVerifyBackend, param.grep, param.selector,  options).toPromise();
    }

}

import { ObservableWorkflowTemplateServiceApi } from "./ObservableAPI";
import { WorkflowTemplateServiceApiRequestFactory, WorkflowTemplateServiceApiResponseProcessor} from "../apis/WorkflowTemplateServiceApi";

export interface WorkflowTemplateServiceApiWorkflowTemplateServiceCreateWorkflowTemplateRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceCreateWorkflowTemplate
     */
    namespace: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceCreateWorkflowTemplate
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest
}

export interface WorkflowTemplateServiceApiWorkflowTemplateServiceDeleteWorkflowTemplateRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    name: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    deleteOptionsGracePeriodSeconds?: string
    /**
     * Specifies the target UID. +optional.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    deleteOptionsPreconditionsUid?: string
    /**
     * Specifies the target ResourceVersion +optional.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    deleteOptionsPreconditionsResourceVersion?: string
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @type boolean
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    deleteOptionsOrphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    deleteOptionsPropagationPolicy?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @type Array&lt;string&gt;
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceDeleteWorkflowTemplate
     */
    deleteOptionsDryRun?: Array<string>
}

export interface WorkflowTemplateServiceApiWorkflowTemplateServiceGetWorkflowTemplateRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceGetWorkflowTemplate
     */
    namespace: string
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceGetWorkflowTemplate
     */
    name: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceGetWorkflowTemplate
     */
    getOptionsResourceVersion?: string
}

export interface WorkflowTemplateServiceApiWorkflowTemplateServiceLintWorkflowTemplateRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceLintWorkflowTemplate
     */
    namespace: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceLintWorkflowTemplate
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest
}

export interface WorkflowTemplateServiceApiWorkflowTemplateServiceListWorkflowTemplatesRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    namespace: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsLabelSelector?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsFieldSelector?: string
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @type boolean
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsWatch?: boolean
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @type boolean
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsAllowWatchBookmarks?: boolean
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsResourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsResourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsTimeoutSeconds?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsLimit?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceListWorkflowTemplates
     */
    listOptionsContinue?: string
}

export interface WorkflowTemplateServiceApiWorkflowTemplateServiceUpdateWorkflowTemplateRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceUpdateWorkflowTemplate
     */
    namespace: string
    /**
     * DEPRECATED: This field is ignored.
     * @type string
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceUpdateWorkflowTemplate
     */
    name: string
    /**
     * 
     * @type IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest
     * @memberof WorkflowTemplateServiceApiworkflowTemplateServiceUpdateWorkflowTemplate
     */
    body: IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest
}

export class ObjectWorkflowTemplateServiceApi {
    private api: ObservableWorkflowTemplateServiceApi

    public constructor(configuration: Configuration, requestFactory?: WorkflowTemplateServiceApiRequestFactory, responseProcessor?: WorkflowTemplateServiceApiResponseProcessor) {
        this.api = new ObservableWorkflowTemplateServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public workflowTemplateServiceCreateWorkflowTemplate(param: WorkflowTemplateServiceApiWorkflowTemplateServiceCreateWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        return this.api.workflowTemplateServiceCreateWorkflowTemplate(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowTemplateServiceDeleteWorkflowTemplate(param: WorkflowTemplateServiceApiWorkflowTemplateServiceDeleteWorkflowTemplateRequest, options?: Configuration): Promise<any> {
        return this.api.workflowTemplateServiceDeleteWorkflowTemplate(param.namespace, param.name, param.deleteOptionsGracePeriodSeconds, param.deleteOptionsPreconditionsUid, param.deleteOptionsPreconditionsResourceVersion, param.deleteOptionsOrphanDependents, param.deleteOptionsPropagationPolicy, param.deleteOptionsDryRun,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowTemplateServiceGetWorkflowTemplate(param: WorkflowTemplateServiceApiWorkflowTemplateServiceGetWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        return this.api.workflowTemplateServiceGetWorkflowTemplate(param.namespace, param.name, param.getOptionsResourceVersion,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowTemplateServiceLintWorkflowTemplate(param: WorkflowTemplateServiceApiWorkflowTemplateServiceLintWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        return this.api.workflowTemplateServiceLintWorkflowTemplate(param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowTemplateServiceListWorkflowTemplates(param: WorkflowTemplateServiceApiWorkflowTemplateServiceListWorkflowTemplatesRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplateList> {
        return this.api.workflowTemplateServiceListWorkflowTemplates(param.namespace, param.listOptionsLabelSelector, param.listOptionsFieldSelector, param.listOptionsWatch, param.listOptionsAllowWatchBookmarks, param.listOptionsResourceVersion, param.listOptionsResourceVersionMatch, param.listOptionsTimeoutSeconds, param.listOptionsLimit, param.listOptionsContinue,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workflowTemplateServiceUpdateWorkflowTemplate(param: WorkflowTemplateServiceApiWorkflowTemplateServiceUpdateWorkflowTemplateRequest, options?: Configuration): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplate> {
        return this.api.workflowTemplateServiceUpdateWorkflowTemplate(param.namespace, param.name, param.body,  options).toPromise();
    }

}
