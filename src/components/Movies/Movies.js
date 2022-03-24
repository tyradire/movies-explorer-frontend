import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import React, { useEffect, useState } from 'react';
import { getMovies } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { POSTER_URL } from '../../utils/constants';

function Movies({ filterInput, filterCheckbox, queue, handleSaveMovie, step, setQueue, savedMovies, isEmptyResult, setIsEmptyResult }) {

  const [movies, setMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsEmptyResult(false);
  }, [])

  useEffect(() => {
    getMovies()
    .then((moviesAPI) => {
      const newMovies = moviesAPI.map((movie) => {
        movie.image = POSTER_URL+movie.image.url;
        return { isSaved: savedMovies.some((elem) => movie.id == elem.movieId), movieId: movie.id, trailer: movie.trailerLink, ...movie }
      })
      setMovies(newMovies)
      return newMovies;
    })
    .then((res) => {
      setIsLoading(false);
      const inputRequest = JSON.parse(localStorage.getItem('inputRequest'));
      if (inputRequest) {
        filterInput(inputRequest.input, inputRequest.checked, res, setFiltredMovies, setDisplayedMovies);
      } else {
        setFiltredMovies(res);
        setDisplayedMovies(res);
      }
    })
  }, [])

  const allMoviesFilter = (input, checked, movies, setMovies) => {
    localStorage.setItem('inputRequest', JSON.stringify({input, checked}));
    filterInput(input, checked, movies, setFiltredMovies, setDisplayedMovies);
  }

  useEffect(() => {
    setMovies(movies.map((movie) => {
      movie.isSaved = savedMovies.some((elem) => movie.id == elem.movieId);
      return movie;
    }))
  }, [savedMovies])

  return(
    <div className="movies">
      <SearchForm filterInput={allMoviesFilter} filterCheckbox={filterCheckbox} movies={movies} setFiltredMovies={setFiltredMovies} setDisplayedMovies={setDisplayedMovies}
      filtredMovies={filtredMovies} 
      request={JSON.parse(localStorage.getItem('inputRequest')) ? JSON.parse(localStorage.getItem('inputRequest')).input : null}
      checked={JSON.parse(localStorage.getItem('inputRequest')) ? JSON.parse(localStorage.getItem('inputRequest')).checked : null} />
      {isLoading ? <Preloader /> : ''}
      {isEmptyResult ? <p className='movies-cardlist__empty'>«Ничего не найдено»</p> : ''}
      <MoviesCardList moviesArray={displayedMovies} queue={queue} handleSaveMovie={handleSaveMovie} isLoading={isLoading} likeBtnClass={`movies-card__checkbox-input`}/>
      {(queue <= filtredMovies.length) ? <LoadMore queue={queue} step={step} setQueue={setQueue} /> : ''}
    </div>
  );
}

export default Movies;