import { Entity } from "@backstage/catalog-model";

export function getOneOfEntityAnnotations(entity: Entity, targetAnnotations: string[]): {
  name: string,
  value: string,
} | undefined {
  if(entity.metadata.annotations) {
    let annotations = Object.keys(entity.metadata.annotations);

    let intersection = annotations.filter(value => targetAnnotations.includes(value));

    if(intersection.length == 0) {
      return undefined;
    }

    if(intersection.length > 1) {
      throw new Error(`Entity may only have one of annotations: ${targetAnnotations.join(', ')}`)
    }
  }

  return undefined;
}