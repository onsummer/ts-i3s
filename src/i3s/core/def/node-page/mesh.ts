import MeshAttribute from "./mesh-attribute"
import MeshGeometry from "./mesh-geometry"
import MeshMaterial from "./mesh-material"

export default class Mesh {
  material: MeshMaterial
  geometry: MeshGeometry
  attribute: MeshAttribute
}