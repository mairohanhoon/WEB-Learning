const UserPage = (props) =>{
    console.log("Props", props);
    
    return (
        <div>
            <h1>Users (SSR)</h1>
            {
                props.data.users.map((user) => <li key={user.id}> {user.first}</li>)
            }
        </div>
    )
}

export const getServerSideProps = async () => {
    console.log("A task is going on a server");
    const data = await (await fetch(`https://dummyjson.com/users`)).json()
    return{
        props: {
            data
        },
    }
};

export default UserPage;