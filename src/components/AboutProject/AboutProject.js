import './AboutProject.css';

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__wrapper">
        <article className="about-project__cell">
          <h2 className="about-project__subtitle">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="about-project__cell">
          <h2 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timeline">
          <div className="about-project__backend">
            <div className="about-project__backend-time">1 неделя</div>
            <p className="about-project__timeline-subtitle">Back-end</p>
          </div>
          <div className="about-project__frontend">
            <div className="about-project__frontend-time">4 недели</div>
            <p className="about-project__timeline-subtitle">Front-end</p>
          </div>
        </div>
    </div>
  );
}

export default AboutProject;
