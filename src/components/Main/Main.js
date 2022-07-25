import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { useRef } from 'react';

function Main() {

  const scrollRef = useRef(null)

  return (
    <>
      <Promo scroll={scrollRef}/>
      <AboutProject scroll={scrollRef}/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </>
  );
}

export default Main;