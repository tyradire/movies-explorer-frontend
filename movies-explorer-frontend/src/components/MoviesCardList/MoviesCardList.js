import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList(props) {

  return (
    <div className="movies-cardlist">
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
    </div>
  );
}

export default MoviesCardList;