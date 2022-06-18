import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return ( 
    <div className='home-menu'>
        <Link to="/scan" className='home-link'>Skeniraj QR kod</Link>
        <Link to="/about-us" className='home-link'>O nama</Link>
    </div> );
}

export default Home;