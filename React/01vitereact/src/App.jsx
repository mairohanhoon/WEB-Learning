import Chai  from "./chai"

function App() {
  const username = 'chai aur code'

  // we can return only one element so to return multiple elements we wrap up different elements with div or empty wrappers known as fragments
  return (
    <>
    <Chai />
    <h1>Chai aur react {username}</h1>  
    {/* {} this is evaluated expression - evaluation expression means final outcome */}
    <p>Test para</p>
    </>
  )
}

export default App
