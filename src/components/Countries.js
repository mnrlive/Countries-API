import React from 'react';
import '../style/Countries.scss'
const Countries = (props) => {

    function populationDotted(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const countries = props.countriesAll.map((country, index) => (
        <div className="country-container" key={index}>
            <img className="flagImg" src={country.flag} alt={`${country.name} flag`} />
            <p>{country.name}</p>
            <ul>
                <li>Population: {populationDotted(country.population)}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
            </ul>
        </div>
    ))
    return (
        <div className='countries-container'>
            {countries}
        </div>

    );
}

export default Countries;