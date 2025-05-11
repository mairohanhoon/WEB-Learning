import {useState, useEffect} from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const UserPage = () => {
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     async function fetchUsers() {
    //         const data = await fetch('https://dummyjson.com/users')
    //         setUsers(await data.json())
    //     }
    //     fetchUsers();
    // }, [])
    // console.log(users);

    const {data, error} = useSWR('https://dummyjson.com/users', fetcher)
    console.log(data);
    if(error){
        return <h1>Error happened</h1>
    }

    if(!data){
        <h1>Loading....</h1>
    }
    
    
    return(
        <div>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Users</h1>
            {data && data.users && data.users.map((user) =><Link href={`/users/${user.id}`} key={user.id}>
            <div>
            {user.firstName}
            </div>
            </Link> )}
        </div>
    )
}

export default UserPage;