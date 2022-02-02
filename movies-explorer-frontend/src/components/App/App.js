import HeaderLogged from '../HeaderLogged/HeaderLogged';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoadMore from '../LoadMore/LoadMore';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
//import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getMovies } from '../../utils/MoviesApi';
import { register, authorize } from '../../utils/ApiAuth';
import './App.css';

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

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

  const handleRegisterSubmit = (name, email, password) => {
    register({ name, email, password })
    .then(() => {
      history.push('/signin');
    })
    .catch((res) => {
      console.log(res)
    })
  }

  const handleLoginSubmit = (email, password) => {
    authorize({ email, password })
    .then((res) => {
      console.log(res);
      setLoggedIn(true);
      //history.push('/movies');
    })
    .catch((res) => {
      console.log(res);
    })
  }

  return (
    <div className="App">
      <div className="page-container">
        <Switch>
          <Route exact path="/signup">
            {/* {loggedIn ? <Redirect to="/movies" /> : <Register onSubmitRegister={handleRegisterSubmit} />} */}
            <Register onSubmitRegister={handleRegisterSubmit} />
          </Route>
          <Route exact path="/signin">
            {/* {loggedIn ? <Redirect to="/movies" /> : <Login loggedIn={loggedIn} onSubmitLogin={handleLoginSubmit} />} */}
            <Login loggedIn={loggedIn} onSubmitLogin={handleLoginSubmit}/>
          </Route>
          <Route exact path="/">
            <Main />
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
          <Route exact path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
