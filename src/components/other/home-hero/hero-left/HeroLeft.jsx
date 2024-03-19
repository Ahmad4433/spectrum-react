import React from "react";
import style from "./heroLeft.module.css";
import DetailBox from "./detail-box/DetailBox";
const HeroLeft = () => {
  return (
    <div className={style.main}>
      <div className={style.info}>
        <h2 className={style.title}>Title.</h2>
      </div>
      <DetailBox />
    </div>
  );
};

export default HeroLeft;
