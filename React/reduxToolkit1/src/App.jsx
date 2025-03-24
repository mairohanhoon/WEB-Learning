import { useState } from 'react'
import './App.css'
import Counter from './components/Count'
import { useDispatch } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  return (
    <>
      <div className='App'>
          <h1>Hello React Redux</h1>
          
          <h2>Start editing to see some magic happen!</h2>
          <button onClick={e => dispatch({type: 'INCREMENT'})}>Increment</button>
          <Counter />
          <button onClick={e => dispatch({type: 'DECREMENT'})}>Decreament</button>
      </div>
    </>
  )
}

export default App
