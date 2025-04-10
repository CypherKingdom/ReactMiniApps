import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./WeatherApp.module.css";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const API_KEY = "82005d27ae2f7c79943028707a4d0c2f";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(URL);
      setWeather(response.data);
      setError("");
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please check the name and try again.");
      } else {
        setError("An error occurred while fetching weather data. Try again later.");
      }
      setWeather(null);
    }
  };

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>Weather Application</h1>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={classes.searchInput}
        />
        <button onClick={fetchWeather} className={classes.searchButton}>Search</button>
      </div>

      {error && (
        <div className={classes.errorMessage}>
          <FontAwesomeIcon icon={faExclamationCircle} /> {error}
        </div>
      )}

      {weather && (
        <div className={classes.weatherDisplay}>
          <h2>{weather.name}</h2>
          <p>
            <FontAwesomeIcon icon={faCloudSun} /> {weather.weather[0].description}
          </p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;