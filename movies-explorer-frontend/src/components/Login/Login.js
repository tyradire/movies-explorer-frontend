import './Login.css';
import logo from '../../images/logo.svg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login({ onSubmitLogin, loggedIn }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitLogin(email, password)
  };

  const changeEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const changePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    console.log(loggedIn)
    resetForm();
  }, []);

  return (
    <div className='login'>
      <Link to="/"><img src={logo} alt="Логотип" className="login__logo"/></Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <label className="login__field" htmlFor="email">
          E-mail
          <input 
            className="login__input"
            minLength="2"
            maxLength="30"
            name="email"
            type="email"
            placeholder="Почта"
            autoComplete="off"
            onChange={changeEmail}
            required
          />
        </label>
        <label className="login__field" htmlFor="password">
          Пароль
          <input 
            className="login__input"
            minLength="2"
            maxLength="30"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="off"
            onChange={changePassword}
            required
          />
        </label>
        <button className="login__button">Войти</button>
        <div className="login__addition">
          <p className='login__already-registered'>Ещё не зарегистрированы?</p>
          <Link className="login__login" to="/signup">Регистрация</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;