import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Логотип" className="header__logo"/></Link>
      <div className="header__buttons">
        <Link to="/signup" className="header__signup">Регистрация</Link>
        <Link to="/signin" className="header__signin">Войти</Link>
      </div>
    </header>
  );
}

export default Header;