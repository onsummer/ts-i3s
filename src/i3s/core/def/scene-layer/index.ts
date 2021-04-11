import AttributeStorageInfo from "../common/attribute-storage-info"
import CachedDrawingInfo from "./cached-drawing-info"
import DrawingInfo from "../common/drawing-info"
import ElevationInfo from "../common/elevation-info"
import Field from "../common/field"
import GeometryDefinition from "../common/geometry-definition"
import HeightModelInfo from "../common/height-model-info"
import MaterialDefinitions from "./material-definitions"
import PopupInfo from "../common/popup-info"
import ServiceUpdateTimeStamp from "../common/service-update-time-stamp"
import SpatialReference from "../common/spatial-reference"
import StatisticsInfo from "../common/statistics-info"
import Store from "../common/store"
import TextureSetDefinition from "./texture-set-definition"
import NodePageDefinition from "../common/node-page-definition"

class SceneLayer {
  id: number
  href?: string
  /**
   * 可选值：`"3DObject"` | `"IntegratedMesh"` 
   */
  layerType: string
  spatialReference?: SpatialReference
  heightModelInfo?: HeightModelInfo
  version: string
  name?: string
  serviceUpdateTimeStamp?: ServiceUpdateTimeStamp
  alias?: string
  description?: string
  copyrightText?: string
  /**
   * 元素可选值：`"View"` | `"Query"` | `"Edit"` 
   */
  capabilities: string[]
  zFactor?: number
  cachedDrawingInfo?: CachedDrawingInfo
  drawingInfo?: DrawingInfo
  elevationInfo?: ElevationInfo
  popupInfo?: PopupInfo
  disablePopup?: boolean
  store: Store
  fields?: Field[]
  attributeStorageInfo?: AttributeStorageInfo[]
  statisticsInfo?: StatisticsInfo[]
  nodePages?: NodePageDefinition
  materialDefinitions?: MaterialDefinitions[]
  textureSetDefinitions?: TextureSetDefinition[]
  geometryDefinitions?: GeometryDefinition[]
}

export default SceneLayer

export {
  AttributeStorageInfo,
  CachedDrawingInfo,
  DrawingInfo,
  ElevationInfo,
  Field,
  GeometryDefinition,
  HeightModelInfo,
  MaterialDefinitions,
  PopupInfo,
  ServiceUpdateTimeStamp,
  SpatialReference,
  StatisticsInfo,
  Store,
  TextureSetDefinition,
  NodePageDefinition,
}