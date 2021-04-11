import GeometryAttribute from "./geometry-attribute"

export default class VertexAttribute {
  position: GeometryAttribute
  normal: GeometryAttribute
  uv0: GeometryAttribute
  color: GeometryAttribute
  region?: GeometryAttribute
}