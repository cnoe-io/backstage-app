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

import { useAsyncRetry } from 'react-use';
import {
  useApi,
} from '@backstage/core-plugin-api';
import { useCallback } from 'react';
import { AlarmItem, awsCloudWatchApiRef } from '../api';

export function useCloudWatchAlarms({
  entityRef,
}: {
  entityRef: string;
}) {
  const cloudWatchApi = useApi(awsCloudWatchApiRef);

  const getAlarms = useCallback(
    async () => {
      return await cloudWatchApi.getAlarms({
        entityRef,
      });
    },
    [entityRef], // eslint-disable-line react-hooks/exhaustive-deps
  );
  const {
    loading,
    value: alarms,
    error,
    retry,
  } = useAsyncRetry<AlarmItem[] | undefined>(async () => {
    return await getAlarms();
  }, []);

  return [
    {
      loading,
      alarms,
      error,
      retry,
    },
  ] as const;
}