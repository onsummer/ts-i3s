/**
 * @example
 * ``` json
 * {
 *   "heightModel": "gravity_related_height",
 *   "vertCRS": "NAVD88_height_(ftUS)",
 *   "heightUnit": "us-foot"
 * }
 * ```
 */
export default class HeightModelInfo {
    /**
     * 可选：`"gravity_related_height"` | `"ellipsoidal"`
     */
    heightModel?: string;
    vertCRS?: string;
    /**
     * 可选：
     * `"meter"` | `"us-foot"` | `"foot"` | `"clarke-foot"` |
     * `"clarke-yard"` | `"clarke-link"` | `"sears-yard"` | `"sears-foot"` |
     * `"sears-chain"` | `"benoit-1895-b-chain"` | `"indian-yard"` | `"indian-1937-yard"` |
     * `"gold-coast-foot"` | `"sears-1922-truncated-chain"` |  `"us-inch"` |  `"us-mile"` |
     * `"us-yard"` |  `"millimeter"` |  `"decimeter"` |  `"centimeter"` |  `"kilometer"`
     */
    heightUnit?: string;
}
