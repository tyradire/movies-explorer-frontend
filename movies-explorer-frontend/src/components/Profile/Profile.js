import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import { REG_EMAIL, REG_NAME } from '../../utils/constants';

function Profile({handleSignOut, handleEdit, profileError, isSending}) {

  const profile = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleButtonExit = (evt) => {
    evt.preventDefault();
    handleSignOut();
  }

  const handleButtonEdit = (evt) => {
    evt.preventDefault();
    handleEdit({name, email}, evt.target)
  }

  useEffect(() => {
    setEmailError(profileError);
  }, [profileError])

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setButtonDisabled(true);
  }, [profile])

  useEffect(() => {
    ((name === profile.name && email === profile.email) || !REG_EMAIL.test(email)) ? setButtonDisabled(true) : setButtonDisabled(false);
  }, [name, email])

  const changeName = (evt) => {
    setName(evt.target.value);
    (!REG_NAME.test(evt.target.value)) ? setNameError('Поле имя содержит только латиницу, кириллицу, пробел или дефис') : setNameError('');
  }

  const changeEmail = (evt) => {
    setEmail(evt.target.value);
    (!REG_EMAIL.test(evt.target.value)) ? setEmailError('Поле e-mail должно соответствовать шаблону почты') : setEmailError('');
  }

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {profile.name}!</h2>
      <form className="profile__form">
        <label className="profile__field">
          Имя
          <input
            onChange={changeName}
            id="name"
            className="profile__form-input"
            type="text"
            minLength="2"
            maxLength="30"
            value={name}
            placeholder={profile.name}
            disabled={isSending}
          />
        </label>
        <span className="profile__form-input-error" >
          {nameError}
        </span>
        <label className="profile__field">
          E-mail
          <input 
            onChange={changeEmail} 
            id="email"
            className="profile__form-input"
            type="email"
            minLength="2"
            maxLength="30"
            value={email}
            placeholder={profile.email}
            disabled={isSending}
          />
        </label>
        <span className="profile__form-input-error" >
          {emailError}
        </span>
        <button onClick={handleButtonEdit} disabled={(buttonDisabled || isSending)} className="profile__button-save">Редактировать</button>
        <button onClick={handleButtonExit} className="profile__button-exit">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;