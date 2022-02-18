import './Login.css';
import logo from '../../images/logo.svg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { REG_EMAIL } from '../../utils/constants';

function Login({ onSubmitLogin, loggedIn, loginError, isSending }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    setPasswordError(loginError);
  }, [loginError])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitLogin(email, password)
  };

  const changeEmail = (evt) => {
    setEmail(evt.target.value);
    (!REG_EMAIL.test(evt.target.value)) ? setEmailError('Поле e-mail должно соответствовать шаблону почты') : setEmailError('');
  }

  const changePassword = (evt) => {
    setPassword(evt.target.value)
    evt.target.value.length < 2 ? setPasswordError('Пароль должен содержать не менее 2 символов') : setPasswordError('');
  }

  useEffect(() => {
    (!REG_EMAIL.test(email) || password.length < 2) ? setButtonDisabled(true) : setButtonDisabled(false);
  }, [email, password])

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
            disabled={isSending}
            pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
            required
          />
        </label>
        <span className="login__input-error" id="email-error">
          {emailError}
        </span>
        <label className="login__field" htmlFor="password">
          Пароль
          <input 
            className="login__input"
            minLength="2"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="off"
            onChange={changePassword}
            disabled={isSending}
            required
          />
        </label>
        <span className="login__input-error" id="password-error">
          {passwordError}
        </span>
        <button className="login__button" disabled={(buttonDisabled || isSending)} >Войти</button>
        <div className="login__addition">
          <p className='login__already-registered'>Ещё не зарегистрированы?</p>
          <Link className="login__login" to="/signup">Регистрация</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;