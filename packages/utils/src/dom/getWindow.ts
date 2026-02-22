import {
  isNode,
  isWindow
} from '../dom-validations';

export function getWindow(target: EventTarget | null): typeof window {
  if (target == null) {
    return window;
  }

  if (isWindow(target)) {
    return target;
  }

  if (isNode(target)) {
    return target.ownerDocument?.defaultView ?? window;
  } 
    
  return window;
}
