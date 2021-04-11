import MaterialTexture from "./material-texture"

export default class PbrMetallicRoughness {
  baseColorFactor?: number[] = [1,1,1,1]
  baseColorTexture?: MaterialTexture
  metallicFactor?: number = 1
  roughnessFactor?: number = 1
  metallicRoughnessTexture?: MaterialTexture
}