import { useState, useEffect } from 'react';
import countriesService from './services/countriesService';
import ShortCountryInfo from './components/ShortCountryInfo';
import FullCountryInfo from './components/FullCountryInfo';

const App = () => {
  const [filterValue, setFilterValue] = useState('');
  const [countries, setCountries] = useState([]);

  const SHOW_RESULTS_TRASHOLD = 10;
  const MULTIPLE_RESULTS_TRASHOLD = 1;

  useEffect(() => {
    let isMounted = true;

    async function fetchAllCountries() {
      const allCountries = await countriesService();

      if (isMounted) {
        setCountries(allCountries);
      }
    }

    fetchAllCountries();

    return () => {
      isMounted = false;
    };
  }, []);

  const normalizedFilter = filterValue.trim().toLowerCase();
  const filteredCountries = normalizedFilter
    ? countries.filter((country) =>
        country?.name?.common?.toLowerCase().includes(normalizedFilter)
      )
    : countries;

  return (
    <div className="country-app">
      <header className="app-header">
        <h1>Country finder</h1>
      </header>

      <form className="search-panel" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="country-search">Find countries</label>
        <div className="search-input-wrapper">
          <input
            id="country-search"
            type="search"
            value={filterValue}
            onChange={(event) => setFilterValue(event.target.value)}
            placeholder="Search by country name"
          />
        </div>
      </form>

      {!!filterValue && (
        <p className="search-summary">
          Showing {filteredCountries.length} results for “{filterValue}”
        </p>
      )}

      {!countries.length ? (
        <div>
          <p>Loading countries…</p>
        </div>
      ) : filteredCountries.length > SHOW_RESULTS_TRASHOLD ? (
        <div>
          { filterValue && (
              <p>Too many matches. Try a more specific search.</p>
            )
          }
        </div>
      ) : filteredCountries.length === 0 ? (
        <div>
          <p>No countries match your search.</p>
        </div>
      ) : (
        <ul className="country-list">
          {
            filteredCountries.map(
              (country) => filteredCountries.length > MULTIPLE_RESULTS_TRASHOLD ?
                <ShortCountryInfo key={country.name.official} country={country} /> : 
                <FullCountryInfo key={country.name.official} country={country} />
              )
          }
        </ul>
      )}
    </div>
  );
};

export default App;