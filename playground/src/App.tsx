import { useState } from 'react'
import { ReactDragDrop } from '@react-drag-drop/core'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Playground</h1>
      <ReactDragDrop />
    </>
  )
}

export default App
