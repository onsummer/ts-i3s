import DefaultGeometrySchema from "./default-geometry-schema";
import MaterialDefinition from "./material-definition";
import Texture from "./texture";
export default class Store {
    id?: string;
    profile: string;
    /**
     * 允许值为：`"3dNodeIndexDocument"` | `"SharedResource"` | `"featureData"` | `"Geometry"` | `"Texture"` | `"Attributes"`
     */
    resourcePattern?: string[];
    rootNode?: string;
    version: string;
    extent?: number[];
    indexCRS?: string;
    vertexCRS?: string;
    /**
     * 允许值为：`"east-north-up"` | `"earth-centered"` | `"vertex-reference-frame"`
     */
    normalReferenceFrame?: string;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    nidEncoding?: string;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    featureEncoding?: string;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    geometryEncoding?: string;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    attributeEncoding?: string;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    textureEncoding?: string[];
    /**
     * 允许值为：`"MeshPyramid"` | `"AutoThinning"` | `"Clustering"` | `"Generalizing"`
     */
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    lodType?: string;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    lodModel?: string;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    indexingScheme?: string;
    defaultGeometrySchema: DefaultGeometrySchema;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    defaultTextureDefinition?: Texture;
    /**
     * @deprecated 在 1.7 中是过时的，请尽量减少此 api 的使用
     */
    defaultMaterialDefinition?: MaterialDefinition;
}
