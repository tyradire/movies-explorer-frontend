import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import React, { useEffect, useState } from 'react';
import { getMovies } from '../../utils/MoviesApi';

function Movies({ filter, queue, handleSaveMovie, step, setQueue, savedMovies }) {

  const [movies, setMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);

  useEffect(() => {
    getMovies()
    .then((moviesAPI) => {
      const newMovies = moviesAPI.map((movie) => {
        movie.image = 'https://api.nomoreparties.co/'+movie.image.url;
        return { isSaved: savedMovies.some((elem) => movie.id == elem.movieId), movieId: movie.id, ...movie }
      })
      setMovies(newMovies)
      return newMovies;
    })
    .then((res) => {
      const inputRequest = JSON.parse(localStorage.getItem('inputRequest'))
      if (inputRequest) {
      filter(inputRequest.input, inputRequest.checked, res, setFiltredMovies);
    }
    })
  }, [])

  const allMoviesFilter = (input, checked, movies, setMovies) => {
    localStorage.setItem('inputRequest', JSON.stringify({input, checked}));
    filter(input, checked, movies, setMovies);
  }

  useEffect(() => {
    setMovies(movies.map((movie) => {
      movie.isSaved = savedMovies.some((elem) => movie.id == elem.movieId);
      return movie;
    }))
  }, [savedMovies])

  return(
    <div className="movies">
      <SearchForm filter={allMoviesFilter} movies={movies} setMovies={setFiltredMovies} />
      <MoviesCardList moviesArray={filtredMovies} queue={queue} handleSaveMovie={handleSaveMovie} likeBtnClass={`movies-card__checkbox-input`}/>
      {(queue <= filtredMovies.length) ? <LoadMore queue={queue} step={step} setQueue={setQueue} /> : ''}
    </div>
  );
}

export default Movies;