import React, { useState } from 'react';
import './App.css';
import Header from './pages/Header'
import Home from './pages/Home.js';
import About from './pages/About.js';
//import Error from './pages/Error.js';
import Scan from './pages/Scan.js';
import User from './pages/User.js';
import Post from './pages/Post.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [id,setId]=useState(0);
  const idSet = (e) => {
    setId(e)
  }
  const [pageLang,setPageLang]=useState("MNE");
  const setLang = (e) => {
    setPageLang(e)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header setLang={setLang} lang={pageLang}></Header>
        <Routes>
          <Route path="/" element={<Home lang={pageLang}/>}/>
          <Route path="/about-us" element={<About lang={pageLang}/>}/>
          <Route path="/scan" element={<Scan postId={idSet} lang={pageLang}/>}/>
          <Route path="/user" element={<User/>}/>
        <Route path={"/"+id} element={<Post postId={id} lang={pageLang}/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
