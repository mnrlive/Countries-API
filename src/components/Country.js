import React from 'react';
import { NavLink } from 'react-router-dom';
const Country = (props) => {

    const topLevelDomain = props.topLevelDomain.map((domain, index) => (
        <li key={index}>{domain}</li>
    ))
    const languages = props.languages.map((language, index) => (
        <li key={index}>{language.name}</li>
    ))

    const currencies = props.currencies.map((currency, index) => (
        <li key={index}>{currency.name}</li>
    ))

    const borders = props.borders.map((border, index) => (
        <li key={index}><NavLink to={border} className="navLink"><button>{border}</button></NavLink></li>
    ))

    return (
        <div>
            {/* <NavLink to={country.name} className="navLink"><p>{country.name}</p></NavLink> */}
            <img src={props.flag} alt="" width="50" height="50" />
            <NavLink to="/" className="navLink"><button>Back</button></NavLink>
            <p>Name: {props.name}</p>
            <p>NativeName: {props.nativeName}</p>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>SubRegion: {props.subRegion}</p>
            <p>Capital: {props.capital}</p>
            <p>Top Level Domain</p>
            <ul>
                {topLevelDomain}
            </ul>
            <p>Curriences</p>
            <ul>
                {currencies}
            </ul>
            <p>Languages</p>
            <ul>
                {languages}
            </ul>
            <ul>
                {borders}
            </ul>
            {/* <p>{props.borders}</p> */}
        </div>
    );
}
/* 
name={country.name} nativeName={country.nativeName} population={country.population}
          region={country.region} subRegion={country.subregion} capital={country.capital} topLevelDomain={country.topLevelDomain} curriences={country.curriences} languages={country.languages} borders={country.borders} */

export default Country;