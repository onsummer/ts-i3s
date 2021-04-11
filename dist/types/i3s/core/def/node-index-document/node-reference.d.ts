import Obb from "../common/obb";
export default class NodeReference {
    id: string;
    mbs: number[];
    href: string;
    version: string;
    featureCount: number;
    obb: Obb;
}
