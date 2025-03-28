import React ,{useEffect, useState}from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const Homepage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getAllMemes().then((memes )=> {
            setData(memes.data.memes)
            console.log(memes.data.memes);
            
        });
        
    }, [])
    return(
        <div className="flex flex-wrap justify-evenly content-evenly">
            {
                data.map(el => <MemeCard img={el.url} title={el.name} wid={el.width} hi={el.hight}/>)
            }
        </div>
    )
}

export default Homepage;