import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__field-wrapper">
        <input type="text" className="search-form__field" placeholder="Фильм" required/>
        <button className="search-form__button">Найти</button>
      </div>
      <div className="search-form__filter-wrapper">
        <p className="search-form__short-film">Короткометражки</p>
        <label className="search-form__checkbox">
          <input type="checkbox" className="search-form__checkbox-input"/>
          <div className="search-form__checkbox-wrapper"></div>
        </label>
      </div>
    </form>
  );
}

export default SearchForm;