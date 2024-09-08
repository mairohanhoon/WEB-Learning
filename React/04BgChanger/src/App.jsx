import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive")


  return (
    <>
      <div className='w-full h-screen ' style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl bg-red-600'
            onClick={() => setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl bg-green-600'
            onClick={() => setColor("green")}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl bg-blue-600'
            onClick={() => setColor("blue")}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-xl bg-white-600'
            onClick={() => setColor("white")}>White</button>
        </div>
        </div>
      </div>    
    </>
  )
}

export default App
