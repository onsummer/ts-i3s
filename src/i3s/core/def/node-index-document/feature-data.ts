import FeatureAttribute from "../common/feature-attribute"
import Geometry from "./geometry"

export default class FeatureData {
  id: number
  position: number[]
  pivotOffset: number[]
  mbb: number[]
  layer: string
  attributes: FeatureAttribute
  geometries: Geometry
}