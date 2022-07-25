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
            <p className="about-me__profession">Фронтенд-разработчик, 31 год</p>
            <p className="about-me__description">Долгое время я работал в мебельном салоне.
              В работе часто приходилось просматривать сайты поставщиков и в них я улавливал какие-то интересные реализации и дизайнерские решения.
              Несколько раз была необходимость срочно внести правки на сайте салона. Меня крайне увлёк и захватил этот процесс.
              Появилась заинтересованность в вёрстке, захотелось понять как всё устроено и работает.
              Интерес только возрастал и перерос в увлечение. Я преумножал свои знания, верстал просто для себя различные странички.
              Серьёзным шагом вперёд стала запись на большой курс по фронтенду. Параллельно с ним я изучал новое для себя по видео-урокам и руководствам.
              Закончив курс и успешно реализовав несколько проектов (от курса и самостоятельных), я твёрдо решил, что фронтенд - это то, чем я бы хотел заниматься.
            </p>
          </div>
          <div className="about-me__social">
            <a href="https://github.com/tyradire" className="about-me__link">Github</a>
          </div>
        </div>
        <img src={profilePhoto} alt="Фото профиля" className="about-me__photo"/>
      </div>
    </div>
  );
}

export default AboutMe;