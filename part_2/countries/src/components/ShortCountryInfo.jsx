const ShortCountryInfo = ({ country, onSelect }) => {
  const capital = country.capital?.[0] ?? 'No capital listed';

  return (
    <li className="country-item">
        <div className="country-item__details">
          <h2>{country.name.common}</h2>
          <button className="country-item__select-button" onClick={() => onSelect(country)}>Show</button>
        </div>
    </li>
  );
};

export default ShortCountryInfo;
