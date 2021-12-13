import './Promo.css';
import webEarth from '../../images/web-earth.svg';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__main">
        <img src={webEarth} alt="Веб Земля" className="promo__image"/>
        <div className="promo__info">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
      </div>
      <button type="submit" className="promo__more">Узнать больше</button>
    </div>
  );
}

export default Promo;
