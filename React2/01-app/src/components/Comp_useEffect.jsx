import React, { useState } from "react";
import { useEffect } from "react";

function Comp_useEffect(){
    useEffect(()=>{
        console.log('Hello');
    }, [])
    
    return(
        <div>
            <p>Hey there this is useEffect...</p>
        </div>
    )
}

export default Comp_useEffect