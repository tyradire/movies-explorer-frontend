import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__links">
          <li><a href="https://practicum.yandex.ru/profile/web/" target="_blank" rel="noopener noreferrer" className="footer__link">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/tyradire/" target="_blank" rel="noopener noreferrer" className="footer__link">Github</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;