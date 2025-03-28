import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTodos} from './redux/slice/todo'

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state)
  console.log(state);
  if(state.todo.isLoading){
    return ( 
      <h1>Loading ... </h1>
    )
  }
  return (
    <div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={(e) => dispatch(fetchTodos())}
      >Fetch ToDos</button>
      {
       state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)
      }
    </div>
  )
}

export default App
