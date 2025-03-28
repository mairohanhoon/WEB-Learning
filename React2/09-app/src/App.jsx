import { useState } from 'react'
import './App.css'
import Counter from './components/Count'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={(e) => dispatch({type: 'INCREAMENT'})}
      >
        Increament
      </button>
        <Counter/> 
      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={(e) => dispatch({type: 'DECREAMENT'})}
      >
        Decreament
      </button>
    </div>
  )
}

export default App
