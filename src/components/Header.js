import React, { Component } from 'react';
import '../style/Header.scss';
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
        return (
            <header className="header">
                <p>MenuPlaceHolder</p>
                <label htmlFor="" className='darkLightmode'>
                    {/* <svg className="darkLightmode__icon"> */}
                    {/* <use xlinkHref={`${Icons}#icon-moon}`}></use> */}
                    {/* <use xlinkHref="img/sprite.svg#icon-moon"></use> */}
                    {/* </svg> */}
                    <input type="checkbox" name="" id="" onChange={this.handleSlider} />
                </label>
            </header>
        );
    }
}


export default Header;