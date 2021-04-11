import DomainCodedValue from "./domain-coded-value"

/**
 * @example
 * ``` json
 *  {  
 *    "type": "codedValue",  
 *    "name": "Phases",  
 *    "description": "Phases",  
 *    "codedValues": [{      
 *      "name": "Existing",      
 *      "code": 0    
 *    }, {      
 *      "name": "Baby Room Overhaul",      
 *      "code": 1    
 *    }, {      
 *      "name": "Roof Garden",      
 *      "code": 2    
 *    }], 
 *    "mergePolicy": "esriMPTDefaultValue",  
 *    "splitPolicy": "esriSPTDefaultValue"
 *  } 
 * ```
 */
export default class Domain {
  /**
   * 可选值：`"codedValue"` | `"range"` 
   */
  type: string
  name: string
  description?: string
  /**
   * 可选值：`"esriFieldTypeDate"` | `"esriFieldTypeSingle"` | `"esriFieldTypeDouble"` | `"esriFieldTypeInteger"` | `"esriFieldTypeSmallInteger"` | `"esriFieldTypeString"` 
   */
  fieldType?: string
  range?: string
  codedValues?: DomainCodedValue[]
  /**
   * 可选值：`"esriMPTDefaultValue"` | `"esriMPTSumValues"` | `"esriMPTAreaWeighted"` 
   */
  mergePolicy?: string
  /**
   * 可选值：`"esriSPTGeometryRatio"` | `"esriSPTDuplicate"` | `"esriSPTDefaultValue"` 
   */
  splitPolicy?: string
}