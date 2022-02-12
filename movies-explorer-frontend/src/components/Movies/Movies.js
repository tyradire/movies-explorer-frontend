import './Movies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';

function Movies(props) {
  return(
    <div className="movies">
      <SearchForm filter={props.filter} savedMoviesFilter={props.savedMoviesFilter} />
      {
       props.filtredMovies.slice(0, props.queue).map((movie) => {
        return (
          <MoviesCard
            handleSaveMovie={props.handleSaveMovie}
            key={movie.id} 
            {...movie} />
        )
        })
      }
      {(props.queue <= props.filtredMovies.length) ? <LoadMore queue={props.queue} step={props.step} setQueue={props.setQueue} /> : ''}
    </div>
  );
}

export default Movies;