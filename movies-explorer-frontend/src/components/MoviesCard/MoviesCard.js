import './MoviesCard.css';
import movie from '../../images/movie.jpg';

function MoviesCard({ nameRU, duration, image }) {

  const normalDuration = (duration) => {
    if (duration >= 60){ return (`${Math.trunc(duration/60)}ч ${duration%60}м`)}
    else {return `${duration}м`}
  }

  return (
    <div className="movies-card">
      <div className="movies-card__image-wrapper">
        <img src={`https://api.nomoreparties.co/${image.url}`} alt="Фильм" className="movies-card__image"/>
        <label className="movies-card__button-wrapper">
          {/* <button className="movies-card__button">Сохранить</button> */}
          <input type="checkbox" className="movies-card__checkbox-input"/>
          <div className="movies-card__checkbox-wrapper">Сохранить</div>
        </label>
      </div>
      <div className="movies-card__description-wrapper">
        <p className="movies-card__name">{nameRU}</p>
        <p className="movies-card__duration">{normalDuration(duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;