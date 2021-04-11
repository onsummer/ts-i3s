import IDrawingInfoRenderer from "src/i3s/interfaces/IDrawingInfo";
export default class DrawingInfo {
    /**
     * @see https://developers.arcgis.com/web-scene-specification/objects/renderer/
     */
    renderer: IDrawingInfoRenderer;
    scaleSymbols: boolean;
}
