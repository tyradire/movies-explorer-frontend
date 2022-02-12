import React, { useState, useEffect } from 'react';
import './HeaderLogged.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import { Link } from 'react-router-dom';

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
      <Link to="/"><img src={logo} alt="Логотип" className="header-logged__logo"/></Link>
      {isMobile && <BurgerMenu />}
      {!isMobile && (
        <div className="header-logged__buttons">
        <Link to="/movies" className="header-logged__movies">Фильмы</Link>
        <Link to="/saved-movies" className="header-logged__saved-movies">Сохранённые фильмы</Link>
        <Link to="/profile" className="header-logged__profile">Аккаунт<img src={profile} className="header-logged__profile-icon" alt="Профиль"/></Link>
      </div>
      )}
    </header>
  );
}

export default HeaderLogged;