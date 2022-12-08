import React from "react";
import {Link, NavLink} from "react-router-dom";

const header = document.getElementById('header');

const Header = () => {

  const handleClick = e => {
    if(!document.querySelector('body').classList.contains('show-sidebar')) {
      document.body.classList.add('show-sidebar');
    } else if (document.querySelector('body').classList.contains('show-sidebar')) {
      document.body.classList.remove('show-sidebar');
    }
  } 

  return (
    <header className="header" id="header">
      <div className="burger" onClick={e => handleClick()}><span/></div>
      <div className='header_item'>
        <div className='header_left'>
          <NavLink to='/main' className='header_text'>ГЛАВНАЯ</NavLink>
          <NavLink to='/about' className='header_text'>ОБО МНЕ</NavLink>
          <NavLink to='/work' className='header_text'>МОИ РАБОТЫ</NavLink>
          {/* почему-то не работает */}
          {/* <a href='/articles' className='header_text'>СТАТЬИ</a> */}
        </div>
        {/* поиск не реализован */}
        {/* <div className='header_right'>
          <input className='header_input' placeholder='Поиск...' />
        </div> */}
      </div>
    </header>
  )
};

export default Header;