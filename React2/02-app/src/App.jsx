import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board/>
    </>
  )
}

export default App
