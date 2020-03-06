import React, { Component } from 'react';
import Countries from '../components/Countries';
import '../style/App.scss';

class App extends Component {

  /* https://restcountries.eu/ */
  /* ALL  https://restcountries.eu/rest/v2/all */
  /* Name - Search by country name. It can be the native name or partial name
  https://restcountries.eu/rest/v2/name/{name}, https://restcountries.eu/rest/v2/name/united 
  */
  /* Full Name - Search by country full name
  https://restcountries.eu/rest/v2/name/{name}?fullText=true
  https://restcountries.eu/rest/v2/name/aruba?fullText=true
  */
  /* Region - Search by region: Africa, Americas, Asia, Europe, Oceania
  https://restcountries.eu/rest/v2/region/{region}
  https://restcountries.eu/rest/v2/region/europe
  */
  state = {
    countriesAll: [],
    isLoaded: false,
    option: "all",
    searchValue: "",
    filtered: "",
  }

  componentDidMount() {

    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.ok);
        if (response.ok) {
          console.log(response);
          return response;
        }
        else {
          throw Error(response.status)
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          countriesAll: data,
          isLoaded: true,
        })
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.option !== this.state.option) {
      //warunek jest po to, żeby fetch się zmieniał jeśli została wybrana opcja all to niech nie dodaje region, tylko opcje, żeby wyszło
      //https://restcountries.eu/rest/v2/all, a jeśli została wybrana jakakolwiek inna opcja to niech doda region i wybrana opcje, żeby
      //wyszło https://restcountries.eu/rest/v2/region/europe
      fetch(`https://restcountries.eu/rest/v2/${this.state.option === "all" ? "" : "region/"}${this.state.option}`)
        .then(response => {
          console.log(response.ok);
          if (response.ok) {
            console.log(response);
            return response;
          }
          else {
            throw Error(response.status)
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({
            filtered: "", //wyczysc tablice filtered, jesli jest ona pusta to wyswietla sie wszystkie opcje z danej kategorii (wiaze sie z inputem, czyli jesli wybiore jakas opcje to wyzeruj tablice filtered i wartosc z input)
            searchValue: "", //w celu wyczyszczenia inputa wyszukiwania, przy zmianie regionu
            countriesAll: data,
            isLoaded: true,
          })
        })
        .catch(error => console.log(error));
    }
  }

  handleChangeRegion = (e) => {
    this.setState({
      option: e.target.value,
    })
  }

  handleSearchCountry = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
    let actualCountriesList = [];
    let newCountriesList = [];
    if (e.target.value !== "") {
      actualCountriesList = this.state.countriesAll;
      newCountriesList = actualCountriesList.filter(country => {
        return country.name.toLowerCase().includes(e.target.value.toLocaleLowerCase());
      })
    } else {
      newCountriesList = this.state.countriesAll;
    }
    this.setState({
      filtered: newCountriesList,
    });
  }


  render() {
    console.log(this.state.option)
    console.log(this.state.countriesAll)
    console.log(this.state.searchValue)
    console.log(this.state.filtered)
    return (
      <div className="App">
        <p>Rest Countries</p>
        <input type="text" placeholder="Search Country" value={this.state.searchValue} onChange={this.handleSearchCountry} />
        <label htmlFor="lang">
          <select id="lang" onChange={this.handleChangeRegion} value={this.state.option}>
            {/* <option value="all" disabled selected>Filter by Region</option> */}
            <option value="all">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </label>
        {this.state.isLoaded ? <Countries countriesAll={this.state.filtered === "" ? this.state.countriesAll : this.state.filtered} /> : "Loading"}
      </div>
    );
  }
}

export default App;
