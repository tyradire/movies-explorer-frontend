import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';


function Profile({handleSignOut, handleEdit}) {

  const profile = React.useContext(CurrentUserContext);

  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleButtonExit = (evt) => {
    evt.preventDefault();
    handleSignOut();
  }

  const handleButtonEdit = (evt) => {
    evt.preventDefault();
    handleEdit({name, email}, evt.target)
  }

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
  }, [profile])

  const changeName = (evt) => {
    setName(evt.target.value);
    name === evt.target.value ? setButtonDisabled(true) : setButtonDisabled(false);
  }

  const changeEmail = (evt) => {
    setEmail(evt.target.value);
    //console.log(regex.test(evt.target.value))
    (email === evt.target.value || !regex.test(evt.target.value)) ? setButtonDisabled(true) : setButtonDisabled(false);
  }

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {profile.name}!</h2>
      <form className="profile__form">
        <label className="profile__field">
          Имя
          <input onChange={changeName} id="name" className="profile__form-input" type="text" minLength="2" maxLength="30" value={name} placeholder={profile.name}/>
        </label>
        <label className="profile__field">
          E-mail
          <input onChange={changeEmail} id="email" className="profile__form-input" type="email" minLength="2" maxLength="30" value={email} placeholder={profile.email}/>
        </label>
        <button onClick={handleButtonEdit} disabled={buttonDisabled} className="profile__button-save">Редактировать</button>
        <button onClick={handleButtonExit} className="profile__button-exit">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;