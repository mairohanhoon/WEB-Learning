import {useEffect} from 'react'
import {useRouter} from 'next/router'

const useUser = () => ({
    user:{ name:'Rohan', username: 'rohan'},
    loading: false
}); 

const Page = () => {
    const router = useRouter();
    const user = useUser();
    useEffect(() => {
        if(user.user == null){
            router.replace('/');
        }
    }, [user]);
    return(
        <div>
            <h1>Index page of {router.query.username}</h1>
            {/* <button onClick={e => router.push(`/user/${router.query.username}/settings`)} className='bg-slate-400 rounded'>Open Settings Page</button> */}
            <button onClick={e => router.push({
                pathname:`/user/[username]/settings`,
                query: {username: router.query.username}
            })} className='bg-slate-400 rounded'>Open Settings Page</button>
            <button onClick={(e) => router.replace(`/`)} className='bg-slate-400 rounded'>Go to Home</button>
            <button onClick={(e) => router.reload() } className='bg-slate-400 rounded'>Reload</button>
        </div>
    )
}

export default Page;