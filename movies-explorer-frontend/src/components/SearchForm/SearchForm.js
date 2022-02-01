import { useState } from 'react';

import './SearchForm.css';

function SearchForm(props) {
  
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(true);

  const changeFilmName = (evt) => {
    setInput(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.filter(input, checked);
  }

  const changeShortFilmCheckbox = () => {
    setChecked(!checked);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form" name="movieSearch">
      <div className="search-form__field-wrapper">
        <input onChange={changeFilmName} type="text" className="search-form__field" placeholder="Фильм" required/>
        <button className="search-form__button">Найти</button>
      </div>
      <div className="search-form__filter-wrapper">
        <p className="search-form__short-film">Короткометражки</p>
        <label className="search-form__checkbox">
          <input onChange={changeShortFilmCheckbox} type="checkbox" className="search-form__checkbox-input"/>
          <div className="search-form__checkbox-wrapper"></div>
        </label>
      </div>
    </form>
  );
}

export default SearchForm;