import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Scan({postId}) {
    const [bookId, setBookId] = useState(0);
    const inputId = e => {
        setBookId(e.target.value);
        console.log(bookId);
    }

    const navigate = useNavigate();
    const searchApi = e => {
        e.preventDefault();
        postId(bookId);
        navigate("/"+bookId);
    }

    return ( <div>
        <div className='home-link'>Skeniranje QR koda</div>
        <form onSubmit={searchApi}>
            <label htmlFor='id' className='label'>Unesite id</label>
            <input name="id" type="number" className="input" onChange={inputId}/>
        </form>
    </div> );
}

export default Scan;