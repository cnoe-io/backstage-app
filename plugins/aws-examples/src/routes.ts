import { createRouteRef } from '@backstage/core-plugin-api';

export const awsSecurityHubDashboardRouteRef = createRouteRef({
  id: 'aws-security-hub-dashboard',
});

export const awsEcsDashboardRouteRef = createRouteRef({
  id: 'aws-ecs-dashboard',
});

export const amazonQChatRouteRef = createRouteRef({
  id: 'amazon-q-chat',
});
