/**
 * @example
 * ``` json
 * {
 *   "property": "vertexCount",
 *   "type": "UInt32"
 * }
 * ```
 */
export default class HeaderAttribute {
    property: string;
    /**
     * 可选值：`"UInt8"` | `"UInt16"` | `"UInt32"` | `"UInt64"` | `"Int16"` | `"Int32"` | `"Int64"` | `"Float32"` | `Float64""`
     */
    type: string;
}
