import { 
  memo,
  useMemo,
  useReducer,
  useRef
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

import {
  RddPointerSensor
} from '../../sensors';

import {
  RddId,
  RddSyntheticEventListener
} from '../../types';

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
  
  const activeDraggableIdRef = useRef<RddId | null>(null);
  // const activeDraggableElementRef
  
  const sensors = [RddPointerSensor];
  console.log(id, state, dispatch, dispatchRDDDragEvent, sensors, activeDraggableIdRef);

  const {
    draggable: {id: activeId},
    droppable: {},
    draggables
  } = state;

  const activators: RddSyntheticEventListener[] = [];

  console.log(activeId);

  const privateStateContextValue = useMemo(() => {
    const value: RddPrivateStateContextValue = {
      activators,
      draggables
    };
    return value;
  }, []);

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