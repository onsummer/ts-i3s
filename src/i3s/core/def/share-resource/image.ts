/**
 * @example
 * ```json
 * {
 *   "id": "1170940301162943632",
 *   "size": 1024,
 *   "pixelInWorldUnits": 0,
 *   "href": [
 *     "../textures/0_0",
 *     "../textures/0_0_1"
 *   ],
 *   "byteOffset": [
 *     0,
 *     0
 *   ],
 *   "length": [
 *     167267,
 *     699192
 *   ]
 * } 
 * ```
 */
export default class Image {
  id: string
  size?: number
  pixelInWorldUnits?: number
  href?: string[]
  byteOffset?: number[]
  length?: number[]
}