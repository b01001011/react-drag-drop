import { useCallback, useState } from 'react';
import { 
  RddDragEvent, 
  RddDragEventsHandler,
  RddRegisterHandler 
} from '../types';

const useRddDragEvents = () => {
  const [listeners] = useState(() => {
    return new Set<RddDragEventsHandler>();
  });

  const dispatch = useCallback(({type, event}: RddDragEvent) => {
    listeners.forEach((listener: RddDragEventsHandler) => {
      return listener[type]?.(event)
    });
  }, [listeners]);

  const registerHandler: RddRegisterHandler = useCallback((listener: RddDragEventsHandler) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [listeners]);

  return [dispatch, registerHandler] as const;
}

export { 
  useRddDragEvents 
}