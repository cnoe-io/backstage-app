import React from 'react';
import { EntityKubernetesContent } from '@backstage/plugin-kubernetes';
import { useEntity } from '@backstage/plugin-catalog-react';
import {
  IfKroResourceGraphAvailable,
  KroResourceGraph,
  KroOverviewCard,
  IfKroOverviewAvailable,
} from '@terasky/backstage-plugin-kro-resources-frontend';

const stack: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const chip: React.CSSProperties = {
  display: 'inline-block',
  padding: '2px 10px',
  borderRadius: '16px',
  fontSize: '0.8125rem',
  lineHeight: '1.6',
  border: '1px solid',
};

/**
 * Enhanced Kubernetes content that integrates Kro ResourceGroups
 * with standard Kubernetes resources for a unified view.
 */
export const KubernetesContentWithKro = () => {
  const { entity } = useEntity();

  const isKroResourceGroup = entity.spec?.type === 'kro-resource-group';
  const hasKroAnnotations = Boolean(
    entity.metadata.annotations?.['kro.run/resource-group'] ||
      entity.metadata.annotations?.['kro.run/managed-by'],
  );

  return (
    <div style={stack}>
      {(isKroResourceGroup || hasKroAnnotations) && (
        <>
          <div
            style={{
              padding: '16px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '4px',
            }}
          >
            <h3 style={{ margin: '0 0 8px' }}>Kro Integration</h3>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {isKroResourceGroup && (
                <span style={{ ...chip, borderColor: '#90caf9', color: '#90caf9' }}>
                  Kro ResourceGroup
                </span>
              )}
              {hasKroAnnotations && !isKroResourceGroup && (
                <span style={{ ...chip, borderColor: '#ce93d8', color: '#ce93d8' }}>
                  Managed by Kro
                </span>
              )}
              {entity.metadata.annotations?.['kro.run/resource-group'] && (
                <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                  ResourceGroup:{' '}
                  {entity.metadata.annotations['kro.run/resource-group']}
                </span>
              )}
            </div>
          </div>

          {isKroResourceGroup && (
            <IfKroOverviewAvailable>
              <KroOverviewCard />
            </IfKroOverviewAvailable>
          )}

          {isKroResourceGroup && (
            <IfKroResourceGraphAvailable>
              <KroResourceGraph />
            </IfKroResourceGraphAvailable>
          )}
        </>
      )}

      <EntityKubernetesContent />
    </div>
  );
};
