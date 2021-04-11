
/**
 * @example
 * ```json
 * {
 *   "id": 100,
 *   "layerType": "group",
 *   "name": "architectural",
 *   "alias": "Architecture",
 *   "modelName": "Architectural",
 *   "visibility": true,
 *   "sublayers": [
 *     {
 *       "id": 0,
 *       "layerType": "3DObject",
 *       "name": "stairs",
 *       "alias": "Escaliers",
 *       "visibility": true
 *     },
 *     {
 *       "id": 1,
 *       "layerType": "3DObject",
 *       "name": "roof",
 *       "alias": "Toitures",
 *       "visibility": true
 *     }
 *   ]
 * } 
 * ```
 * @example
 * ```json
 * {
 *   "id": 100,
 *   "layerType": "group",
 *   "name": "architectural",
 *   "alias": "Architecture",
 *   "modelName": "Architectural",
 *   "visibility": true,
 *   "sublayers": [
 *     {
 *       "id": 1,
 *       "layerType": "3DObject",
 *       "name": "Casework",
 *       "alias": "Casework",
 *       "modelName": "Casework",
 *       "discipline": "Architectural",
 *       "visibility": true
 *     },
 *     {
 *       "id": 2,
 *       "layerType": "Point",
 *       "name": "LocationPoints",
 *       "alias": "LocationPoints",
 *       "modelName": "LocationPoints",
 *       "discipline": "Architectural",
 *       "visibility": true
 *     }
 *   ]
 * } 
 * ```
 */
class SubLayer {
  id: number
  name: string
  /**
   * 只能是：`"group"`, `"3DObject"`, `"Point"` 其中的一种
   */
  layerType: string
  alias?: string
  /**
   * 只能是：`"Mechanical"`, `"Architectural"`, `"Piping"`, `"Electrical"`, `"Structural"` 其中一种
   */
  discipline?: string 
  /**
   * @see https://github.com/Esri/i3s-spec/blob/master/docs/1.7/subLayerModelName.md
   * BIM 构件的种类，如 Walls、Rooms 等
   */
  modelName?: string
  visibility?: boolean
  sublayers?: SubLayer[]
}

export default SubLayer