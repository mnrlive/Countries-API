import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Countries.scss'
const Countries = (props) => {

    function populationDotted(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const countries = props.countriesAll.map((country, index) => (
        <div className="country-container" key={index}>
            {/* country.cioc ? country.cioc : country.name - jesli ma cioc to uzywaj w celu dobrego linkowanie z borderami, ktore posluguja sie skrotami, a cioc to skrot */}
            {/* badz sposob z alpha3Code zeby bylo zgodne z linkami z border, np border IRN to w alpha3Code Iranu tez IRN, ale juz cioc to IRI wiec linki sa sprzeczne, kilka jest takich wyjatkow, alpha3Code===border */}
            <NavLink to={country.alpha3Code} className="navLink">
                <img className="flagImg" src={country.flag} alt={`${country.name} flag`} />
                <p>{country.name}</p>
                <ul>
                    <li>Population: {populationDotted(country.population)}</li>
                    <li>Region: {country.region}</li>
                    <li>Capital: {country.capital}</li>
                </ul>
            </NavLink>
        </div>
    ))
    return (
        <>
            <div className='countries-container'>
                {countries}
            </div>
        </>
    );
}

export default Countries;
