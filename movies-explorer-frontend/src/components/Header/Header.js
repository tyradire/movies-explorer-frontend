import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="http://localhost:3000/"><img src={logo} alt="Логотип" className="header__logo"/></a>
      <div className="header__buttons">
        <a href="http://localhost:3000/signup" className="header__signup">Регистрация</a>
        <a href="http://localhost:3000/signin" className="header__signin">Войти</a>
      </div>
    </header>
  );
}

export default Header;