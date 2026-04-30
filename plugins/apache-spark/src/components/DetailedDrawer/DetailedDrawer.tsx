import { ApacheSpark } from '../../api/model';
import type { CSSProperties } from 'react';
import { stringify } from 'yaml';
import { CopyTextButton, TabbedLayout } from '@backstage/core-components';
import {
  ApacheSparkDriverLogs,
  ApacheSparkExecutorLogs,
} from '../ApacheSparkLogs/ApacheSparkLogs';
import { DrawerOverview } from './DrawerOverview';

const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const contentStyle: CSSProperties = {
  height: '80%',
  backgroundColor: '#EEEEEE',
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'row',
};
const logsStyle: CSSProperties = {
  height: 500,
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
};
const logs2Style: CSSProperties = {
  height: 600,
  display: 'flex',
  flexDirection: 'column',
};

export const DrawerContent = ({
  toggleDrawer,
  apacheSpark,
}: {
  toggleDrawer: (isOpen: boolean) => void;
  apacheSpark: ApacheSpark;
}) => {
  const yamlString = stringify(apacheSpark);
  return (
    <TabbedLayout>
      <TabbedLayout.Route path="/" title="Overview">
        <>
          <div>
            <DrawerOverview sparkApp={apacheSpark} />
          </div>
        </>
      </TabbedLayout.Route>
      <TabbedLayout.Route path="/manifests" title="Manifest">
        <>
          <div style={headerStyle}>
            <h3>{apacheSpark.metadata.name}</h3>
            <button
              type="button"
              title="Close"
              onClick={() => toggleDrawer(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', fontSize: '20px', lineHeight: 1 }}
              aria-label="Close"
            >
              &#x2715;
            </button>
          </div>
          <div style={contentStyle}>
            <CopyTextButton text={yamlString} tooltipText="Copy" />
            <pre>{yamlString}</pre>
          </div>
        </>
      </TabbedLayout.Route>
      <TabbedLayout.Route path="/live-logs" title="Live logs">
        <>
          <div style={logs2Style}>
            <div style={logsStyle}>
              <h3>Driver Log for {apacheSpark.metadata.name}</h3>
              <ApacheSparkDriverLogs sparkApp={apacheSpark} />
            </div>
          </div>
          <div style={logs2Style}>
            <div style={logsStyle}>
              <h3>Executor Logs for {apacheSpark.metadata.name}</h3>
              <ApacheSparkExecutorLogs sparkApp={apacheSpark} />
            </div>
          </div>
        </>
      </TabbedLayout.Route>
    </TabbedLayout>
  );
};
