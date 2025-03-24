import React , { useEffect , useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, useParams, NavLink} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => setPosts(data));
  }, [])
  return(
    <div>
      {
        posts.map((posts) => (
            <NavLink className='flex font-medium text-xl p-2 m-2 shadow-lg rounded-lg text-blue-600 dark:text-blue-500 hover:underline' to={`/post/${posts.id}`}><li>{posts.title}</li></NavLink>
        ) )
      }
    </div>
  )
}

const About = () => {
  return(
    <div>
      <h1 className='text-2xl font-extrabold'>About Page</h1>
    </div>
  )
}

const Profile = ()=> {
 return(
    <div>
      <h1 className='text-2xl font-extrabold'>Profile Page</h1>
    </div>
   )
}

const Settings = ()=> {
  return(
     <div>
       <h1 className='text-2xl font-extrabold'>Settings Page</h1>
     </div>
    )
 }

const SayUser = ()=>{
  const params = useParams();
  console.log(params);
  
  return (
    <div>
      <h1 className='text-2xl font-extrabold'>Your Name is {params.userName}</h1>
    </div>
   )
}

const PostPage = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then((data) => data.json())
    .then((data) => setData(data))
  }, [])
  if(data === null) return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <h1 className='text-2xl font-extrabold'>Loading ... </h1>
    </div>
  )
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <h1 className='text-2xl font-extrabold'>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/account'>
          <Route path='profile' element={<Profile/>}/>
          <Route path='setting' element={<Settings/>}/>
        </Route>
        <Route path='/user/:userName' element={<SayUser/>}/>
        <Route path='/post/:postId' element={<PostPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


