import './MoviesCard.css';

function MoviesCard({ isSaved, nameRU, duration, image, handleSaveMovie, ...movie }) {

  const currentMovie = { nameRU, duration, image, ...movie };

  const normalDuration = (duration) => {
    if (duration >= 60){ return (`${Math.trunc(duration/60)}ч ${duration%60}м`)}
    else {return `${duration}м`}
  }

  const onSaveMovieClick = () => {
    console.log(currentMovie);
    handleSaveMovie(isSaved, currentMovie);
  }

// const checkedStatus = (
//   `${isSaved ? 'checked' : 'unchecked'}`
// );

  return (
    <div className="movies-card">
      <div className="movies-card__image-wrapper">
        <img src={image} alt="Фильм" className="movies-card__image"/>
        <label className="movies-card__button-wrapper">
          {/* <button className="movies-card__button">Сохранить</button> */}
          <input onChange={onSaveMovieClick} type="checkbox" checked={isSaved} className="movies-card__checkbox-input"/>
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