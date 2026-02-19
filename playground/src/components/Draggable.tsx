import { 
  type FC 
} from 'react'

import { useRddDraggable } from '@react-drag-drop/core'

const Draggable: FC<{}> = () => {
  const { setElementRef, handlerProps } = useRddDraggable({id: 'draggable'});

  return (
    <button
      ref={setElementRef}
      {...handlerProps}
    >
      Draggable
    </button>
  )
}

export { Draggable }
