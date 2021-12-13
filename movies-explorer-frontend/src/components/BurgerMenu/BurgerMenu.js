import './BurgerMenu.css';
import React from "react";
import { Link, useLocation } from "react-router-dom";
import profile from '../../images/profile.svg';

function BurgerMenu() {

  const location = useLocation();

  return (
    <nav className="burger-menu">
      <input type="checkbox" className="burger-menu__switcher" id="menu"/>
      <label className="burger-menu__button-opened" htmlFor="menu"/>
      <label className="burger-menu__button-closed" htmlFor="menu"/>
      <div className="burger-menu__opened">
        <ul className="burger-menu__items">
          <Link to="/" className={`burger-menu__item ${location.pathname === '/' && "burger-menu__item_active"}`}> 
            Главная
          </Link>
          <Link to="/movies" className={`burger-menu__item ${location.pathname === '/movies' && "burger-menu__item_active"}`}> 
            Фильмы
          </Link>
          <Link to="/saved-movies" className={`burger-menu__item ${location.pathname === '/saved-movies' && "burger-menu__item_active"}`}>
            Сохраненные фильмы
          </Link>
        </ul>
        <Link to="/profile" className="burger-menu__item-profile">
          Аккаунт 
            <img src={profile} alt="Профиль" className="burger-menu__profile-image" />
        </Link>
      </div>
    </nav>
  );
}

export default BurgerMenu;