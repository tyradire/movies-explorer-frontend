import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  return (
    <div className="movies-cardlist">
      {
       props.moviesArray.slice(0, props.queue).map((movie) => {
        return (
          <MoviesCard
            likeBtnClass={props.likeBtnClass}
            handleSaveMovie={props.handleSaveMovie}
            key={movie.movieId} 
            {...movie} />
        )
        })
      }
    </div>
  );
}

export default MoviesCardList;