import { createContext } from 'react';
import {
  RddDraggable
} from './types';

import { 
  RddId,
  RddSyntheticEventListener
} from '../types';

interface RddPrivateStateContextValue {
  activators: RddSyntheticEventListener[];
  draggables: Map<RddId, RddDraggable | undefined>;
}

const RddPrivateStateContext = createContext<RddPrivateStateContextValue>({
  activators: [],
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
