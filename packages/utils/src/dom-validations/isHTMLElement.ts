import { getWindow } from '../dom';
import { isWindow } from './isWindow';

function isHTMLElement(node: Node | Window): node is HTMLElement {
  if (isWindow(node)) {
    return false;
  }

  return node instanceof getWindow(node).HTMLElement;
}

export {
  isHTMLElement
}
