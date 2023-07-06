import { ApacheSpark } from '../../api/model';
import {
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import React from 'react';
import { stringify } from 'yaml';
import { CopyTextButton, TabbedLayout } from '@backstage/core-components';
import {
  ApacheSparkDriverLogs,
  ApacheSparkExecutorLogs,
} from '../ApacheSparkLogs/ApacheSparkLogs';
import { DrawerOverview } from './DrawerOverview';

const useDrawerContentStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    icon: {
      fontSize: 20,
    },
    content: {
      height: '80%',
      backgroundColor: '#EEEEEE',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'row',
    },
    logs: {
      height: 500,
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    },
    logs2: {
      height: 600,
      display: 'flex',
      flexDirection: 'column',
    },
    secondaryAction: {
      marginLeft: theme.spacing(2.5),
    },
  }),
);

export const DrawerContent = ({
  toggleDrawer,
  apacheSpark,
}: {
  toggleDrawer: (isOpen: boolean) => void;
  apacheSpark: ApacheSpark;
}) => {
  const classes = useDrawerContentStyles();
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
          <div className={classes.header}>
            <Typography variant="h6">{apacheSpark.metadata.name}</Typography>
            <IconButton
              key="dismiss"
              title="Close"
              onClick={() => toggleDrawer(false)}
              color="inherit"
            >
              <Close className={classes.icon} />
            </IconButton>
          </div>
          <div className={classes.content}>
            <CopyTextButton text={yamlString} tooltipText="Copy" />
            <pre>{yamlString}</pre>
          </div>
        </>
      </TabbedLayout.Route>
      <TabbedLayout.Route path="/logs" title="Logs">
        <>
          <div className={classes.logs2}>
            <div className={classes.logs}>
              <Typography variant="h6">
                Driver Log for {apacheSpark.metadata.name}
              </Typography>
              <ApacheSparkDriverLogs sparkApp={apacheSpark} />
            </div>
          </div>
          <div className={classes.logs2}>
            <div className={classes.logs}>
              <Typography variant="h6">
                Executor Logs for {apacheSpark.metadata.name}
              </Typography>
              <ApacheSparkExecutorLogs sparkApp={apacheSpark} />
            </div>
          </div>
        </>
      </TabbedLayout.Route>
    </TabbedLayout>
  );
};
