/**
 * @see https://developers.arcgis.com/web-scene-specification/objects/renderer/
 */
export default interface IDrawingInfoRenderer {

}

/**
 * @see https://developers.arcgis.com/web-scene-specification/objects/classBreaksRenderer/
 */
export interface IClassBreaksRenderer extends IDrawingInfoRenderer {

}

/**
 * @see https://developers.arcgis.com/web-scene-specification/objects/pointCloudRenderers/
 */
export interface IPointCloudRenderer extends IDrawingInfoRenderer {
  
}

/**
 * @see https://developers.arcgis.com/web-scene-specification/objects/rasterRenderers/
 */
export interface IRasterRenderer extends IDrawingInfoRenderer {

}

/**
 * @see https://developers.arcgis.com/web-scene-specification/objects/simpleRenderer/
 */
export interface ISimpleRenderer extends IDrawingInfoRenderer {

}

/**
 * @see https://developers.arcgis.com/web-scene-specification/objects/uniqueValueFromStyleRenderer/
 */
export interface IUniqueValueFromStyleRenderer extends IDrawingInfoRenderer {

}

/**
 * @see https://developers.arcgis.com/web-scene-specification/objects/uniqueValueRenderer/
 */
export interface IUniqueValueRenderer extends IDrawingInfoRenderer {

}