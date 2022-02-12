import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';


function Profile({handleSignOut, handleEdit}) {

  const profile = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleButtonExit = (evt) => {
    evt.preventDefault();
    handleSignOut();
  }

  const handleButtonEdit = (evt) => {
    evt.preventDefault();
    handleEdit({name, email})
  }

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
  }, [profile])

  const nameChange = (evt) => {
    setName(evt.target.value);
  }

  const emailChange = (evt) => {
    setEmail(evt.target.value);
  }

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {profile.name}!</h2>
      <form className="profile__form">
        <label className="profile__field">
          Имя
          <input onChange={nameChange} id="name" className="profile__form-input" placeholder={profile.name}/>
        </label>
        <label className="profile__field">
          E-mail
          <input onChange={emailChange} id="email" className="profile__form-input" placeholder={profile.email}/>
        </label>
        <button onClick={handleButtonEdit} className="profile__button-save">Редактировать</button>
        <button onClick={handleButtonExit} className="profile__button-exit">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;