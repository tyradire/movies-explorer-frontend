class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }
}



const api = new Api ({
  baseUrl: 'https://cinema.nomoredomains.work',
  headers: {
    authorization: localStorage.getItem('jwt'),
    'Content-Type': 'application/json'
  }
});

export default api;