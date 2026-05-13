import { useState } from "react"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "388f143572b94ce9651f165380a2f8b6";

  let getWeatherInfo = async () => {
    try {

      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // here we customized the api url, actual url was : "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
    } catch(error) {
      throw err;
    }
  }


  let handleChange =  (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {

      e.preventDefault();
      console.log(city);
      setCity("") // make the input box empty after click on submit button 
      let newInfo = await getWeatherInfo(); // calling
      updateInfo(newInfo)
    } catch (err) {
      setError(true)
    }
  }
  return (
    <div className="SearchBox">

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exist</p> }
      </form>
    </div>
  );
}
