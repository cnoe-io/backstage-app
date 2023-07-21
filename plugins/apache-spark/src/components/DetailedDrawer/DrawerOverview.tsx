import { createStyles, makeStyles } from '@material-ui/core';
import { ApacheSpark } from '../../api/model';
import {
  InfoCard,
  StatusError,
  StatusOK,
  StatusPending,
  StatusRunning,
  StructuredMetadataTable,
} from '@backstage/core-components';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'column',
      padding: '5px',
      gap: '30px',
    },
  }),
);

type generateMetadataOutput = {
  app: { [key: string]: any };
  driver: { [key: string]: any };
  executor: { [key: string]: any };
};

function generateMetadata(sparkApp: ApacheSpark): generateMetadataOutput {
  const out = {} as generateMetadataOutput;
  const executor: { [key: string]: any } = {};
  const app: { [key: string]: any } = {
    name: sparkApp.metadata.name,
    namespace: sparkApp.metadata.namespace,
    status: renderState(sparkApp.status.applicationState.state),
    image: sparkApp.spec.image,
    mode: sparkApp.spec.mode,
  };
  if (sparkApp.status.applicationState.errorMessage)
    app['error Message'] = sparkApp.status.applicationState.errorMessage;

  for (const key in sparkApp.status.executorState) {
    if (sparkApp.status.executorState.hasOwnProperty(key)) {
      executor[`${key}`] = renderState(sparkApp.status.executorState[key]);
    }
  }
  out.app = app;
  out.driver = sparkApp.status.driverInfo ? sparkApp.status.driverInfo : {};
  out.executor = executor;
  return out;
}

function renderState(state: string): JSX.Element {
  switch (state) {
    case 'RUNNING':
      return <StatusRunning>{state}</StatusRunning>;
    case 'COMPLETED':
      return <StatusOK>{state}</StatusOK>;
    case 'SUBMITTED':
    case 'PENDING_RERUN':
      return <StatusPending>{state}</StatusPending>;
    case 'FAILED':
    case 'SUBMISSION_FAILED':
      return <StatusError>{state}</StatusError>;
    default:
      return <StatusPending>{state}</StatusPending>;
  }
}

const upperCaseFirstChar = (s: string) => {
  if (s.length > 0) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
  }
  return s;
};

export const DrawerOverview = (props: { sparkApp: ApacheSpark }) => {
  return (
    <div className={useStyles().content}>
      <InfoCard title="Apache Spark Application">
        <StructuredMetadataTable
          metadata={generateMetadata(props.sparkApp).app}
          options={{ titleFormat: upperCaseFirstChar }}
        />
      </InfoCard>
      <InfoCard title="Driver">
        <StructuredMetadataTable
          metadata={generateMetadata(props.sparkApp).driver}
          options={{ titleFormat: upperCaseFirstChar }}
        />
      </InfoCard>
      <InfoCard title="Executors">
        <StructuredMetadataTable
          metadata={generateMetadata(props.sparkApp).executor}
          options={{ titleFormat: upperCaseFirstChar }}
        />
      </InfoCard>
    </div>
  );
};
