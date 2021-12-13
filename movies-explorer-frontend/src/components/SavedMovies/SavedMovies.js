import './SavedMovies.css';
import movie from '../../images/movie.jpg';

function SavedMovies() {
  return (
    <div className="movies-card">
      <img src={movie} alt="Фильм" className="movies__image"/>
      <div className="movies__description-wrapper">
        <p className="movies__name">33 слова о дизайне</p>
        <p className="movies__duration">1ч 17м</p>
      </div>
    </div>
  );
}

export default SavedMovies;