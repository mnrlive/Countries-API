import React from 'react';
import '../style/Countries.scss'
const Countries = (props) => {
    const countries = props.countriesAll.map((country, index) => (
        <div className="country-container" key={index}>
            <img className="flagImg" src={country.flag} alt={`${country.name} flag`} />
            <p>{country.name}</p>
            <ul>
                <li>Population: {country.population}</li>
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