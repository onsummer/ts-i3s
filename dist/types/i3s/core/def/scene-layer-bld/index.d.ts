import HeightModelInfo from "../common/height-model-info";
import SpatialReference from "../common/spatial-reference";
import Filter from "./filter";
import FullExtent from "./full-extent";
import SubLayer from "./sub-layer";
export default class BuildingSceneLayer {
    id: number;
    name: string;
    version: string;
    readonly layerType: string;
    alias?: string;
    description?: string;
    copyrightText?: string;
    fullExtent: FullExtent;
    spatialReference: SpatialReference;
    heightModelInfo?: HeightModelInfo;
    sublayers: SubLayer[];
    filters?: Filter[];
    activeFilterID?: string;
    /**
     * @example
     * "statistics/summary"，指向一个json
     */
    statisticsHRef?: string;
}
