import { useState } from 'react'
import './App.css'
import Item from './components/Item.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center p-2'>
      <Item name="Mackbook Pro" price={1000}/>
      <Item name="Pendrive" price={200}/>
      <Item name="I Phone" price={800}/>
      <Cart/>
    </div>
  )
}

export default App
