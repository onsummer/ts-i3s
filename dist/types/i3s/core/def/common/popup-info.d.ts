import PopupExpressionInfo from "../scene-layer/popup-expression-info";
export default class PopupInfo {
    title?: string;
    description?: string;
    /**
     * @example
     * ``` json
     * {
     *   "expressionInfos": [{
     *     "name": "expr1",
     *     "title": "Population (Expr)",
     *     "expression": "$feature.pop2000",
     *     "returnType": "number"
     *   }, {
     *     "name": "expr2",
     *     "title": "Name (Abbr) (Expr)",
     *     "expression": "$feature.state_name + ' (' + $feature.state_abbr + ')'",
     *     "returnType": "string"
     *   }]
     * }
     * ```
     */
    expressionInfos?: PopupExpressionInfo[];
    /**
     * @see https://developers.arcgis.com/web-scene-specification/objects/fieldInfo/
     * @todo
     */
    fieldInfos?: [];
    /**
     * @see https://developers.arcgis.com/web-scene-specification/objects/mediaInfo/
     * @todo
     */
    mediaInfos?: [];
    /**
     * @see https://developers.arcgis.com/web-scene-specification/objects/popupElement/
     * @todo
     */
    popupElements?: [];
}
