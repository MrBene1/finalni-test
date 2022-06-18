import React, { useState, useEffect } from 'react';
import '../App.css';

function Post({postId}) {
    
    const [books,setBooks]=useState([]);
    const getData=()=>{
        fetch('https://jsonblob.com/api/jsonBlob/987664604335456256')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setBooks(data)
        });
    }
    useEffect(()=>{
        getData()
    },[])

    return ( 
    <div className='App'>
        <div className='home-link'>Detalji o proizvodu</div>
        {books.map(book => book.id == postId?(<div key={book.id}>
                <div className='o-proizvodu'>{book.naziv}</div>
                <div className='o-proizvodu'>{book.autor}</div>
                <div className='o-proizvodu'>{book.izdanje}</div>
                <div className='o-proizvodu'>{book.brojStranica}</div>
        </div>) : "")}
    </div> );
}

export default Post;