import { MOVIES_API } from '../utils/constants';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = () => {
  return fetch(`${MOVIES_API}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    return checkResponse(res);
  });
}

export const test = () => {
  return true;
}