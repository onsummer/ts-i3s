/**
 * @example
 * 对于 `/layers/0/nodes/{resource_id}/textures/0_0_1`
 * ``` json
 * {
 *   "name": "0_0_1",
 *   "format": "dds"
 * }
 * ```
 */
export default class TextureSetDefinitionFormat {
    name: string;
    /**
     * 允许值：`"jpg"` | `"png"` | `"dds"` | `"ktx-etc2"`
     */
    format: string;
}
