import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = () => {
    if(counter < 20){
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
    }
  }
  const delValue = ()=>{
    if(counter > 0){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button> <br /> <br />
      <button
      onClick={delValue}
      >Remove Value</button>
      <p>Footer : {counter} </p>
    </>
  )
}

export default App
