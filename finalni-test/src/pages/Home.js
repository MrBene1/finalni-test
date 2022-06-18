import React from 'react';
import { Link } from "react-router-dom";

function Home({lang}) {
    return ( 
    <div className='home-menu'>
        <Link to="/scan" className='home-link'>{lang === "MNE"? "Skeniraj QR kod" : "Scan QR code"}</Link>
        <Link to="/about-us" className='home-link'>{lang === "MNE"? "O nama" : "About us"}</Link>
    </div> );
}

export default Home;