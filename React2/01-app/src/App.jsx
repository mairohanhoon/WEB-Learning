import { useState } from 'react'
import './style.css'
import './App.css'
import Header from './components/Header.jsx'
import TodoItem from './components/TodoItem.jsx'
import Button from './components/Button.jsx'
import CounterComp from './components/CounterComp.jsx'
import Comp_useEffect from './components/Comp_useEffect.jsx'
import Timer from './components/Timer.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setVisible] = useState(true)

  return(
    <div className='flex justify-center items-center h-screen'>
      {/* <div className='w-72 p-2 font-mono bg-gray-100 rounded-lg'>
        <Header title="Todo"/>
        <TodoItem text="Eat" completed={true}/>
        <TodoItem text="Play"/>
        <TodoItem text="Sleep"/>
        <TodoItem text="Study"/>
        <TodoItem text="Sleep Again"/>
        <Button/>
        <CounterComp/>
        {isVisible ? <Comp_useEffect/> : <></>}
        <div className='flex justify-center'>
          <button className="m-2 p-2 font-bold bg-orange-400 rounded-lg" onClick={() => {
            setVisible(!isVisible)
          }}>Toggle</button>
        </div>
      </div> */}
      <Timer/>
    </div>
    )
}

export default App
