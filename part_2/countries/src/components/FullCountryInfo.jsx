import {useEffect, useState} from 'react';
import weatherService from '../services/weatherService';
import Weather from './Weather';

const FullCountryInfo = ({ country }) => {
const capital = country.capital?.[0] ?? 'No capital listed';

const [weather, setWeather] = useState(null);

useEffect(() => {
  async function fetchWeather() {
    const weatherData = await weatherService(capital);
    setWeather(weatherData);
  };

  fetchWeather();
}, []);

  return (
    <li className="country-item">
      <div className="country-item__content">
        <div className="country-item__details">
          <h2>{country.name.common}</h2>
          <p>Capital: {capital}</p>
          <p>Area: {country.area}</p>
        </div>
          <span className="country-flag" aria-label={`${country.name.common} flag`}>
          <img alt={country.name.common} src={country.flags.png} />
        </span>
        {
          country.languages && (
            <div className="country-item__languages">
              <h3>Languages:</h3>
              <ul>
                {Object.values(country.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))} 
              </ul>
            </div>
          )
        }
        {weather ? (
          <Weather
            capitalName={capital}
            temperature={weather.main?.temp}
            wind={weather.wind?.speed}
            icon={weather.weather?.[0]?.icon}
          />
        ) : (
          <p>Weather data not available</p>
        )}
      </div>
    </li>
  );
};

export default FullCountryInfo;
