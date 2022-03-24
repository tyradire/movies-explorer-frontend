const ERRORS = {
  409: 'Email уже зарегистрирован',
  400: 'Некорректные данные',
  500: 'Ошибка на сервере',
  401: 'Неверные почта или пароль',
  404: 'Данные не найдены'
}

export const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';
export const BASE_URL = 'https://api.cinema.nomoredomains.work';
export const POSTER_URL = 'https://api.nomoreparties.co/';

export const REG_EMAIL = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
export const REG_NAME = /[a-zA-Zа-яА-Я\s-]/;

export default ERRORS;