import './Register.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register( { onSubmitRegister, registerError } ) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const regName = /[a-zA-Zа-яА-Я\s-]/;

  useEffect(() => {
    setPasswordError(registerError);
  }, [registerError])

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRegister(name, email, password);
  }

  const changeName = (evt) => {
    setName(evt.target.value);
    (!regName.test(evt.target.value)) ? setNameError('Поле имя содержит только латиницу, кириллицу, пробел или дефис') : setNameError('');
  }
  const changeEmail = (evt) => {
    setEmail(evt.target.value);
    (!regex.test(evt.target.value)) ? setEmailError('Поле e-mail должно соответствовать шаблону почты') : setEmailError('');
  }
  const changePassword = (evt) => {
    setPassword(evt.target.value);
    evt.target.value.length < 2 ? setPasswordError('Пароль должен содержать не менее 2 символов') : setPasswordError('');
  }

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    (!regex.test(email) || password.length < 2) ? setButtonDisabled(true) : setButtonDisabled(false);
  }, [name, email, password])

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div className='register'>
      <Link to="/"><img src={logo} alt="Логотип" className="register__logo"/></Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form onSubmit={handleSubmit} className="register__form">
        <label className="register__field" htmlFor="name">
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
        <span className="register__input-error" >
          {nameError}
        </span>
        <label className="register__field" htmlFor="email">
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
            pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
            required
          />
        </label>
        <span className="register__input-error" >
          {emailError}
        </span>
        <label className="register__field" htmlFor="password">
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
        <span className="register__input-error" >
          {passwordError}
        </span>
        <button type="submit" className="register__button" disabled={buttonDisabled} >Зарегистрироваться</button>
        <div className="register__addition">
          <p className='register__already-registered'>Уже зарегистрированы?</p>
          <Link className="register__login" to="/signin">Войти</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;