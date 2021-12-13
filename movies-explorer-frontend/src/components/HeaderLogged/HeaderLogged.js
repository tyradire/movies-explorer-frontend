import React, { useState, useEffect } from 'react';
import './HeaderLogged.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';

function HeaderLogged() {
  const [width, setWidth] = useState(window.innerWidth);
  
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width < 769;

  return (
    <header className="header-logged">
      <a href="http://localhost:3000/"><img src={logo} alt="Логотип" className="header-logged__logo"/></a>
      {isMobile && <BurgerMenu />}
      {!isMobile && (
        <div className="header-logged__buttons">
        <a href="http://localhost:3000/movies" className="header-logged__movies">Фильмы</a>
        <a href="http://localhost:3000/saved-movies" className="header-logged__saved-movies">Сохранённые фильмы</a>
        <a href="http://localhost:3000/profile" className="header-logged__profile">Аккаунт<img src={profile} className="header-logged__profile-icon" alt="Профиль"/></a>
      </div>
      )}
    </header>
  );
}

export default HeaderLogged;