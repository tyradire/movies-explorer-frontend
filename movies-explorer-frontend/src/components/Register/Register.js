import './Register.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register( { onSubmitRegister } ) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    onSubmitRegister(name, email, password);
  }

  const changeName = (evt) => {
    setName(evt.target.value)
  }
  const changeEmail = (evt) => {
    setEmail(evt.target.value)
  }
  const changePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div className='register'>
      <a href="http://localhost:3000/"><img src={logo} alt="Логотип" className="register__logo"/></a>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form onSubmit={handleSubmit} className="register__form">
        <label className="register__field" for="name">
          Имя
          <input
            onChange={changeName}
            className="register__input"
            minLength="2"
            maxLength="30"
            name="name"
            type="text"
            placeholder="Имя"
            autoComplete="off"
            required
          />
        </label>
        <label className="register__field" for="email">
          E-mail
          <input
            onChange={changeEmail}
            className="register__input"
            minLength="2"
            maxLength="30"
            name="email"
            type="email"
            placeholder="Почта"
            autoComplete="off"
            required
          />
        </label>
        <label className="register__field" for="password">
          Пароль
          <input
            onChange={changePassword}
            className="register__input"
            minLength="2"
            maxLength="30"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="off"
            required
          />
        </label>
        <button type="submit" className="register__button">Зарегистрироваться</button>
        <div className="register__addition">
          <p className='register__already-registered'>Уже зарегистрированы?</p>
          <Link className="register__login" to="/signin">Войти</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;