import { 
  type FC 
} from 'react'

import { useRddDraggable } from '@react-drag-drop/core'

const Draggable: FC<{}> = () => {
  const { setElementRef, listenerProps } = useRddDraggable({id: 'draggable'});

  return (
    <button
      ref={setElementRef}
      {...listenerProps}
    >
      Draggable
    </button>
  )
}

export { Draggable }
