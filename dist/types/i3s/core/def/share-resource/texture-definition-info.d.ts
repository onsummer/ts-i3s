import Image from "./image";
export default class TextureDefinitionInfo {
    encoding: string[];
    wrap?: string[];
    atlas?: boolean;
    uvSet?: string;
    channels?: string;
    images?: Image[];
}
