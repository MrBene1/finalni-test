import React from 'react';
import logo from './../logo.jpg';
import { Link } from "react-router-dom";

function Header({setLang,lang}) {

    const changeLang = () => {
        if(lang === "MNE") setLang("ENG");
        else setLang('MNE')
    }
    return ( 
    <div className='header'>
        <Link to="/"><img src={logo} alt='logo'/></Link>
        <div className='menu'>
            <button onClick={changeLang}  className='menu-link'>{lang === "MNE"? "ENG" : "MNE"}</button>
            <Link to="/" className='menu-link'>UserName</Link>
        </div>
    </div> );
}

export default Header;