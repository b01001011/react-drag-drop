import { 
  type FC 
} from 'react'

import { useDraggable } from '@react-drag-drop/core'

const Draggable: FC<{}> = () => {
  const { setElementRef } = useDraggable({id: 'draggable'});

  return (
    <button
      ref={setElementRef}
    >
      Draggable
    </button>
  )
}

export { Draggable }
