import React from "react";
import style from "./homeHero.module.css";
import HeroLeft from "./hero-left/HeroLeft";
import HeroRight from "./hero-right/HeroRight";
import UserDetail from "./hero-right/user-detail-sec/UserDetail";
const HomeHero = () => {
  return (
    <div>
      <p className={style.box}>
        <p className={style.p1}>
          The first step in creating your directive is to choose a core tenet
          that resonates with your personal values and leadership philosophy.
        </p>
        <p className={style.p2}>
          This could be Emotional Intelligence, Ethical Decision-Making,
          Inclusivity and Diversity, or Social Responsibility. This tenet will
          serve as the foundation of your leadership style, influencing how you
          interpret and apply the various leadership styles.
        </p>
        <p className={style.p3}>
          Hover over the 4 tenets below and choose one which resonates with
          there you are in your personal leadership journey then drag your
          chosen tenet into your Leadership board.
        </p>
      </p>

      <div className={style.main}>
        <HeroLeft />
      </div>
    </div>
  );
};

export default HomeHero;
