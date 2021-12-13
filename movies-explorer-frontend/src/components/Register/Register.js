import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <div className='register'>
      <a href="http://localhost:3000/"><img src={logo} alt="Логотип" className="register__logo"/></a>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__field" for="name">
          Имя
          <input 
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
        <button className="register__button">Зарегистрироваться</button>
        <div className="register__addition">
          <p className='register__already-registered'>Уже зарегистрированы?</p>
          <a className="register__login" href="http://localhost:3000/signin">Войти</a>
        </div>
      </form>
    </div>
  );
}

export default Register;