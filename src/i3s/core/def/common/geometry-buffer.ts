export default class GeometryBuffer {
  offset?: number
  position?: GeometryPosition
  normal?: GeometryNormal
  uv0?: GeometryUV
  color?: GeometryColor
  uvRegion?: GeometryUVRegion
  featureId?: GeometryFeatureID
  faceRange?: GeometryFaceRange
  /**
   * 若存在 `compressedAttributes` 则其他属性不能存在
   */
  compressedAttributes?: CompressedAttributes
}

export class GeometryPosition {
  readonly type: string = "Float32"
  readonly component: number = 3
  readonly encoding?: string = "none"
  readonly binding?: string = "per-vertex"
}

export class GeometryNormal {
  readonly type: string = "Float32"
  readonly component: number = 3
  readonly encoding?: string = "none"
  readonly binding?: string = "per-vertex"
}

export class GeometryUV {
  readonly type: string = "Float32"
  readonly component: number = 2
  readonly encoding?: string = "none"
  readonly binding?: string = "per-vertex"
}

export class GeometryColor {
  readonly type: string = "UInt8"
  component: number
  readonly encoding?: string = "normalized"
  readonly binding?: string = "per-vertex"
}

export class GeometryUVRegion {
  readonly type: string = "UInt16"
  readonly component: number = 4
  readonly encoding?: string = "normalized"

  /**
   * 可选值：`"per-vertex"` | `"per-uvregion"`
   */
  binding?: string
}
export class GeometryFeatureID {
  /**
   * 可选值：`"UInt16"` | `"UInt32"` | `"UInt64"`
   */
  type: string
  readonly component: number = 1
  readonly encoding?: string = "none"
  readonly binding?: string = "per-feature"
}

export class GeometryFaceRange {
  readonly type: string = "UInt32"
  component: number
  readonly encoding?: string = "none"
  readonly binding?: string = "per-feature"
}

export class CompressedAttributes {
  readonly encoding?: string = "draco"
  /**
   * 元素可选值：`"position"` | `"normal"` | `"uv0"` | `"color"` | `"uv-region"` | `"feature-index"`
   */
  attributes?: string[]
}