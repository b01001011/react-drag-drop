import { useCallback, useRef } from 'react';
import { RDDID } from '../types';

interface UseDraggableProps {
    id: RDDID;
}

const useDraggable = ({
  id,  
}: UseDraggableProps) => {
  console.log(id);

  const elementRef = useRef<HTMLElement | null>(null);
  const setElementRef = useCallback((
    element: HTMLElement | null
  ) => {
      elementRef.current = element;
  }, []);

  return {
    elementRef, 
    setElementRef
  }
}

export {
  type UseDraggableProps,
  useDraggable
}