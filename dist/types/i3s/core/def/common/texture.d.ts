/**
 * @example
 * ``` json
 * {
 *   "encoding": [ "image/jpeg", "image/vnd-ms.dds"  ],
 *   "wrap": [ "none", "none" ],
 *   "atlas": false,
 *   "uvSet": "uv0",
 *   "channels": "rgb"
 * }
 * ```
 */
export default class Texture {
    encoding?: string[];
    /**
     * 可选项：`"none"` | `"repeat"` | `"mirror"`
     */
    wrap?: string[];
    atlas?: boolean;
    uvSet?: string;
    /**
     * 可选项：`"rgb"` | `"rgba"`
     */
    channels?: string;
}
