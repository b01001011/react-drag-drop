import {
  isDocument,
  isHTMLElement,
  isNode,
  isSVGElement,
  isWindow
} from '../dom-validations'

function getOwnerDocument(target: EventTarget | null): Document {
  if (target == null) {
    return document;
  }

  if (isWindow(target)) {
    return target.document;
  }

  if (isNode(target)) {
    if (isDocument(target)) {
      return target;
    }

    if (isHTMLElement(target) || isSVGElement(target)) {
      return target.ownerDocument;
    }
  }

  return document;
}

export {
  getOwnerDocument
}