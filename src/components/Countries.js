import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Countries.scss'
const Countries = (props) => {

    function populationDotted(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const countries = props.countriesAll.map((country, index) => (

        <div className="country-container" key={index}>
            <img className="flagImg" src={country.flag} alt={`${country.name} flag`} />
            {/* country.cioc ? country.cioc : country.name - jesli ma cioc to uzywaj w celu dobrego linkowanie z borderami, ktore posluguja sie skrotami, a cioc to skrot */}
            {/* badz sposob z alpha3Code zeby bylo zgodne z linkami z border, np border IRN to w alpha3Code Iranu tez IRN, ale juz cioc to IRI wiec linki sa sprzeczne, kilka jest takich wyjatkow, alpha3Code===border */}
            <NavLink to={country.alpha3Code} className="navLink"><p>{country.name}</p></NavLink>
            <ul>
                <li>Population: {populationDotted(country.population)}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
            </ul>
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
