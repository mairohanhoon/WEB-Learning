import React from "react";
import { useState, useEffect } from "react";

function CounterComp(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('Count is updated');
    }, [count])
    return(
        <div className="flex flex-col justify-between shadow-lg">
            <p className="text-center">The count is {count} and it is {count%2 == 0 ? "even" : "odd"}</p>
            <button className="m-2 p-2 font-bold bg-slate-400 rounded-lg" onClick={()=> {
                setCount(count+1)
            }}>Increase</button>
            <button className="m-2 p-2 font-bold bg-slate-400 rounded-lg" onClick={()=> {
                count > 0 ? setCount(count-1): setCount(0)
            }}>Decrease</button>
            <button className="m-2 p-2 font-bold bg-red-500 rounded-lg" onClick={()=> {
                setCount(0)
            }}>Reset</button>
        </div>
    )
}

export default CounterComp;