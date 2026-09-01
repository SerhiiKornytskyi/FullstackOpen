const ShortCountryInfo = ({ country }) => {
  const capital = country.capital?.[0] ?? 'No capital listed';

  return (
    <li className="country-item">
        <div className="country-item__details">
          <h2>{country.name.common}</h2>
        </div>
    </li>
  );
};

export default ShortCountryInfo;
