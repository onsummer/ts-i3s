import DefaultGeometrySchema from "../common/default-geometry-schema";
import MaterialDefinition from "../common/material-definition";
import Texture from "../common/texture";
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
    nidEncoding?: string;
    featureEncoding?: string;
    geometryEncoding?: string;
    attributeEncoding?: string;
    textureEncoding?: string[];
    /**
     * 允许值为：`"MeshPyramid"` | `"AutoThinning"` | `"Clustering"` | `"Generalizing"`
     */
    lodType?: string;
    indexingScheme?: string;
    defaultGeometrySchema: DefaultGeometrySchema;
    defaultTextureDefinition?: Texture;
    defaultMaterialDefinition?: MaterialDefinition;
}
