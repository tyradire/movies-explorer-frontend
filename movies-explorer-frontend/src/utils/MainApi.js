class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    this._headers.authorization = localStorage.getItem('jwt');
    return fetch(this._url+'/users/me', {
      headers: this._headers
    }).then(this._handleResponse)
  }

  editUserInfo(name, email) {
    this._headers.authorization = localStorage.getItem('jwt');
    return fetch(this._url+'/users/me', {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(this._handleResponse)
  }

  saveNewMovie(movie) {
    this._headers.authorization = localStorage.getItem('jwt');
    return fetch(this._url+'/movies', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country || 'Unknown',
        director: movie.director || 'Unknown',
        duration: movie.duration || 1,
        year: movie.year || 'Unknown',
        description: movie.description || 'No description',
        image: movie.image,
        trailer: movie.trailerLink || 'https://www.youtube.com/',
        thumbnail: movie.image,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || 'No name',
      }),
    }).then(this._handleResponse)
  }

  deleteMovie(movieId) {
    this._headers.authorization = localStorage.getItem('jwt');
    return fetch(this._url+`/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._handleResponse)
  }

  changeMovieSaveStatus (isSaved, data) {
    return isSaved ? this.deleteMovie(data) : this.saveNewMovie(data);
  }

  getSavedMovies() {
    this._headers.authorization = localStorage.getItem('jwt');
    return fetch(this._url+`/movies`, {
      headers: this._headers
    }).then(this._handleResponse)
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status, res.name);
  }
}

const api = new Api ({
  baseUrl: 'https://api.cinema.nomoredomains.work',
  headers: {
    authorization: localStorage.getItem('jwt'),
    'Content-Type': 'application/json',
    Accept: 'application/json', //nado??
  }
});

export default api;