import Mesh from "./mesh";
import Obb from "../common/obb";
export default class Node {
    index: number;
    parentIndex: number;
    lodThreshold: number;
    obb: Obb;
    children: number[];
    mesh: Mesh;
}
