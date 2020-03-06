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


  render() {

    return (
      <div className="App">
        <p>Rest Countries</p>
        {this.state.isLoaded ? <Countries countriesAll={this.state.countriesAll} /> : "Loading"}
      </div>
    );
  }
}

export default App;
