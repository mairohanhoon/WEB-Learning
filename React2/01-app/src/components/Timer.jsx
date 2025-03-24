import React, { useEffect, useState } from "react";

const Timer = () => {

    const [time, setTime] = useState(0);
    useEffect(() => {
        //Mounted
        console.log("Adding new Interval");
        
        const timer = setInterval(()=> setTime(time+1), 1000);
        
        return function(){
            console.log("Clearing the old interval");
            
            clearInterval(timer)
        }
    }, [time])
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current Time is {time}</p>
        </div>
    )
}

export default Timer;