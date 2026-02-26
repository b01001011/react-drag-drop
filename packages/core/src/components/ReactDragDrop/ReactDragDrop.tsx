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
  type RddSensorConstructor,
  RddPointerSensor,
  RddSensor
} from '../../sensors';

import {
  RddCoordinates,
  RddId,
  RddNativeEvent,
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
  const activeSensorRef = useRef<RddSensor| null>(null);
  
  const Sensors = [RddPointerSensor];
  
  console.log(id, state, dispatch, dispatchRDDDragEvent);

  const {
    draggable: {id: activeId},
    droppable: {},
    draggables
  } = state;

  const initSensor = useCallback((
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

    const sensor = new Sensor({
      activeDraggableId: activeDraggableIdRef.current,
      activeDraggable,
      nativeEvent,
      onDragAbort: (id: RddId) => {
        const draggable = draggables.get(id);
        if (draggable == null) {
          return;
        }
      },
      onDragCancel: () => {
        activeDraggableIdRef.current = null;
      },
      onDragEnd: () => {
        activeDraggableIdRef.current = null;
      },
      onDragMove: (coordinates: RddCoordinates) => {
        void coordinates;
      },
      onDragPending: (
        id: RddId, 
        coordinates: RddCoordinates, 
        offset?: RddCoordinates | undefined
      ) => {
        const draggable = draggables.get(id);
        if (draggable == null) {
          return;
        }

        void coordinates;
        void offset;
      },
      onDragStart: (coordinates: RddCoordinates) => {
        const id = activeDraggableIdRef.current;
        if (id == null) {
          return;
        }

        const draggable = draggables.get(id);
        if (draggable == null) {
          return;
        }

        void coordinates;
      }
    });

    activeSensorRef.current = sensor;
  }, [draggables]);

  const makeSyntheticEventHandler = useCallback((
    Sensor: RddSensorConstructor
  ): RddSyntheticEventHandler => {
    return (event, activeDraggableId) => {
      const nativeEvent = event.nativeEvent as RddNativeEvent;
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
  }, [draggables, initSensor]);

  const listeners = useRddSyntheticListeners(
    Sensors,
    makeSyntheticEventHandler
  );

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