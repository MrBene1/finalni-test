import React from 'react';
import logo from './../logo.jpg';
import { Link } from "react-router-dom";

function Header() {
    return ( 
    <div className='header'>
        <Link to="/"><img src={logo} alt='logo'/></Link>
        <div className='menu'>
            <Link to="/" className='menu-link'>MNE</Link>
            <Link to="/" className='menu-link'>UserName</Link>
        </div>
    </div> );
}

export default Header;