import React, { Component } from 'react';
import '../style/Header.scss';
//import Home from '../components/Home';
/* import Icons from '../img/sprite.svg'; */

class Header extends Component {

    state = {
        darkMode: false,
    }

    handleSlider = () => {
        this.setState({
            darkMode: !this.state.darkMode,
        })
    }
    render() {
        console.log(this.state.darkMode);
        return (
            <>
                {this.state.darkMode ? <style>{'body { background-color: hsl(207, 26%, 17%); } * {color:hsl(0, 0%, 100%);} .header {background-color: hsl(209, 23%, 22%)} .countryCard__description, .filter__selectLabel, .filter__searchInput, .btn{background-color: hsl(209, 23%, 22%)} *:active{color:hsl(0, 0%, 100%);}'}</style> : null}
                <header className="header">
                    <h1 className="header__logo">Where in the world?</h1>
                    {/* <svg className="darkLightmode__icon"> */}
                    {/* <use xlinkHref={`${Icons}#icon-moon}`}></use> */}
                    {/* <use xlinkHref="img/sprite.svg#icon-moon"></use> */}
                    {/* </svg> */}
                    <div className="header__changeMode">
                        <input className="header__change-input" type="checkbox" name="mode" id="mode" onChange={this.handleSlider} />
                        <label htmlFor="mode" className='header__darkLightMode'>
                            <svg className="header__icon-moon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>moon</title>
                                <path d="M13.719 1.8c0.686 0.385 1.332 0.867 1.916 1.449 3.42 3.422 3.42 8.966 0 12.386s-8.965 3.42-12.386 0c-0.583-0.584-1.065-1.231-1.449-1.916 3.335 1.867 7.633 1.387 10.469-1.449s3.318-7.134 1.45-10.47z" fill={this.state.darkMode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}></path>
                            </svg>
                            <span className="header__mode-name">{this.state.darkMode ? `Light Mode` : `Dark Mode`}</span>
                        </label>
                    </div>
                </header>
            </>
        );
    }
}


export default Header;