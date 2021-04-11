import MaterialTexture from "./material-texture";
export default class PbrMetallicRoughness {
    baseColorFactor?: number[];
    baseColorTexture?: MaterialTexture;
    metallicFactor?: number;
    roughnessFactor?: number;
    metallicRoughnessTexture?: MaterialTexture;
}
