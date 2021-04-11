export default class FilterMode {
  /**
   * wireFrame | solid
   */
  type: string 
  edges?: {
    /**
     * solid | sketch
     * @see https://developers.arcgis.com/web-scene-specification/objects/solidEdges/
     * @see https://developers.arcgis.com/web-scene-specification/objects/sketchEdges/
     */
    type: string
    color: number[]
    size: number
    transparency: number
    extensionLength: number
  }
}

