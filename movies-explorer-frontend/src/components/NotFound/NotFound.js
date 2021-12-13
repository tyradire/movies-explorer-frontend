import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <a href="vk.com" className="not-found__link">Назад</a>
    </div>
  );
}

export default NotFound;