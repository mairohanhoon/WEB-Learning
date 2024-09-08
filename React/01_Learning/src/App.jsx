import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-slate-900'>
      <Card/>
    </div>   
    </>
  )
}

export default App
