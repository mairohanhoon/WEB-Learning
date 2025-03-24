import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import { useContext } from 'react'
import { CounterContext } from './context/Counter.jsx'

function App() {
  const counterState = useContext(CounterContext);
  console.log(counterState);
  
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center font-semibold text-2xl m-2'>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default App
