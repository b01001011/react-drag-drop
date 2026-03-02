import { getWindow } from '../dom'

function isSVGElement(node: Node): node is SVGElement {
  return node instanceof getWindow(node).SVGElement;
}

export {
  isSVGElement
}
