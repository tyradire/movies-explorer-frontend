import Header from '../Header/Header';
import HeaderLogged from '../HeaderLogged/HeaderLogged';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
//import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getMovies } from '../../utils/MoviesApi';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);

  const [queue, setQueue] = useState(3);
  const [step, setStep] = useState(3);

  useEffect(() => {
    getMovies()
    .then((res) => {
      console.log(res)
      setMovies(res);
    })
  }, [])

  const setCardRow = () => {
    if (window.innerWidth >= 1280) {
      setQueue(12);
      setStep(3);
      return
    }
    if (window.innerWidth > 480) {
      setQueue(8);
      setStep(2);
      return
    }
    setQueue(5);
    setStep(2);
  }

  useEffect(() => {
    window.addEventListener('resize', setCardRow);
    setCardRow();
    return () => {
      window.removeEventListener('resize', setCardRow);
    };
  }, []);

  const filter = (input, checked) => {
    input = input.toLowerCase();
    setFiltredMovies(movies.filter((item) => (item.nameRU.toLowerCase().includes(input) || (item.nameEN ? item.nameEN.toLowerCase().includes(input) : false))
    && (checked ? true : item.duration > 40)
    ))
  }

  return (
    <div className="App">
      <div className="page-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
            <Footer/>
          </Route>
          <Route exact path="/movies">
            <HeaderLogged/>
            <SearchForm filter={filter} />
            <MoviesCardList filtredMovies={filtredMovies} queue={queue} />
            {(queue <= filtredMovies.length) ? <LoadMore queue={queue} step={step} setQueue={setQueue} /> : ''}
            <Footer/>
          </Route>
          <Route exact path="/saved-movies">
            <HeaderLogged/>
            <SearchForm/>
            <MoviesCardList/>
            <LoadMore/>
            <Footer/>
          </Route>
          <Route exact path="/profile">
            <HeaderLogged/>
            <Profile/>
          </Route>
          <Route exact path="/signup">
            <Register/>
          </Route>
          <Route exact path="/signin">
            <Login/>
          </Route>
          <Route exact path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
