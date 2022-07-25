import './Portfolio.css';
import arrowLink from '../../images/arrow-link.svg';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <div className="portfolio__item">
          <li><a href="https://watermelon-shop.ru/" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Онлайн магазин</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/movies-explorer-api" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Поиск фильмов через API</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/mesto" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Таймер обратного отсчёта на JS</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/mesto" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Одностраничное приложение</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Адаптивный сайт</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
        <div className="portfolio__item">
          <li><a href="https://github.com/tyradire/how-to-learn" target="_blank" rel="noopener noreferrer" className="portfolio__subtitle">Статичный сайт</a></li>
          <img src={arrowLink} alt="Ссылка" className="portfolio__link"/>
        </div>
      </ul>
    </div>
  );
}

export default Portfolio;