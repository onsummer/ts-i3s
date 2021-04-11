export default class MaterialParams {
    transparency?: number;
    reflectivity?: number;
    shininess?: number;
    ambient?: number;
    diffuse?: number;
    specular?: number;
    /**
     * 可选项：`"textured"` | `"solid"` | `"untextured"` | `"wireframe"`
     */
    renderMode: string;
    castShadows?: boolean;
    receiveShadows?: boolean;
    cullFace?: string;
    vertexColors?: boolean;
    vertexRegions?: boolean;
    useVertexColorAlpha?: boolean;
}
