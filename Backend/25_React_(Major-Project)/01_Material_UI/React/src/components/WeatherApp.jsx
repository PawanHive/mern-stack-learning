import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Varanasi",
    feelslike: 43.45,
    humidity: 35,
    temp: 39.05,
    tempMax: 39.05,
    tempMin: 39.0,
    weather: "haze",
  });


  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }

  return (
    <div style={{textAlign: "center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  )
}