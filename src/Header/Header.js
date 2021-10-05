import React from 'react';

import './header.css';
import starWarLogo from "../images/Star_Wars_Logo.svg";

function Header() {
    return (
        <header className="App-header">
            <img src={starWarLogo} className="App-logo" alt="logo"/>
        </header>

    );
}

export default Header;