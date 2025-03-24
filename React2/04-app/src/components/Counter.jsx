import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
    const counterContext = useContext(CounterContext);
    return(
        <div>
            <button onClick={()=> {counterContext.setCount(counterContext.count+1)}} className="bg-cyan-300 p-2 rounded-lg shadow-lg m-2">Increase</button>
            <button onClick={()=> {counterContext.setCount(counterContext.count-1)}} className="bg-cyan-300 p-2 rounded-lg shadow-lg m-2">Decrease</button>
        </div>
    )
};

export default Counter;