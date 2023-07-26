import { scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { createScaffolderFieldExtension } from '@backstage/plugin-scaffolder-react';
import { KubernetesClusterPicker } from './KubernetesClusterPicker';
import { ClusterPickerSchema } from './schema';

export const KubernetesClusterPickerExtension = scaffolderPlugin.provide(
  createScaffolderFieldExtension({
    name: 'KubernetesClusterPicker',
    component: KubernetesClusterPicker,
    schema: ClusterPickerSchema,
  }),
);
