import React, { useState } from 'react';
import {
  createScaffolderLayout,
  LayoutTemplate,
} from '@backstage/plugin-scaffolder-react';
import { scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { Button, Grid } from '@material-ui/core';
import {
  ObjectFieldTemplatePropertyType,
  ObjectFieldTemplateProps,
  StrictRJSFSchema,
  FormContextType,
  RJSFSchema,
  titleId,
  getTemplate,
  getUiOptions,
} from '@rjsf/utils';

const TwoColumn: LayoutTemplate = ({ properties, description, title }) => {
  const mid = Math.ceil(properties.length / 2);

  return (
    <>
      <h1>{title}</h1>
      <h2>In two column layout!!</h2>
      <Grid container justifyContent="flex-end">
        {properties.slice(0, mid).map(prop => (
          <Grid item xs={6} key={prop.content.key}>
            {prop.content}
          </Grid>
        ))}
        {properties.slice(mid).map(prop => (
          <Grid item xs={6} key={prop.content.key}>
            {prop.content}
          </Grid>
        ))}
      </Grid>
      {description}
    </>
  );
};

function CollapsableFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ObjectFieldTemplateProps<T, S, F>) {
  const {
    registry,
    properties,
    title,
    description,
    uiSchema,
    required,
    schema,
    idSchema,
  } = props;
  const [collapsed, setCollapsed] = useState(false);

  const out = (
    <div>
      {title} hiii{description}
      <Button
        variant="outlined"
        size="small"
        style={{
          display: 'inline-block',
          float: 'right',
          fontSize: 'large',
        }}
        onClick={() => setCollapsed(!collapsed)}
      >
        Collapse
      </Button>
      <div>
        {collapsed
          ? null
          : properties.map(prop => (
              <div key={prop.content.key}>
                <Button
                  variant="outlined"
                  size="small"
                  style={{
                    display: 'inline-block',
                    float: 'right',
                    fontSize: 'large',
                  }}
                  onClick={() => setCollapsed(!collapsed)}
                >
                  Collapse
                </Button>
                {prop.content}
              </div>
            ))}
      </div>
    </div>
  );
  return out;
  // return (
  //   <>
  //     {hidden ? null : (
  //       <div className={classNames}>
  //         <>
  //           {!isThisTheTopmostElement() && (
  //             <Button
  //               variant="outlined"
  //               size="small"
  //               style={{
  //                 display: 'inline-block',
  //                 float: 'right',
  //                 fontSize: 'large',
  //               }}
  //               onClick={() => setCollapsed(!collapsed)}
  //             >
  //               {collapsed ? (
  //                 <>
  //                   +
  //                   {(errors?.props?.errors ?? []).length ? (
  //                     <span style={{ fontSize: 'small' }}>
  //                       {' '}
  //                       (Contains errors)
  //                     </span>
  //                   ) : null}
  //                 </>
  //               ) : (
  //                 '-'
  //               )}
  //             </Button>
  //           )}
  //           {get(schema, 'type', undefined) !== 'object' &&
  //           get(schema, 'type', undefined) !== 'array' ? (
  //             <>{label ? `${label}${required ? ' *required' : ''}` : null}</>
  //           ) : (
  //             <fieldset className="field field-array field-array-of-object">
  //               {label ? (
  //                 <legend>{`${label}${required ? '*required' : ''}`}</legend>
  //               ) : null}
  //             </fieldset>
  //           )}
  //           {!collapsed && (
  //             <>
  //               {get(schema, 'type', undefined) !== 'object' &&
  //               get(schema, 'type', undefined) !== 'array'
  //                 ? description
  //                 : null}
  //               {children}
  //               {errors}
  //               {help}
  //             </>
  //           )}
  //         </>
  //       </div>
  //     )}
  //   </>
  // );
}

export const CollapsableField = scaffolderPlugin.provide(
  createScaffolderLayout({
    name: 'CollapsableField',
    component: CollapsableFieldTemplate,
  }),
);
