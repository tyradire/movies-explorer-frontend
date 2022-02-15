import Header from '../Header/Header';
import HeaderLogged from '../HeaderLogged/HeaderLogged';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import { register, authorize, getToken } from '../../utils/ApiAuth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';
import './App.css';

function App() {

  const history = useHistory();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({name: '', email: ''});

  const [isLoading, setIsLoading] = useState(true);

  const [savedMovies, setSavedMovies] = useState([]);

  const [queue, setQueue] = useState(3);
  const [step, setStep] = useState(3);
  const [isEmptyResult, setIsEmptyResult] = useState(false);

  useEffect(() => {
    if (!loggedIn) return;
    api.getUserInfo()
    .then((res) => {
      setCurrentUser({name: res.name, email: res.email});
    })
  }, [loggedIn])

  useEffect(() => {
    if (!loggedIn) return;
    api.getSavedMovies()
    .then((savedMoviesAPI) => {
      setSavedMovies(savedMoviesAPI.map((item) => { return {isSaved: true, ...item} }));
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
      if (err === 404) setSavedMovies([]);
    });
  }, [loggedIn])

  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getToken(jwt)
      .then((res) => {
          setLoggedIn(true);
          history.push(path);
        })
      .catch(err => console.log(err))
    }
  }, []);

  const handleSaveMovie = (isSaved, movie) => {
    api.changeMovieSaveStatus(isSaved, isSaved ? savedMovies.find((item) => item.movieId == movie.movieId)._id : movie)
    .then((res) => {
      if (!isSaved) setSavedMovies([{isSaved: true, ...res}, ...savedMovies])
      else setSavedMovies(savedMovies.filter(elem => elem.movieId !== res.movieId))
    })
    .catch((err) => console.log(err))
  }

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

  const filter = (input, checked, moviesForSearch, setMovies) => {
    input = input.toLowerCase();
    const filtredMovies = moviesForSearch.filter((item) => (item.nameRU.toLowerCase().includes(input) || (item.nameEN ? item.nameEN.toLowerCase().includes(input) : false))
    && (checked ? true : item.duration > 40)
    )
    setMovies(filtredMovies)
    filtredMovies.length > 0 ? setIsEmptyResult(false) : setIsEmptyResult(true) ;
  }

  const handleRegisterSubmit = (name, email, password) => {
    register({ name, email, password })
    .then(() => {
      handleLoginSubmit(email, password);
    })
    .catch((res) => {
      console.log(res)
    })
  }

  const handleLoginSubmit = (email, password) => {
    authorize({ email, password })
    .then((res) => {
      localStorage.setItem('jwt', res.token);
      setLoggedIn(true);
    })
    .catch((res) => {
      console.log(res);
    })
  }

  const handleEdit = (user, button) => {
    api.editUserInfo(user.name, user.email)
    .then((res) => {
      setCurrentUser(res);
      button.textContent = `Данные сохранены`;
      setTimeout(() => button.textContent = `Редактировать`, 2000);
    })
    .catch(err => console.log(err))
  }

  function handleSignOut () {
    localStorage.removeItem('jwt');
    localStorage.removeItem('inputRequest');
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page-container">
          <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            {loggedIn ? <HeaderLogged /> : <Header />}
          </Route>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/signup">
              {loggedIn ? <Redirect to="/movies" /> : <Register onSubmitRegister={handleRegisterSubmit} />}
            </Route>
            <Route exact path="/signin">
              {loggedIn ? <Redirect to="/movies" /> : <Login loggedIn={loggedIn} onSubmitLogin={handleLoginSubmit} />}
            </Route>
            <ProtectedRoute exact path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              filter={filter}
              handleSaveMovie={handleSaveMovie}
              savedMovies={savedMovies}
              queue={queue}
              step={step}
              setQueue={setQueue}
              isEmptyResult={isEmptyResult}
              setIsEmptyResult={setIsEmptyResult}
            />
            <ProtectedRoute exact path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              filter={filter}
              handleSaveMovie={handleSaveMovie} 
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              isEmptyResult={isEmptyResult}
              setIsEmptyResult={setIsEmptyResult}
            />
            <ProtectedRoute exact path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              handleSignOut={handleSignOut}
              handleEdit={handleEdit}
            />
            <Route exact path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Route exact path={['/', '/movies', '/saved-movies']}>
            <Footer />
          </Route>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
