import React, { useState } from 'react'; 
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get coordinates using Open-Meteo Geocoding API
  const getCoordinates = async (cityName) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.results && data.results.length > 0) {
      return {lat: data.results[0].latitude, lon: data.results[0].longitude};
    } else {
      throw new Error("City not found");
    }
  };

  // Fetch weather including humidity
  const fetchWeather = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m`;
    const response = await fetch(url);
    const data = await response.json();

    const currentWeather = data.current_weather;
    const now = new Date();
    const currentHour = now.getHours();
    const humidity = data.hourly.relativehumidity_2m[currentHour];

    return {
      ...currentWeather,
      humidity
    };
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const coords = await getCoordinates(city);
      const weather = await fetchWeather(coords.lat, coords.lon);
      setWeatherData({...weather, city});
    } catch(err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const getWeatherIcon = (code) => {
    if (code === 0) return clear_icon;
    else if (code >= 1 && code <= 3) return cloud_icon;
    else if (code === 51) return drizzle_icon;
    else if (code === 61) return rain_icon;
    else if (code === 71) return snow_icon;
    return cloud_icon;
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
        <button onClick={handleSearch} disabled={!city || loading}>
          <img src={search_icon} alt="search" />
        </button>
      </div>

      {loading && <p>Loading weather...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.city}</h2>
          <div className="weather-main">
            <img src={getWeatherIcon(weatherData.weathercode)} alt="weather-icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
          </div>
          <div className="details">
            <div>
              <img src={humidity_icon} alt="humidity" />
              <p>{weatherData.humidity ?? 'N/A'}% Humidity</p>
            </div>
            <div>
              <img src={wind_icon} alt="wind" />
              <p>{weatherData.windspeed} km/h Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;


