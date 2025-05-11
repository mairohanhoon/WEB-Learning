const UserPage = (props) =>{
    // console.log(props.data);
    
    return (
        <div>
            <h1>Profile page of {props.data.firstName}</h1>
        </div>
    )
}

export const getStaticPaths = async () => {
    const data = await (await fetch(`https://dummyjson.com/users`)).json() 
    const allUserIds = data.users.map(user => user.id) 
    console.log(allUserIds);
    
    return {
        paths: allUserIds.map((userId) => ( {params: {id: `${userId}`}} )),
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json()    
    return {
        props:{
            data,
        },
    }
}

export default UserPage;