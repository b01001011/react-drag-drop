import { getWindow } from '../dom/getWindow'

function isDocument(node: Node): node is Document {
  const {Document} = getWindow(node);
  return node instanceof Document;
}

export {
  isDocument
}
