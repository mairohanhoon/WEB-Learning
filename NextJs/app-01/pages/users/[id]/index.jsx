import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
const UserInfoPage = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState();
    console.log(userInfo);
    
    useEffect(() => {
        const id = router.query.id;
        async function getUserById(id){
            const data = await fetch(`https://dummyjson.com/users/${id}`)
            setUserInfo(await data.json())
        }
        getUserById(id);
    }, [router.query.id])

    return(
        <div>
            <h1>
                {userInfo?.firstName}
            </h1>
            <h1>
                {userInfo?.email}
            </h1>
        </div>
    )
}

export default UserInfoPage;