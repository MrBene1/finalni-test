import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Scan({postId, lang}) {
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
        <div className='home-link'>{lang === "MNE"? "Skeniranje QR koda" : "QR code scan"}</div>
        <form onSubmit={searchApi}>
            <p className='label'>{lang === "MNE"? "Unesite ID" : "Enter ID"}</p>
            <input name="id" type="number" className="input" onChange={inputId}/>
            <input type="submit" value={lang === "MNE"? "Potvrdi" : "Submit"} className="submit"></input>
        </form>
    </div> );
}

export default Scan;