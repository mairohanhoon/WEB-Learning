const baseUrl = "https://api.weatherapi.com/v1/current.json?key=89b54791afa84045b77181222251903"
export const getWheatherDataForCity = async (city) => {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json();
}

export const getWheatherDataForLocation = async (lat, long) => {
    const response = await fetch(`${baseUrl}&q=${lat},${long}&aqi=yes`)
    return await response.json();
}