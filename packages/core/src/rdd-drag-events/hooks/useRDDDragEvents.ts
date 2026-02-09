import { useCallback, useState } from 'react';
import { 
  RDDDragEvent, 
  RDDDragEventsListener,
  RDDRegisterListener 
} from '../types';

export const useRDDDragEvents = () => {
  const [listeners] = useState(() => {
    return new Set<RDDDragEventsListener>();
  });

  const dispatch = useCallback(({type, event}: RDDDragEvent) => {
    listeners.forEach((listener: RDDDragEventsListener) => {
      return listener[type]?.(event)
    });
  }, [listeners]);

  const registerListener: RDDRegisterListener = useCallback((listener: RDDDragEventsListener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [listeners]);

  return [dispatch, registerListener] as const;
}
