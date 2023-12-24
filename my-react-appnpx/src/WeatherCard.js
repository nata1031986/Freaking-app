// WeatherCard.js
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faWind,
  faTint,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({
  day,
  temperature,
  weatherDescription,
  windSpeed,
  humidity,
  pressure,
}) => {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{day}</h5>
        <p className="card-text">
          {temperature}°C <FontAwesomeIcon icon={faTemperatureLow} />
        </p>
        <p className="card-text">{weatherDescription}</p>
        <p className="card-text">
          Wind: {windSpeed} m/s <FontAwesomeIcon icon={faWind} />
        </p>
        <p className="card-text">
          Humidity: {humidity}% <FontAwesomeIcon icon={faTint} />
        </p>
        <p className="card-text">
          Pressure: {pressure} hPa <FontAwesomeIcon icon={faTachometerAlt} />
        </p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  windSpeed: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default WeatherCard;
