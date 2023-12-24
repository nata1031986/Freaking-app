import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faWind,
  faTint,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const api = {
  key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  const search = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then((res) => {
          setWeather(res.data);
          setQuery("");
        });
    }
  };

  const formatDate = (date) => {
    const options = { weekday: "long", day: "numeric", month: "long" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {weather && (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{formatDate(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
                <FontAwesomeIcon icon={faTemperatureLow} />
                <div className="weather">{weather.weather[0].main}</div>
                <div className="wind">
                  Wind: {weather.wind.speed} m/s
                  <FontAwesomeIcon icon={faWind} style={{ color: "gray" }} />
                </div>
                <div className="humidity">
                  Humidity: {weather.main.humidity}%
                  <FontAwesomeIcon icon={faTint} style={{ color: "gray" }} />
                </div>
                <div className="pressure">
                  Pressure: {weather.main.pressure} p/h
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    style={{ color: "gray" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
