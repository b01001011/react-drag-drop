import { 
  memo,
  useCallback,
  useMemo,
  useReducer,
  useRef
} from 'react';

import {
  useRddSyntheticListeners
} from '../../hooks';

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
  RddSensorConstructor,
  RddPointerSensor
} from '../../sensors';

import {
  RddId,
  RddEvent,
  RddSyntheticEventHandler
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

  const Sensors = [RddPointerSensor];
  console.log(id, state, dispatch, dispatchRDDDragEvent);

  const {
    draggable: {id: activeId},
    droppable: {},
    draggables
  } = state;

  const initSensor = useCallback(
    (
      event: React.SyntheticEvent,
      Sensor: RddSensorConstructor
    ) => {
      if (activeDraggableIdRef.current == null) {
        return;
      }

      const activeDraggable = draggables.get(activeDraggableIdRef.current);
      if (activeDraggable == null) {
        return;
      }

      const nativeEvent = event.nativeEvent;
      
      void nativeEvent;
      void Sensor;
    },
    [draggables]
  );

  const makeSyntheticEventHandler = useCallback(
    (
      Sensor: RddSensorConstructor
    ): RddSyntheticEventHandler => {
      return (event, activeDraggableId) => {
        const nativeEvent = event.nativeEvent as RddEvent;
        const activeDraggable = draggables.get(activeDraggableId);

        if (
          activeDraggableIdRef.current != null ||
          activeDraggable == null ||
          nativeEvent.isConsumed ||
          nativeEvent.defaultPrevented
        ) {
          return;
        }

        nativeEvent.isConsumed = true;

        activeDraggableIdRef.current = activeDraggableId;
        initSensor(event, Sensor);
      };
    },
    [draggables, initSensor]
  );

  const listeners = useRddSyntheticListeners(
    Sensors,
    makeSyntheticEventHandler
  );

  console.log(activeId);

  const privateStateContextValue = useMemo(() => {
    const value: RddPrivateStateContextValue = {
      listeners,
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