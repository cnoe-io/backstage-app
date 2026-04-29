import React from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useRouteRef } from '@backstage/core-plugin-api';
import { entityRouteRef } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';

interface RelatedResource {
  name: string;
  kind: string;
  namespace?: string;
  entityRef?: string;
  isKroResource: boolean;
}

const chipStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '2px 10px',
  borderRadius: '16px',
  fontSize: '0.8125rem',
  lineHeight: '1.6',
  border: '1px solid',
};

const btnStyle: React.CSSProperties = {
  padding: '4px 12px',
  borderRadius: '4px',
  border: '1px solid rgba(144,202,249,0.5)',
  background: 'transparent',
  color: '#90caf9',
  cursor: 'pointer',
  fontSize: '0.8125rem',
};

/**
 * Navigation helper component that provides seamless navigation
 * between Kubernetes and Kro views.
 */
export const KroNavigationHelper: React.FC = () => {
  const { entity } = useEntity();
  const catalogEntityRoute = useRouteRef(entityRouteRef);

  const getRelatedResources = (): RelatedResource[] => {
    const resources: RelatedResource[] = [];

    const resourceGroupRef =
      entity.metadata.annotations?.['kro.run/resource-group'];
    if (resourceGroupRef) {
      resources.push({
        name: resourceGroupRef,
        kind: 'ResourceGroup',
        entityRef: resourceGroupRef,
        isKroResource: true,
      });
    }

    const managedResources =
      entity.metadata.annotations?.['kro.run/managed-resources'];
    if (managedResources) {
      try {
        const parsed = JSON.parse(managedResources);
        if (Array.isArray(parsed)) {
          parsed.forEach((resource: any) => {
            resources.push({
              name: resource.name || 'Unknown',
              kind: resource.kind || 'Unknown',
              namespace: resource.namespace,
              isKroResource: false,
            });
          });
        }
      } catch {
        // ignore parse errors
      }
    }

    if (entity.relations) {
      entity.relations.forEach(relation => {
        if (relation.type === 'dependsOn' || relation.type === 'partOf') {
          const targetRef =
            typeof relation.targetRef === 'string'
              ? relation.targetRef
              : `${(relation.targetRef as any).kind}/${(relation.targetRef as any).namespace}/${(relation.targetRef as any).name}`;
          const isKro = targetRef.includes('kro-resource-group');
          resources.push({
            name: targetRef.split('/').pop() || targetRef,
            kind: targetRef.split('/')[0] || 'Component',
            entityRef: targetRef,
            isKroResource: isKro,
          });
        }
      });
    }

    return resources;
  };

  const relatedResources = getRelatedResources();
  const isKroResourceGroup = entity.spec?.type === 'kro-resource-group';

  const navigateToEntity = (entityRef: string) => {
    const parts = entityRef.split('/');
    const [kind, namespace, name] =
      parts.length >= 3 ? parts : ['component', 'default', parts[0]];
    return catalogEntityRoute({
      kind: kind.toLowerCase(),
      namespace: namespace || 'default',
      name,
    });
  };

  if (relatedResources.length === 0 && !isKroResourceGroup) {
    return null;
  }

  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '4px',
        marginBottom: '16px',
      }}
    >
      <h3 style={{ margin: '0 0 12px' }}>Resource Relationships</h3>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
        {isKroResourceGroup && (
          <span style={{ ...chipStyle, borderColor: '#90caf9', color: '#90caf9' }}>
            Kro ResourceGroup
          </span>
        )}
        {relatedResources.some(r => !r.isKroResource) && (
          <span style={{ ...chipStyle, borderColor: '#ce93d8', color: '#ce93d8' }}>
            Manages {relatedResources.filter(r => !r.isKroResource).length} Resources
          </span>
        )}
      </div>

      {relatedResources.length > 0 && (
        <div style={{ marginBottom: '12px' }}>
          <h4 style={{ margin: '0 0 8px', fontSize: '0.875rem' }}>
            Related Resources
          </h4>
          <div
            style={{
              maxHeight: 200,
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {relatedResources.map((resource, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ fontSize: '0.875rem' }}>{resource.name}</span>
                <span
                  style={{
                    ...chipStyle,
                    fontSize: '0.75rem',
                    padding: '0 6px',
                    borderColor: resource.isKroResource
                      ? '#90caf9'
                      : 'rgba(255,255,255,0.23)',
                    color: resource.isKroResource ? '#90caf9' : 'inherit',
                  }}
                >
                  {resource.kind}
                </span>
                {resource.entityRef && (
                  <a
                    href={navigateToEntity(resource.entityRef)}
                    style={{ ...btnStyle, textDecoration: 'none', marginLeft: 'auto' }}
                  >
                    View
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '8px' }}>
        {isKroResourceGroup && (
          <button
            type="button"
            style={btnStyle}
            onClick={() => {
              const currentUrl = window.location.href;
              const baseUrl = currentUrl.split('/kubernetes')[0];
              window.location.href = `${baseUrl}/kro`;
            }}
          >
            View Kro Details
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Helper function to determine if navigation helper should be shown.
 */
export const shouldShowKroNavigation = (entity: Entity): boolean => {
  return (
    entity.spec?.type === 'kro-resource-group' ||
    Boolean(entity.metadata.annotations?.['kro.run/resource-group']) ||
    Boolean(entity.metadata.annotations?.['kro.run/managed-resources']) ||
    Boolean(
      entity.relations?.some(
        r =>
          (r.type === 'dependsOn' || r.type === 'partOf') &&
          (typeof r.targetRef === 'string'
            ? r.targetRef
            : `${(r.targetRef as any).kind}`
          ).includes('kro-resource-group'),
      ),
    )
  );
};
