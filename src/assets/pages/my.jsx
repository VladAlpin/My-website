import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from '../components/about';
// Статьи
// import Articles from '../components/articles';
import Header from '../components/header';
import Main from "../components/main";
import Sidebar from '../components/sidebar';
import Works from "../components/works";

function My() {
  return(
      <div>
      <Header/>
        <div className='display_flex'>
            <Sidebar/>

        <Routes>
            <Route index element={<Main/>} />
            <Route path='/' element={<Main/>}/>
            <Route path='*' element={<Main/>} />
            <Route path='/about' element={<About/>} />
            {/* почему-то  не работают статьи, настройка в хеадаре */}
            {/* <Route path='/articles' element={<Articles/>} /> */}
            <Route path='/work' element={<Works/>}/>
            <Route path='/main' element={<Main/>}/>
        </Routes>

        </div>
      </div>
  )
}

export default My;