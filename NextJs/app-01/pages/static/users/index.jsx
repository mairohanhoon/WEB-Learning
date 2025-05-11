const UserPage = (props) => {
    return (
        <div>
            <h1>
                Users Page (SSG)
                {
                props.data.users.map((user) => <li key={user.id}> {user.firstName}</li>)
                }
            </h1>
        </div>
    )
}

export default UserPage;

export const getStaticProps = async () => {
    console.log("A task is going on a server");
    const data = await (await fetch(`https://dummyjson.com/users`)).json()
    return{
        props: {
            data
        },
    }
}