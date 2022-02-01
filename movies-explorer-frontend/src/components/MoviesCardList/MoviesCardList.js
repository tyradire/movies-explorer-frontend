import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React, { useState } from 'react';

function MoviesCardList(props) {

  return (
    <div className="movies-cardlist">
      {
       props.filtredMovies.slice(0, props.queue).map((movie) => {
        return (
          <MoviesCard 
            key={movie.id} 
            {...movie} />
        )
        })
      }
    </div>
  );
}

export default MoviesCardList;