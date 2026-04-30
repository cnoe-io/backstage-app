import type { CSSProperties, FC, ChangeEvent } from 'react';

interface KroResourceFilterProps {
  selectedResourceTypes: string[];
  onResourceTypeChange: (resourceTypes: string[]) => void;
  availableResourceTypes: string[];
}

const styles = {
  container: {
    padding: 8,
  } as CSSProperties,
  select: {
    minWidth: 200,
    padding: '8px 12px',
    borderRadius: 4,
    border: '1px solid rgba(0,0,0,0.23)',
    fontSize: '0.875rem',
    backgroundColor: 'var(--backstage-color-background-paper, #fff)',
  } as CSSProperties,
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 4,
    marginTop: 8,
  } as CSSProperties,
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '2px 8px',
    borderRadius: 16,
    fontSize: '0.75rem',
    border: '1px solid rgba(0,0,0,0.23)',
    backgroundColor: 'transparent',
  } as CSSProperties,
  kroChip: {
    backgroundColor: 'var(--backstage-color-primary-light, #90caf9)',
    color: '#fff',
    borderColor: 'transparent',
  } as CSSProperties,
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    fontSize: '0.875rem',
    lineHeight: 1,
    color: 'inherit',
  } as CSSProperties,
};

/**
 * Enhanced resource filter that includes Kro ResourceGroups
 * alongside standard Kubernetes resources
 */
export const KroResourceFilter: FC<KroResourceFilterProps> = ({
  selectedResourceTypes,
  onResourceTypeChange,
  availableResourceTypes,
}) => {
  const kroResourceTypes = availableResourceTypes.filter(type =>
    type.includes('kro.run') || type.includes('ResourceGroup')
  );

  const standardResourceTypes = availableResourceTypes.filter(type =>
    !type.includes('kro.run') && !type.includes('ResourceGroup')
  );

  const isKroResource = (resourceType: string): boolean => {
    return resourceType.includes('kro.run') || resourceType.includes('ResourceGroup');
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value && !selectedResourceTypes.includes(value)) {
      onResourceTypeChange([...selectedResourceTypes, value]);
    }
  };

  const handleChipDelete = (resourceType: string) => {
    onResourceTypeChange(selectedResourceTypes.filter(type => type !== resourceType));
  };

  return (
    <div style={styles.container}>
      <label htmlFor="resource-type-select" style={{ display: 'block', marginBottom: 4, fontSize: '0.75rem', color: 'rgba(0,0,0,0.54)' }}>
        Resource Types
      </label>
      <select
        id="resource-type-select"
        style={styles.select}
        onChange={handleSelectChange}
        value=""
      >
        <option value="" disabled>Select resource type...</option>
        {kroResourceTypes.length > 0 && (
          <optgroup label="Kro Resources">
            {kroResourceTypes.map(resourceType => (
              <option key={resourceType} value={resourceType}>
                {resourceType}
              </option>
            ))}
          </optgroup>
        )}
        {standardResourceTypes.length > 0 && (
          <optgroup label="Standard Resources">
            {standardResourceTypes.map(resourceType => (
              <option key={resourceType} value={resourceType}>
                {resourceType}
              </option>
            ))}
          </optgroup>
        )}
      </select>

      {selectedResourceTypes.length > 0 && (
        <div style={styles.chipContainer}>
          {selectedResourceTypes.map(value => (
            <span
              key={value}
              style={{
                ...styles.chip,
                ...(isKroResource(value) ? styles.kroChip : {}),
              }}
            >
              {value}
              <button
                style={styles.deleteButton}
                onClick={() => handleChipDelete(value)}
                aria-label={`Remove ${value}`}
              >
                x
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Default resource types that should be included for Kro integration
 */
export const DEFAULT_KRO_RESOURCE_TYPES = [
  'kro.run/v1alpha1/ResourceGraphDefinition',
  'kro.run/v1alpha1/CICDPipeline',
  'kro.run/v1alpha1/EksCluster',
  'kro.run/v1alpha1/EksclusterWithVpc',
  'kro.run/v1alpha1/Vpc',
];

/**
 * Helper function to get all available resource types including Kro resources
 */
export const getAllResourceTypesWithKro = (standardTypes: string[]): string[] => {
  return [...DEFAULT_KRO_RESOURCE_TYPES, ...standardTypes];
};
