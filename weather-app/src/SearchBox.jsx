import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./search.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = API_URL;
  const API_KEY = API_KEY;

  let getWeatherInfo = async () => {
    try {
      let respond = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRespones = await respond.json();
      console.log(jsonRespones);
      let result = {
        city: city,
        temp: jsonRespones.main.temp,
        tempMin: jsonRespones.main.temp_min,
        tempMax: jsonRespones.main.temp_max,
        humidity: jsonRespones.main.humidity,
        feelsLike: jsonRespones.main.feels_like,
        weather: jsonRespones.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
