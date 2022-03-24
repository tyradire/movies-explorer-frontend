import './Techs.css';

function Techs() {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__container">
        <p className="techs__subtitle">7 технологий</p>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className="techs__list">
        <p className="techs__item">HTML</p>
        <p className="techs__item">CSS</p>
        <p className="techs__item">JS</p>
        <p className="techs__item">React</p>
        <p className="techs__item">Git</p>
        <p className="techs__item">Express.js</p>
        <p className="techs__item">MongoDB</p>
      </div>
    </div>
  );
}

export default Techs;
