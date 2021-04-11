import DrawingInfo from "../common/drawing-info"
import ElevationInfo from "../common/elevation-info"
import HeightModelInfo from "../common/height-model-info"
import PopupInfo from "../common/popup-info"
import ServiceUpdateTimeStamp from "../common/service-update-time-stamp"
import SpatialReference from "../common/spatial-reference"
import { default as PointStore } from "./point-store"
import CachedDrawingInfo from "../scene-layer/cached-drawing-info"
import Field from "../common/field"
import AttributeStorageInfo from "../common/attribute-storage-info"
import StatisticsInfo from "../common/statistics-info"
import NodePageDefinition from "../common/node-page-definition"
import GeometryDefinition from "../common/geometry-definition"

export default class PointSceneLayer {
  id: number
  href?: string
  readonly layerType: string = "Point"
  spatialReference?: SpatialReference
  heightModelInfo?: HeightModelInfo
  version?: string
  name?: string
  serviceUpdateTimeStamp?: ServiceUpdateTimeStamp
  alias?: string
  description?: string
  copyrightText?: string
  /**
   * 值只能是 View, Query, Edit
   */
  capabilities: string[]
  zFactor: number
  cachedDrawingInfo?: CachedDrawingInfo
  drawingInfo?: DrawingInfo
  elevationInfo?: ElevationInfo
  popupInfo?: PopupInfo
  disablePopup?: boolean = false
  store: PointStore
  fields?: Field[]
  attributeStorageInfo?: AttributeStorageInfo[]
  statisticsInfo?: StatisticsInfo[]
  pointNodePages?: NodePageDefinition
  geometryDefinition: GeometryDefinition
}

export {
  PointStore
}