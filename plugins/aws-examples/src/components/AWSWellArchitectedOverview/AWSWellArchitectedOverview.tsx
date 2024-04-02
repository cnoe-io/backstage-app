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
  LinearProgress,
} from '@material-ui/core';
import { Entity } from '@backstage/catalog-model';
import { 
  InfoCard, 
  ResponseErrorPanel,
  StatusAborted,
  StatusError,
  StatusOK,
  StatusWarning,
} 
from '@backstage/core-components';
import { useEntity } from "@backstage/plugin-catalog-react";
import { Table } from "@backstage/core-components";
import { useWellArchitectedReview } from '../../hooks/useWellArchitectedReview';
import { PillarReviewSummary } from '@aws-sdk/client-wellarchitected';

const generatedColumns = (
) => {
  return [
    {
      title: "Pillar",
      field: "PillarName",
    },
    {
      title: "Risks",
      field: "status",
      render: (row: Partial<PillarReviewSummary>) => {
        let unanswered = row.RiskCounts!["UNANSWERED"];
        let highRisk = row.RiskCounts!["HIGH"];
        let mediumRisk = row.RiskCounts!["MEDIUM"]
        let noRisk = row.RiskCounts!["NONE"];
        let notApplicable = row.RiskCounts!["NOT_APPLICABLE"];

        let answered = notApplicable + highRisk + mediumRisk + noRisk;
        let total = answered + unanswered;

        if(unanswered > 0) {
          return (<> <StatusAborted /> Incomplete - {answered}/{total}</>)
        }

        if(noRisk + notApplicable == total) {
          return (
            <>
              <StatusOK /> No risks
            </>
          )
        }

        return (
          <>
            {(row.RiskCounts!["HIGH"] > 0) &&
            <div>
              <StatusError /> {row.RiskCounts!["HIGH"]} High risk(s)
            </div>
            }
            {(row.RiskCounts!["MEDIUM"] > 0) &&
            <div>
              <StatusWarning /> {row.RiskCounts!["MEDIUM"]} Medium risk(s)
            </div>
            }
          </>
        );
      },
    }
  ];
};

const AWSWellArchitectedOverview = ({ entity }: { entity: Entity }) => {
  const [reviewData] = useWellArchitectedReview({
    component: entity.metadata.name,
  });
  if (reviewData.loading) {
    return (
      <InfoCard title="AWS Well-Architected Review">
        <LinearProgress />
      </InfoCard>
    );
  }
  if (reviewData.error) {
    return (
      <InfoCard title="AWS Well-Architected Review">
        <ResponseErrorPanel error={reviewData.error} />
      </InfoCard>
    );
  }
  if (!reviewData.review?.LensName) {
    return (
      <InfoCard title="AWS Well-Architected Review">
        No Well-Architected Review found
      </InfoCard>
    );
  }
  return (
  <InfoCard title="AWS Well-Architected Review" noPadding>
    <Table
      isLoading={reviewData.loading}
      data={reviewData.review?.PillarReviewSummaries ?? []}
      options={{
        paging: false,
        search: false,
        toolbar: false,
        padding: "dense",
      }}
      columns={generatedColumns()}
    />
  </InfoCard>);
};

type Props = {
  /** @deprecated The entity is now grabbed from context instead */
  entity?: Entity;
};

export const AWSWellArchitectedOverviewWidget = (_props: Props) => {
  const { entity } = useEntity();
  return (<AWSWellArchitectedOverview entity={entity} />);
};