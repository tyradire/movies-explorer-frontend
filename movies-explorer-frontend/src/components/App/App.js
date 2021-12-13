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
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
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
            <SearchForm/>
            <MoviesCardList/>
            <LoadMore/>
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
        {/* 
        
        <Header/>
        
        
        
        <Promo/>
        <AboutProject/>
        
         */}
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
