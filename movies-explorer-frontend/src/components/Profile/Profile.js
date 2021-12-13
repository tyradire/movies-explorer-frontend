import './Profile.css';
const name = 'Виталий';
const email = 'pochta@yandex.ru';

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {name}!</h2>
      <form className="profile__form">
        <label className="profile__field">
          Имя
          <input className="profile__form-input" placeholder={name}/>
        </label>
        <label className="profile__field">
          E-mail
          <input className="profile__form-input" placeholder={email}/>
        </label>
        <button className="profile__button-save">Редактировать</button>
        <button className="profile__button-exit">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;