import './AboutMe.css';
import profilePhoto from '../../images/profile-photo.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <div className="about-me__social">
            <a href="https://facebook.com" className="about-me__link">Facebook</a>
            <a href="https://github.com/tyradire" className="about-me__link">Github</a>
          </div>
        </div>
        <img src={profilePhoto} alt="Фото профиля" className="about-me__photo"/>
      </div>
    </div>
  );
}

export default AboutMe;