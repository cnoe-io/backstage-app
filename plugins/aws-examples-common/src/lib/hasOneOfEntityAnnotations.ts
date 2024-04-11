import { Entity } from "@backstage/catalog-model";

export function hasOneOfEntityAnnotations(entity: Entity, targetAnnotations: string[]): boolean {
  if(entity.metadata.annotations) {
    let annotations = Object.keys(entity.metadata.annotations);

    return annotations.every(v => targetAnnotations.includes(v));
  }

  return false;
}