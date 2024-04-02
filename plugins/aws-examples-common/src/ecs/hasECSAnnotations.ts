import { Entity } from "@backstage/catalog-model";
import { hasOneOfEntityAnnotations } from "../lib/hasOneOfEntityAnnotations";
import { AWS_ECS_SERVICE_ARN_ANNOTATION, AWS_ECS_SERVICE_TAGS_ANNOTATION } from "./constants";

export function hasEcsAnnotation(entity: Entity): boolean {
  return hasOneOfEntityAnnotations(entity, [AWS_ECS_SERVICE_ARN_ANNOTATION, AWS_ECS_SERVICE_TAGS_ANNOTATION])
}