import { createContext } from 'react';
import {
  Draggable
} from './types';

import { 
  RddId
} from '../types';

interface RddPrivateStateContextValue {
   draggables: Map<RddId, Draggable | undefined>;
}

const RddPrivateStateContext = createContext<RddPrivateStateContextValue>({
  draggables: new Map()
});

interface RddPublicStateContextValue {

}

const RddPublicStateContext = createContext<RddPublicStateContextValue>({
});

export {
  type RddPrivateStateContextValue,
  type RddPublicStateContextValue,
  RddPrivateStateContext,
  RddPublicStateContext
}
