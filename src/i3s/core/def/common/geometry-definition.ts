import GeometryBuffer from "./geometry-buffer"

export default class GeometryDefinition {
  readonly topology: string = "triangle"
  geometryBuffers: GeometryBuffer[]
}