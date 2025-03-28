import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Home'
import EditPage from './pages/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/edit' element={<EditPage/>}/>
      </Routes>
    </div>
  )
}

export default App
