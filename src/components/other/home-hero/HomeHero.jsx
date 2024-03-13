import React from "react";
import style from "./homeHero.module.css";
import HeroLeft from "./hero-left/HeroLeft";
import HeroRight from "./hero-right/HeroRight";
const HomeHero = () => {
  return (
    <div className={style.main}>
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default HomeHero;
