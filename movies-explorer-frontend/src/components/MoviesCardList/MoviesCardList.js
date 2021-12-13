import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <div className="movies-cardlist">
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </div>
  );
}

export default MoviesCardList;