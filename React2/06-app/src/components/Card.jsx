import React from "react";
import { useWeather } from "../context/Context";
const Card = () => {
    const weather = useWeather();
    return (
        <div>
            <img src={weather.data?.current?.condition?.icon} alt="pic" />
            <h2 className="text-center text-xl font-bold">{weather.data?.current?.temp_c} C</h2>
            <h5 className="text-lg text-center font-semibold">{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country}</h5>
        </div>
    )
}

export default Card;