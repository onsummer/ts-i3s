import GeometryAttribute from "../common/geometry-attribute"
import VertexAttribute from "../common/vertex-attribute"

export default class VestedGeometryParams {
  type: string
  topology: string
  vertexAttributes: VertexAttribute
  faces: GeometryAttribute
}