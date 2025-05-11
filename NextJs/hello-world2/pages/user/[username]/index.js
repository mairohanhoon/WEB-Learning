import {useRouter} from 'next/router'

const Page = () => {
    const {query} = useRouter();
    console.log(query);
    return(
        <div>
            Index page of {query.username}
        </div>
    )
}

export default Page;