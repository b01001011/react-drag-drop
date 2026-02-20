import { useCallback, useState } from 'react';
import { 
  RddDragEvent, 
  RddDragEventsHandler,
  RddRegisterListener 
} from '../types';

const useRddDragEvents = () => {
  const [handlers] = useState(() => {
    return new Set<RddDragEventsHandler>();
  });

  const dispatch = useCallback(({type, event}: RddDragEvent) => {
    handlers.forEach((listener: RddDragEventsHandler) => {
      return listener[type]?.(event)
    });
  }, [handlers]);

  const registerListener: RddRegisterListener = useCallback((handler: RddDragEventsHandler) => {
    handlers.add(handler);
    return () => {
      handlers.delete(handler);
    };
  }, [handlers]);

  return [dispatch, registerListener] as const;
}

export { 
  useRddDragEvents 
}