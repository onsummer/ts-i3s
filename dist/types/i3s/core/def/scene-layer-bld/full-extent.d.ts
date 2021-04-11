import SpatialReference from "../common/spatial-reference";
export default class FullExtent {
    spatialReference?: SpatialReference;
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    zmin: number;
    zmax: number;
}
