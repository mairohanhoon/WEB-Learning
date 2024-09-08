import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
        // here comes the advantage of using axios we don't have to change the data into json and parse it as it is handled by axios
      })
      .catch((error) => {
        console.log(error)
      })
  }, []) // Added dependency array to run only once on mount

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App



// here we used axios for data call 
// same work can be done form fetch 
// but it give us additional functionalities to work with 