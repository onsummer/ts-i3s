export default class GeometryBuffer {
    offset?: number;
    position?: GeometryPosition;
    normal?: GeometryNormal;
    uv0?: GeometryUV;
    color?: GeometryColor;
    uvRegion?: GeometryUVRegion;
    featureId?: GeometryFeatureID;
    faceRange?: GeometryFaceRange;
    /**
     * 若存在 `compressedAttributes` 则其他属性不能存在
     */
    compressedAttributes?: CompressedAttributes;
}
export declare class GeometryPosition {
    readonly type: string;
    readonly component: number;
    readonly encoding?: string;
    readonly binding?: string;
}
export declare class GeometryNormal {
    readonly type: string;
    readonly component: number;
    readonly encoding?: string;
    readonly binding?: string;
}
export declare class GeometryUV {
    readonly type: string;
    readonly component: number;
    readonly encoding?: string;
    readonly binding?: string;
}
export declare class GeometryColor {
    readonly type: string;
    component: number;
    readonly encoding?: string;
    readonly binding?: string;
}
export declare class GeometryUVRegion {
    readonly type: string;
    readonly component: number;
    readonly encoding?: string;
    /**
     * 可选值：`"per-vertex"` | `"per-uvregion"`
     */
    binding?: string;
}
export declare class GeometryFeatureID {
    /**
     * 可选值：`"UInt16"` | `"UInt32"` | `"UInt64"`
     */
    type: string;
    readonly component: number;
    readonly encoding?: string;
    readonly binding?: string;
}
export declare class GeometryFaceRange {
    readonly type: string;
    component: number;
    readonly encoding?: string;
    readonly binding?: string;
}
export declare class CompressedAttributes {
    readonly encoding?: string;
    /**
     * 元素可选值：`"position"` | `"normal"` | `"uv0"` | `"color"` | `"uv-region"` | `"feature-index"`
     */
    attributes?: string[];
}
