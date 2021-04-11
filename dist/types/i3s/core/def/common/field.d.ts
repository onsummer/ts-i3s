import Domain from "./domain";
export default class Field {
    name: string;
    /**
     * 可选项：
     * `"esriFieldTypeDate"` | `"esriFieldTypeSingle"` |
     * `"esriFieldTypeDouble"` | `"esriFieldTypeGUID"` |
     * `"esriFieldTypeGlobalID"` | `"esriFieldTypeInteger"` |
     * `"esriFieldTypeOID"` | `"esriFieldTypeSmallInteger"` |
     * `"esriFieldTypeString"`
     */
    type: string;
    alias?: string;
    domain?: Domain;
}
