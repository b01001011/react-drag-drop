import { 
  useCallback, 
  useContext,
  useId,
  useLayoutEffect, 
  useRef
} from 'react';

import { 
  useRddSyntheticHandlerProps
} from './useRddSyntheticHandlerProps';

import { RddPrivateStateContext } from '../store';

import { 
  RddId
} from '../types';

interface UseRddDraggableProps {
  id: RddId;
}

const useRddDraggable = ({
  id,  
}: UseRddDraggableProps) => {
  const key = useId();

  const {
    draggables
  } = useContext(RddPrivateStateContext);

  const elementRef = useRef<HTMLElement | null>(null);
  const setElementRef = useCallback(
    (element: HTMLElement | null) => {
      elementRef.current = element;
    },
    []
  );

  const handlerProps = useRddSyntheticHandlerProps(id);
  
  useLayoutEffect(
    () => {
      draggables.set(id, { id, key, elementRef});
      
      return () => {
        const draggable = draggables.get(id);
        if (draggable && draggable.key === key) {
          draggables.delete(id);
        }
      };
    },
    [id, draggables]
  );

  return {
    elementRef, 
    setElementRef,
    handlerProps
  }
}

export {
  type UseRddDraggableProps,
  useRddDraggable
}