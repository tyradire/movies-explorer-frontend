import './NotFound.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  const goBackHandler = () => {
    history.go(-2);
  }
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <button onClick={goBackHandler} className="not-found__link">Назад</button>
    </div>
  );
}

export default NotFound;