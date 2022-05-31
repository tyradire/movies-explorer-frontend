import './AboutMe.css';
import profilePhoto from '../../images/profile-photo.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__name">Даниил</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">Дизайн интерьеров в ПО пробудил интерес к html-вёрстке. 
            Попробовав себя во внесении правок и поддержке сайта решил углубиться в эту сферу. 
            Стал развивать навыки с помощью обучающих материалов, в том числе курсов Я.Практикум, видео-уроков, руководств.</p>
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