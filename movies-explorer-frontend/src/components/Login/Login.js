import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className='login'>
      <a href="http://localhost:3000/"><img src={logo} alt="Логотип" className="login__logo"/></a>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
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