import { 
  memo,
  useMemo,
  useReducer
} from 'react';

import { 
  type RddPrivateStateContextValue,
  type RddPublicStateContextValue,
  RddPrivateStateContext,
  RddPublicStateContext,
  reducer, 
  getInitialState
} from '../../store';

import {
  RddDragEventsContext,
  useRddDragEvents,
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
  const [dispatchRDDDragEvent, registerRDDDragEventsHandler] = useRddDragEvents();
  
  console.log(id, state, dispatch, dispatchRDDDragEvent);
  const {
    draggable: {id: activeId},
    droppable: {},
    draggables
  } = state;

  console.log(activeId);

  const privateStateContextValue = useMemo(() => {
    const value: RddPrivateStateContextValue = {
      draggables
    };
    return value;
  }, [
  ]);

  const publicStateContextValue = useMemo(() => {
    const value: RddPublicStateContextValue = {
      
    };
    return value;
  }, [
  ]);

  return (
    <RddDragEventsContext.Provider value={registerRDDDragEventsHandler}>
      <RddPrivateStateContext.Provider value={privateStateContextValue}>
        <RddPublicStateContext.Provider value={publicStateContextValue}>
          { children }
        </RddPublicStateContext.Provider>
      </RddPrivateStateContext.Provider>
    </RddDragEventsContext.Provider>
  )
});

export {
  type ReactDragDropProps,
  ReactDragDrop
}