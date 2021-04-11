import FeatureAttribute from "./feature-attribute";
import HeaderAttribute from "./header-attribute";
import VertexAttribute from "./vertex-attribute";
export default class DefaultGeometrySchema {
    geometryType?: string;
    topology: string;
    header: HeaderAttribute[];
    ordering: string[];
    vertexAttributes: VertexAttribute;
    faces?: VertexAttribute;
    featureAttributeOrder: string[];
    featureAttributes: FeatureAttribute;
}
