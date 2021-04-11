export default class AttributeStatistics {
  fieldName: string
  label?: string
  /**
   * @see https://github.com/Esri/i3s-spec/blob/master/docs/1.7/defaultFilterTypes.bld.md
   * 可选值：`"category"` | `"family"` | `"familyType"` | `"bldgLevel"` | `"createdPhase"` | `"demolishedPhase"` | `"discipline"` | `"assemblyCode"` | `"omniClass"` | `"systemClassifications"` | `"systemType"` | `"systemName"` | `"systemClass"` | `"custom"`
   */
  modelName?: string
  min?: number
  max?: number
  /**
   * 数组最大长度：256
   */
  mostFrequentValues?: number[] | string[]
  subLayerIds?: number[]
}