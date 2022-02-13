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
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { register, authorize, getToken } from '../../utils/ApiAuth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';
import './App.css';

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({name: '', email: ''});

  const [savedMovies, setSavedMovies] = useState([]);

  const [queue, setQueue] = useState(3);
  const [step, setStep] = useState(3);

  useEffect(() => {
    if (!loggedIn) return;
    api.getUserInfo()
    .then((res) => {
      setCurrentUser({name: res.name, email: res.email});
    })
  }, [loggedIn])

  useEffect(() => {
    api.getSavedMovies()
    .then((savedMoviesAPI) => {
      setSavedMovies(savedMoviesAPI.map((item) => { return {isSaved: true, ...item} }));
    })
    .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getToken(jwt)
      .then((res) => {
          setLoggedIn(true);
          history.push('/');
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
    setMovies(moviesForSearch.filter((item) => (item.nameRU.toLowerCase().includes(input) || (item.nameEN ? item.nameEN.toLowerCase().includes(input) : false))
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
      localStorage.setItem('jwt', res.token);
      setLoggedIn(true);
    })
    .catch((res) => {
      console.log(res);
    })
  }

  const handleEdit = (user) => {
    api.editUserInfo(user.name, user.email)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch(err => console.log(err))
  }

  function handleSignOut () {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/signin');
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
              {/* <Register onSubmitRegister={handleRegisterSubmit} /> */}
            </Route>
            <Route exact path="/signin">
              {loggedIn ? <Redirect to="/movies" /> : <Login loggedIn={loggedIn} onSubmitLogin={handleLoginSubmit} />}
              {/* <Login loggedIn={loggedIn} onSubmitLogin={handleLoginSubmit}/> */}
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
            />
            <ProtectedRoute exact path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              filter={filter}
              handleSaveMovie={handleSaveMovie} 
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
            <Route exact path="/profile">
              <Profile handleSignOut={handleSignOut} handleEdit={handleEdit} />
            </Route>
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
