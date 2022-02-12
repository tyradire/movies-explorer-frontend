import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import HeaderLogged from '../HeaderLogged/HeaderLogged';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <div className="saved-movies">
      {
       props.savedMovies.map((movie) => {
        return (
          <MoviesCard
            handleSaveMovie={props.handleSaveMovie}
            key={movie.id} 
            isSaved={true}
            {...movie} />
        )
        })
      }
    </div>
  );
}

export default SavedMovies;