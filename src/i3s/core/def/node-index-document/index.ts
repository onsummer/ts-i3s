import Obb from "../common/obb"
import Features from "./features"
import LodSelection from "./lod-selection"
import NodeReference from "./node-reference"
import Resource from "./resource"

class NodeIndexDocument {
  id: string
  level?: number
  version?: string
  mbs?: number[]
  obb?: Obb
  created?: string
  expires?: string
  transform?: number[]
  parentNode?: NodeReference
  children?: NodeReference[]
  neighbors?: NodeReference[]
  sharedResource?: Resource
  featureData?: Resource[]
  geometryData?: Resource[]
  textureData?: Resource[]
  attributeData?: Resource[]
  lodSelection?: LodSelection[]

  /**
   * @deprecated
   */
  features?: Features[]
}

export default NodeIndexDocument

export {
  Features,
  LodSelection,
  NodeReference,
  Resource,
}