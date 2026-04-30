import { cloneElement, type CSSProperties, type ReactElement } from 'react';
import Dashboard from '@mui/icons-material/Dashboard';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import Cloud from '@mui/icons-material/Cloud';
import AccountTree from '@mui/icons-material/AccountTree';
import Api from '@mui/icons-material/Api';
import Hub from '@mui/icons-material/Hub';
import Description from '@mui/icons-material/Description';
import Bolt from '@mui/icons-material/Bolt';
import Storage from '@mui/icons-material/Storage';
import Category from '@mui/icons-material/Category';
import Schedule from '@mui/icons-material/Schedule';
import Person from '@mui/icons-material/Person';
import Schema from '@mui/icons-material/Schema';
import GridView from '@mui/icons-material/GridView';
import { useEntity } from '@backstage/plugin-catalog-react';
import {
  EntityAboutCard,
  EntityDependsOnComponentsCard,
  EntityDependsOnResourcesCard,
  EntityHasComponentsCard,
  EntityHasResourcesCard,
  EntityHasSubcomponentsCard,
  EntityHasSystemsCard,
  EntityLayout,
  EntityLinksCard,
  EntitySwitch,
  EntityOrphanWarning,
  EntityProcessingErrorsPanel,
  isComponentType,
  isKind,
  hasCatalogProcessingErrors,
  isOrphan,
  hasRelationWarnings,
  EntityRelationWarning,
} from '@backstage/plugin-catalog';
import {
  EntityUserProfileCard,
  EntityGroupProfileCard,
  EntityMembersListCard,
  EntityOwnershipCard,
} from '@backstage/plugin-org';
import { EntityTechdocsContent } from '@backstage/plugin-techdocs';
import { EmptyState } from '@backstage/core-components';
import {
  EntityApiDefinitionCard,
  EntityConsumedApisCard,
  EntityConsumingComponentsCard,
  EntityHasApisCard,
  EntityProvidedApisCard,
  EntityProvidingComponentsCard,
} from '@backstage/plugin-api-docs';
import {
  Direction,
  EntityCatalogGraphCard,
} from '@backstage/plugin-catalog-graph';
import {
  RELATION_API_CONSUMED_BY,
  RELATION_API_PROVIDED_BY,
  RELATION_CONSUMES_API,
  RELATION_DEPENDENCY_OF,
  RELATION_DEPENDS_ON,
  RELATION_HAS_PART,
  RELATION_PART_OF,
  RELATION_PROVIDES_API,
} from '@backstage/catalog-model';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';

import { EntityKubernetesContent, isKubernetesAvailable } from '@backstage/plugin-kubernetes';
import {
  IfKroResourceGraphAvailable,
  IfKroOverviewAvailable,
  KroOverviewCard,
  KroResourceGraph,
  isKroAvailable,
} from '@terasky/backstage-plugin-kro-resources-frontend';

import {
  EntityArgoWorkflowsOverviewCard,
  EntityArgoWorkflowsTemplateOverviewCard,
  isArgoWorkflowsAvailable,
} from '@internal/plugin-argo-workflows';
import {
  EntityApacheSparkContent,
  isApacheSparkAvailable,
} from '@internal/plugin-apache-spark';
import {
  EntityTerraformContent,
  isTerraformAvailable,
} from '@internal/plugin-terraform';
import {
  EntityArgoCDOverviewCard,
  isArgocdAvailable,
} from '@roadiehq/backstage-plugin-argo-cd';

// CSS grid layout helpers (replaces MUI Grid)
const grid12: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '24px',
  alignItems: 'stretch',
};
const span = (n: number): CSSProperties => ({ gridColumn: `span ${n}` });

// Tab label helper — renders icon + text inline
// EntityLayout.Route types title as string but renders ReactNode at runtime
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tabLabel = (icon: ReactElement, text: string): any => (
  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    {cloneElement(icon, { style: { fontSize: 18 } })}
    {text}
  </span>
);

// Chip style helpers for EntityMetadataBar
const chipBase: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  borderRadius: '16px',
  fontSize: '12px',
  padding: '4px 12px',
  fontWeight: 500,
};

const EntityMetadataBar = () => {
  const { entity } = useEntity();
  const lifecycle = (entity.spec?.lifecycle as string) || 'unknown';
  const type = (entity.spec?.type as string) || 'unknown';
  const owner = (entity.spec?.owner as string) || 'unknown';

  let lifecycleColor = { background: '#e3f2fd', color: '#1565c0' };
  if (lifecycle === 'production') {
    lifecycleColor = { background: '#e8f5e9', color: '#2e7d32' };
  } else if (lifecycle === 'experimental') {
    lifecycleColor = { background: '#fff8e1', color: '#f57f17' };
  }

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '12px 0', gridColumn: 'span 12' }}>
      <span style={{ ...chipBase, background: '#e3f2fd', color: '#1565c0' }}>
        <Category style={{ fontSize: 14 }} />
        {type}
      </span>
      <span style={{ ...chipBase, ...lifecycleColor }}>
        <Schedule style={{ fontSize: 14 }} />
        {lifecycle}
      </span>
      <span style={{ ...chipBase, background: '#f3e5f5', color: '#7b1fa2' }}>
        <Person style={{ fontSize: 14 }} />
        {owner}
      </span>
    </div>
  );
};

const techdocsContent = (
  <EntityTechdocsContent>
    <TechDocsAddons>
      <ReportIssue />
    </TechDocsAddons>
  </EntityTechdocsContent>
);

const cicdContent = (
  <EntitySwitch>
    <EntitySwitch.Case if={isArgoWorkflowsAvailable}>
      <div style={grid12}>
        <div style={span(12)}>
          <EntityArgoWorkflowsOverviewCard />
        </div>
        <div style={span(12)}>
          <EntityArgoWorkflowsTemplateOverviewCard />
        </div>
      </div>
    </EntitySwitch.Case>
    <EntitySwitch.Case>
      <EmptyState
        title="No CI/CD available for this entity"
        missing="info"
        description="You need to add an annotation to your component if you want to enable CI/CD for it. You can read more about annotations in Backstage by clicking the button below."
        action={
          <a href="https://backstage.io/docs/features/software-catalog/well-known-annotations">
            Read more
          </a>
        }
      />
    </EntitySwitch.Case>
  </EntitySwitch>
);

const entityWarningContent = (
  <>
    <EntitySwitch>
      <EntitySwitch.Case if={isOrphan}>
        <div style={span(12)}>
          <EntityOrphanWarning />
        </div>
      </EntitySwitch.Case>
    </EntitySwitch>
    <EntitySwitch>
      <EntitySwitch.Case if={hasRelationWarnings}>
        <div style={span(12)}>
          <EntityRelationWarning />
        </div>
      </EntitySwitch.Case>
    </EntitySwitch>
    <EntitySwitch>
      <EntitySwitch.Case if={hasCatalogProcessingErrors}>
        <div style={span(12)}>
          <EntityProcessingErrorsPanel />
        </div>
      </EntitySwitch.Case>
    </EntitySwitch>
  </>
);

const overviewContent = (
  <div style={grid12}>
    <EntityMetadataBar />
    {entityWarningContent}
    <div style={span(6)}>
      <EntityAboutCard />
    </div>
    <div style={span(6)}>
      <EntityCatalogGraphCard height={400} />
    </div>
    <EntitySwitch>
      <EntitySwitch.Case if={isArgocdAvailable}>
        <div style={span(12)}>
          <EntityArgoCDOverviewCard />
        </div>
      </EntitySwitch.Case>
    </EntitySwitch>
    <div style={span(4)}>
      <EntityLinksCard />
    </div>
    <div style={span(8)}>
      <EntityHasSubcomponentsCard />
    </div>
  </div>
);

const kubernetesContent = (
  <EntityKubernetesContent />
);

const kroDetailsContent = (
  <div style={grid12}>
    <div style={span(12)}>
      <IfKroOverviewAvailable>
        <KroOverviewCard />
      </IfKroOverviewAvailable>
    </div>
    <div style={span(12)}>
      <IfKroResourceGraphAvailable>
        <KroResourceGraph />
      </IfKroResourceGraphAvailable>
    </div>
  </div>
);

const dependenciesContent = (
  <div style={grid12}>
    <div style={span(6)}>
      <EntityDependsOnComponentsCard />
    </div>
    <div style={span(6)}>
      <EntityDependsOnResourcesCard />
    </div>
  </div>
);

const serviceEntityPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      {overviewContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/ci-cd" title={tabLabel(<RocketLaunch />, 'CI/CD')}>
      {cicdContent}
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/kubernetes"
      title={tabLabel(<Cloud />, 'Kubernetes')}
      if={isKubernetesAvailable}
    >
      {kubernetesContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/kro" title={tabLabel(<AccountTree />, 'Kro Details')} if={isKroAvailable}>
      {kroDetailsContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/api" title={tabLabel(<Api />, 'API')}>
      <div style={grid12}>
        <div style={span(6)}>
          <EntityProvidedApisCard />
        </div>
        <div style={span(6)}>
          <EntityConsumedApisCard />
        </div>
      </div>
    </EntityLayout.Route>
    <EntityLayout.Route path="/dependencies" title={tabLabel(<Hub />, 'Dependencies')}>
      {dependenciesContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/docs" title={tabLabel(<Description />, 'Docs')}>
      {techdocsContent}
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/apache-spark"
      title={tabLabel(<Bolt />, 'Apache Spark')}
      if={isApacheSparkAvailable}
    >
      <EntityApacheSparkContent />
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/terraform"
      title={tabLabel(<Storage />, 'Terraform')}
      if={isTerraformAvailable}
    >
      <EntityTerraformContent />
    </EntityLayout.Route>
  </EntityLayout>
);

const websiteEntityPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      {overviewContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/ci-cd" title={tabLabel(<RocketLaunch />, 'CI/CD')}>
      {cicdContent}
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/kubernetes"
      title={tabLabel(<Cloud />, 'Kubernetes')}
      if={isKubernetesAvailable}
    >
      {kubernetesContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/kro" title={tabLabel(<AccountTree />, 'Kro Details')} if={isKroAvailable}>
      {kroDetailsContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/dependencies" title={tabLabel(<Hub />, 'Dependencies')}>
      {dependenciesContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/docs" title={tabLabel(<Description />, 'Docs')}>
      {techdocsContent}
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/apache-spark"
      title={tabLabel(<Bolt />, 'Apache Spark')}
      if={isApacheSparkAvailable}
    >
      <EntityApacheSparkContent />
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/terraform"
      title={tabLabel(<Storage />, 'Terraform')}
      if={isTerraformAvailable}
    >
      <EntityTerraformContent />
    </EntityLayout.Route>
  </EntityLayout>
);

const resourceGroupPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      <div style={grid12}>
        {entityWarningContent}
        <div style={span(6)}>
          <EntityAboutCard />
        </div>
        <div style={span(6)}>
          <EntityCatalogGraphCard height={400} />
        </div>
        <div style={span(4)}>
          <EntityLinksCard />
        </div>
        <div style={span(8)}>
          <IfKroOverviewAvailable>
            <KroOverviewCard />
          </IfKroOverviewAvailable>
        </div>
      </div>
    </EntityLayout.Route>
    <EntityLayout.Route path="/kro" title={tabLabel(<AccountTree />, 'Kro Details')} if={isKroAvailable}>
      {kroDetailsContent}
    </EntityLayout.Route>
    <EntityLayout.Route
      path="/kubernetes"
      title={tabLabel(<Cloud />, 'Kubernetes')}
      if={isKubernetesAvailable}
    >
      <EntityKubernetesContent />
    </EntityLayout.Route>
    <EntityLayout.Route path="/dependencies" title={tabLabel(<Hub />, 'Dependencies')}>
      {dependenciesContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/docs" title={tabLabel(<Description />, 'Docs')}>
      {techdocsContent}
    </EntityLayout.Route>
  </EntityLayout>
);

const defaultEntityPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      {overviewContent}
    </EntityLayout.Route>
    <EntityLayout.Route path="/docs" title={tabLabel(<Description />, 'Docs')}>
      {techdocsContent}
    </EntityLayout.Route>
  </EntityLayout>
);

const componentPage = (
  <EntitySwitch>
    <EntitySwitch.Case if={isComponentType('service')}>
      {serviceEntityPage}
    </EntitySwitch.Case>
    <EntitySwitch.Case if={isComponentType('website')}>
      {websiteEntityPage}
    </EntitySwitch.Case>
    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>
  </EntitySwitch>
);

const apiPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      <div style={grid12}>
        {entityWarningContent}
        <div style={span(6)}>
          <EntityAboutCard />
        </div>
        <div style={span(6)}>
          <EntityCatalogGraphCard height={400} />
        </div>
        <div style={span(4)}>
          <EntityLinksCard />
        </div>
        <div style={span(6)}>
          <EntityProvidingComponentsCard />
        </div>
        <div style={span(6)}>
          <EntityConsumingComponentsCard />
        </div>
      </div>
    </EntityLayout.Route>
    <EntityLayout.Route path="/definition" title={tabLabel(<Schema />, 'Definition')}>
      <div style={grid12}>
        <div style={span(12)}>
          <EntityApiDefinitionCard />
        </div>
      </div>
    </EntityLayout.Route>
  </EntityLayout>
);

const userPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      <div style={grid12}>
        {entityWarningContent}
        <div style={span(6)}>
          <EntityUserProfileCard />
        </div>
        <div style={span(6)}>
          <EntityOwnershipCard />
        </div>
      </div>
    </EntityLayout.Route>
  </EntityLayout>
);

const groupPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      <div style={grid12}>
        {entityWarningContent}
        <div style={span(6)}>
          <EntityGroupProfileCard />
        </div>
        <div style={span(6)}>
          <EntityOwnershipCard />
        </div>
        <div style={span(6)}>
          <EntityMembersListCard />
        </div>
        <div style={span(6)}>
          <EntityLinksCard />
        </div>
      </div>
    </EntityLayout.Route>
  </EntityLayout>
);

const systemPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      <div style={grid12}>
        {entityWarningContent}
        <div style={span(6)}>
          <EntityAboutCard />
        </div>
        <div style={span(6)}>
          <EntityCatalogGraphCard height={400} />
        </div>
        <div style={span(4)}>
          <EntityLinksCard />
        </div>
        <div style={span(8)}>
          <EntityHasComponentsCard />
        </div>
        <div style={span(6)}>
          <EntityHasApisCard />
        </div>
        <div style={span(6)}>
          <EntityHasResourcesCard />
        </div>
      </div>
    </EntityLayout.Route>
    <EntityLayout.Route path="/diagram" title={tabLabel(<GridView />, 'Diagram')}>
      <EntityCatalogGraphCard
        direction={Direction.TOP_BOTTOM}
        title="System Diagram"
        height={700}
        relations={[
          RELATION_PART_OF,
          RELATION_HAS_PART,
          RELATION_API_CONSUMED_BY,
          RELATION_API_PROVIDED_BY,
          RELATION_CONSUMES_API,
          RELATION_PROVIDES_API,
          RELATION_DEPENDENCY_OF,
          RELATION_DEPENDS_ON,
        ]}
        unidirectional={false}
      />
    </EntityLayout.Route>
  </EntityLayout>
);

const domainPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title={tabLabel(<Dashboard />, 'Overview')}>
      <div style={grid12}>
        {entityWarningContent}
        <div style={span(6)}>
          <EntityAboutCard />
        </div>
        <div style={span(6)}>
          <EntityCatalogGraphCard height={400} />
        </div>
        <div style={span(6)}>
          <EntityHasSystemsCard />
        </div>
      </div>
    </EntityLayout.Route>
  </EntityLayout>
);

export const entityPage = (
  <EntitySwitch>
    <EntitySwitch.Case if={isKind('component')} children={componentPage} />
    <EntitySwitch.Case if={isKind('api')} children={apiPage} />
    <EntitySwitch.Case if={isKind('group')} children={groupPage} />
    <EntitySwitch.Case if={isKind('user')} children={userPage} />
    <EntitySwitch.Case if={isKind('system')} children={systemPage} />
    <EntitySwitch.Case if={isKind('domain')} children={domainPage} />
    <EntitySwitch.Case
      if={isKind('resourcegroup')}
      children={resourceGroupPage}
    />
    <EntitySwitch.Case>{defaultEntityPage}</EntitySwitch.Case>
  </EntitySwitch>
);
