import React, { Component } from 'react';
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
            <div>
                <p>MenuPlaceHolder</p>
                <label htmlFor="">
                    <input type="checkbox" name="" id="" onChange={this.handleSlider} />
                </label>
            </div>
        );
    }
}

export default Header;