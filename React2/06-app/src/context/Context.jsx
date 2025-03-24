import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getWheatherDataForCity, getWheatherDataForLocation } from "../api";
const WeatherContext = createContext(null);


export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null)

    const fetchData = async () => {
        const response = await getWheatherDataForCity(searchCity)
        setData(response);
    }

    const fetchCurrentUserLoactionData = () =>{
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos);
            getWheatherDataForLocation(pos.coords.latitude, pos.coords.longitude).then((data) => setData(data));
        })
    }

    return <WeatherContext.Provider
        value={{searchCity, data, setSearchCity, fetchData, fetchCurrentUserLoactionData}}
    >{props.children}</WeatherContext.Provider>
}