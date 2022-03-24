import './Portfolio.css';
import arrowLink from '../../images/arrow-link.svg';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/how-to-learn" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Статичный сайт</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Адаптивный сайт</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/mesto" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Одностраничное приложение</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
      </ul>
    </div>
  );
}

export default Portfolio;