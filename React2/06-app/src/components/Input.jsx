import React from "react";
import { useWeather } from "../context/Context.jsx";

const Input = (props) => {
    const weather = useWeather();
    // console.log(weather);
    
    return(
        <input 
            className="p-2 shadow-md"
            placeholder="Search here ... " 
            value={weather.searchCity} 
            onChange={(e) => weather.setSearchCity(e.target.value)} 
        />
    )
}

export default Input;