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
import React, { PropsWithChildren } from 'react';
import { stringify } from 'yaml';
import { CopyTextButton, TabbedLayout } from '@backstage/core-components';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const useDrawerContentStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      flexDirection: 'row',
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
      <TabbedLayout.Route path="/" title="Manifest">
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
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => toggleDrawer(false)}
            >
              Primary Action
            </Button>
            <Button
              className={classes.secondaryAction}
              variant="outlined"
              color="primary"
              onClick={() => toggleDrawer(false)}
            >
              Secondary Action
            </Button>
          </div>
        </>
      </TabbedLayout.Route>
      <TabbedLayout.Route path="/logs" title="logs">
        <div>logs!</div>
      </TabbedLayout.Route>
    </TabbedLayout>
  );
};
