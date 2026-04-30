import { kubernetesHandlers } from './kubernetes';
import { terraformHandlers } from './terraform';

export const handlers = [...kubernetesHandlers, ...terraformHandlers];
