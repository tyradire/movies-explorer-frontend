import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useEffect, useState } from 'react';

function SavedMovies({ savedMovies, queue, handleSaveMovie, filter }) {

  const [filtredMovies, setFiltredMovies] = useState(savedMovies);

  useEffect(() => {
    setFiltredMovies(filtredMovies.filter((elem) => {
      return savedMovies.some((item) => item.movieId == elem.movieId)
    }));
  }, [savedMovies])

  return (
    <div className="saved-movies">
      <SearchForm filter={filter} movies={savedMovies} setMovies={setFiltredMovies} />
      <MoviesCardList moviesArray={filtredMovies} queue={queue} handleSaveMovie={handleSaveMovie} likeBtnClass={`movies-card__saved-checkbox-input`}/>
    </div>
  );
}

export default SavedMovies;