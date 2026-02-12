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

interface ReactDragDropProps {
  id?: string;
  children?: React.ReactNode;
};

const ReactDragDrop = memo(({
  id, 
  children    
}: ReactDragDropProps) => {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  const [dispatchRDDDragEvent, registerRDDDragEventsListener] = useRDDDragEvents();
  
  console.log(id, state, dispatch, dispatchRDDDragEvent);
  const {
    draggable: {id: activeId},
    droppable: {},
  } = state;

  console.log(activeId);

  return (
    <RDDDragEventsContext.Provider value={registerRDDDragEventsListener}>
      { children }
    </RDDDragEventsContext.Provider>
  )
});

export {
  type ReactDragDropProps,
  ReactDragDrop
}