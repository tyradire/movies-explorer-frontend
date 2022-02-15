import './MoviesCard.css';

function MoviesCard({ isSaved, nameRU, duration, image, handleSaveMovie, likeBtnClass, trailer, ...movie }) {

  const currentMovie = { nameRU, duration, image, ...movie };

  const normalDuration = (duration) => {
    if (duration >= 60){ return (`${Math.trunc(duration/60)}ч ${duration%60}м`)}
    else {return `${duration}м`}
  }

  const onSaveMovieClick = () => {
    handleSaveMovie(isSaved, currentMovie);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__image-wrapper">
        <a href={trailer}><img src={image} alt="Фильм" className="movies-card__image"/></a>
        <label className="movies-card__button-wrapper">
          <input onChange={onSaveMovieClick} type="checkbox" checked={isSaved} className={likeBtnClass}/>
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