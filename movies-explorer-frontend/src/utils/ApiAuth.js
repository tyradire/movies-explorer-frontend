export const BASE_URL = 'https://api.cinema.nomoredomains.work';

export const register = ({ name, email, password }) => {
  console.log('mitut');
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then((response) => {
    return checkResponse(response);
  })
}

export const authorize = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then((response) => {
    return checkResponse(response);
  })
}

const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}