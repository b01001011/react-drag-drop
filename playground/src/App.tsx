import { ReactDragDrop } from '@react-drag-drop/core';
import { Draggable } from './components/Draggable';

import './App.css'

function App() {
  return (
    <>
      <ReactDragDrop>
        <Draggable />
      </ReactDragDrop>
    </>
  )
}

export default App
