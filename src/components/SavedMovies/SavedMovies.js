import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useEffect, useState } from 'react';

function SavedMovies({ savedMovies, queue, handleSaveMovie, filterInput, filterCheckbox, isEmptyResult, setIsEmptyResult }) {

  const [filtredMovies, setFiltredMovies] = useState(savedMovies);
  const [displayedMovies, setDisplayedMovies] = useState(savedMovies);

  useEffect(() => {
    setIsEmptyResult(false);
  }, [])

  useEffect(() => {
    if (filtredMovies.length === 0) {
      setFiltredMovies(savedMovies);
      setDisplayedMovies(savedMovies);
      return;
    }
    const newFiltredMovies = filtredMovies.filter((elem) => {
      return savedMovies.some((item) => item.movieId == elem.movieId);
    });
    setFiltredMovies(newFiltredMovies);
    setDisplayedMovies(newFiltredMovies);
  }, [savedMovies])

  return (
    <div className="saved-movies">
      <SearchForm filterInput={filterInput} filterCheckbox={filterCheckbox} movies={savedMovies} filtredMovies={filtredMovies}
       setFiltredMovies={setFiltredMovies} setDisplayedMovies={setDisplayedMovies} checked={null}/>
      {isEmptyResult ? <p className='movies-cardlist__empty'>«Ничего не найдено»</p> : ''}
      <MoviesCardList moviesArray={displayedMovies} queue={queue} handleSaveMovie={handleSaveMovie} likeBtnClass={`movies-card__saved-checkbox-input`}/>
    </div>
  );
}

export default SavedMovies;