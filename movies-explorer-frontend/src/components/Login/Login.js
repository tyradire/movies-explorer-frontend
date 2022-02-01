import './Login.css';
import logo from '../../images/logo.svg';
import React, { useState, useEffect } from 'react';

function Login({ onSubmitLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitLogin(email, password)
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div className='login'>
      <a href="http://localhost:3000/"><img src={logo} alt="Логотип" className="login__logo"/></a>
      <h2 className="login__title">Рады видеть!</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <label className="login__field" for="email">
          E-mail
          <input 
            className="login__input"
            minLength="2"
            maxLength="30"
            name="email"
            type="email"
            placeholder="Почта"
            autoComplete="off"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="login__field" for="password">
          Пароль
          <input 
            className="login__input"
            minLength="2"
            maxLength="30"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="off"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="login__button">Войти</button>
        <div className="login__addition">
          <p className='login__already-registered'>Ещё не зарегистрированы?</p>
          <a className="login__login" href="http://localhost:3000/signup">Регистрация</a>
        </div>
      </form>
    </div>
  );
}

export default Login;