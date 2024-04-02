/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {
  Grid,
  LinearProgress,
} from '@material-ui/core';
import { Entity, stringifyEntityRef } from '@backstage/catalog-model';
import { 
  ResponseErrorPanel, WarningPanel,
} 
from '@backstage/core-components';
import { useEntity } from "@backstage/plugin-catalog-react";
import { useCloudWatchAlarms } from '../../hooks/useCloudWatchAlarms';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  wrapper: {
    color: 'white',
    borderRadius: '4px'
  },
  titleWrapper: {
    borderBottom: '1px solid white'
  },
  title: {
    padding: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  content: {
    padding: '20px',
    fontSize: '40px',
    textAlign: 'center'
  }
});

const AWSCloudWatchAlarmsOverview = ({ entity }: { entity: Entity }) => {
  const classes = useStyles();

  const [alarmData] = useCloudWatchAlarms({
    entityRef: stringifyEntityRef(entity)
  });
  if (alarmData.loading) {
    return (
      <div>
        <div style={{textAlign: 'center', padding: '10px'}}>Loading status...</div>
        <LinearProgress />
      </div>
    );
  }
  if (alarmData.error) {
    return (
      <ResponseErrorPanel error={alarmData.error} />
    );
  }

  if(alarmData.alarms?.length == 0) {
    return (
    <WarningPanel
      title="No status information"
      message={
        <>
          No CloudWatch alarms have been defined for this component.
        </>
      }
    />);
  }

  console.log(alarmData.alarms)

  return (
  <div>
    <Grid container spacing={3} alignItems="stretch">
    {alarmData.alarms!.map((alarm) => {

      let color = '#1DB954';

      if(alarm.alarm.StateValue == 'ALARM') {
        color = '#E22134';
      }
      else if(alarm.alarm.StateValue == 'INSUFFICIENT_DATA') {
        color = 'grey'
      }

      let title = alarm.alarm.Metrics!.find((e) => e.ReturnData)?.Label || 'Unknown';
      let unit = alarm.tags!.find((e) => e.Key == 'unit')?.Value || '';

      if(unit == 'percent') {
        unit = '%';
      }

      let value = `${Math.round(alarm.data[0].Values![0] || 0)} ${unit}`
      
      return (
        <Grid item md={4}>
          <div style={{backgroundColor: color}} className={classes.wrapper}>
            <div className={classes.titleWrapper}>
              <div className={classes.title}>{title}</div>
            </div>
            <div className={classes.content}>{value}</div>
          </div>
        </Grid>
      );
    })}

    </Grid>
  </div>);
};

type Props = {
  /** @deprecated The entity is now grabbed from context instead */
  entity?: Entity;
};

export const AWSCloudWatchAlarmsOverviewWidget = (_props: Props) => {
  const { entity } = useEntity();

  return (<AWSCloudWatchAlarmsOverview entity={entity} />);
};


/*let chartData = alarm.data[0].Timestamps?.map((timestamp, index) => {
        console.log(timestamp)
        return {
          time: new Date(timestamp).getTime(),
          value: alarm.data[0].Values![index]
        }
      });
      return (
      <Grid item md={4}>
        <div>{alarm.alarm.AlarmName}</div>
        <ResponsiveContainer width = '95%' height = {200} >
          <ScatterChart>
            <XAxis
              dataKey = 'time'
              domain = {['auto', 'auto']}
              name = 'Time'
              tickFormatter = {(unixTime) => {
                let tickDate = new Date(unixTime);
                return `${tickDate.getHours()}:${tickDate.getMinutes()}`}
            }
              type = 'number'
            />
            <YAxis dataKey = 'value' name = 'Value' />

            <Scatter
              data = {chartData}
              line = {{ stroke: '#eee', strokeWidth: 5 }}
              lineJointType = 'monotoneX'
              lineType = 'joint'
              name = 'Values'
            />

          </ScatterChart>
        </ResponsiveContainer>
        {(alarm.alarm.StateValue == 'OK') && (
          <div className={classes.wrapper}><MdCheckCircle/><span>OK</span></div>
        )}
      </Grid>
        
        )*/