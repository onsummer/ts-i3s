import MaterialTexture from "./material-texture"
import PbrMetallicRoughness from "./pbr-metallic-roughness"

export default class MaterialDefinitions {
  pbrMetallicRoughness?: PbrMetallicRoughness
  normalTexture?: MaterialTexture
  occlusionTexture?: MaterialTexture
  emissiveTexture?: MaterialTexture
  emissiveFactor?: number[]
  alphaMode?: string
  alphaCutoff?: number
  doubleSided?: boolean
  cullFace?: string
}