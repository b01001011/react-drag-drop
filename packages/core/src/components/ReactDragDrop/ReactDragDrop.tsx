import {
  RDDDragEventsContext
} from '../../contexts';

import { 
  memo,
  useReducer
} from 'react';
import { reducer, getInitialState } from '../../store';

import {
  useRDDDragEvents
} from '../../rdd-drag-events';

export interface ReactDragDropProps {
  id?: string;
};

export const ReactDragDrop = memo(({
  id    
}: ReactDragDropProps) => {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  const [dispatchRDDDragEvent, registerRDDDragEventsListener] = useRDDDragEvents();
  
  return <RDDDragEventsContext.Provider value={registerRDDDragEventsListener}>
  </RDDDragEventsContext.Provider>
});
