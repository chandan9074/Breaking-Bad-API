import React, { Component } from 'react';
import logo from "../../img/logo.png"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="center">
                <img className="logo" src={logo}></img>
            </header>

         );
    }
}
 
export default Header;