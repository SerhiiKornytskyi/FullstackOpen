const Weather = ({ capitalName,temperature, wind, icon }) => {

  return (
    <div>
      <h3>Weather in {capitalName}</h3>
      <p>temperature: {temperature} Celsius</p>
      <p>wind: {wind} m/s</p>
      {icon && (
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather icon"
        />
      )}
    </div>
  );
};

export default Weather;
