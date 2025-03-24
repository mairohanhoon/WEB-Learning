import { useState } from 'react'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import './App.css'
import { useWeather } from './context/Context.jsx'
import { useEffect } from 'react'
function App() {
  const weather = useWeather()
  console.log(weather);
  useEffect(()=>{
    weather.fetchCurrentUserLoactionData();
  }, [])
  return (
    <div className=' flex flex-col items-center bg-slate-100 h-screen  justify-center'>
      <h1 className='text-center font-extrabold text-4xl m-2 p-2 '>Wheather Forecast</h1>
      <div>
      <Input/>
      <Button value="Search" 
        onClick = {weather.fetchData}
        />
      </div>
      <Card/>
      <Button value="Refresh"/>
    </div>
  )
}

export default App
