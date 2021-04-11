import FilterAuthoringInfo from "./filter-authoring-info"
import FilterBlock from "./filter-block"

export default class Filter {
  id: string
  name: string
  description: string
  isDefaultFilter: boolean
  isVisible: boolean
  filterBlocks: FilterBlock[]
  filterAuthoringInfo: FilterAuthoringInfo
}