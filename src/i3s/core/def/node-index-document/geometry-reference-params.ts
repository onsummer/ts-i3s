import GeometryParams from "./geometry-params-base"

export default class GeometryReferenceParams extends GeometryParams {
  href: string
  type?: string
  faceRange?: number[]
  lodGeometry?: boolean
}