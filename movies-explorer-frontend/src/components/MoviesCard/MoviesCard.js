import './MoviesCard.css';
import movie from '../../images/movie.jpg';
const duration = '1ч 17м';
const name = '33 слова о дизайне';

function MoviesCard() {
  return (
    <div className="movies-card">
      <div className="movies-card__image-wrapper">
        <img src={movie} alt="Фильм" className="movies-card__image"/>
        <label className="movies-card__button-wrapper">
          <button className="movies-card__button">Сохранить</button>
        </label>
      </div>
      <div className="movies-card__description-wrapper">
        <p className="movies-card__name">{name}</p>
        <p className="movies-card__duration">{duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;