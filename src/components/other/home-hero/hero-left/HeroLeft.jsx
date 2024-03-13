import React from "react";
import style from "./heroLeft.module.css";
import DetailBox from "./detail-box/DetailBox";
const HeroLeft = () => {
  return (
    <div className={style.main}>
      <div className={style.info}>
        <h2 className={style.title}>Title.</h2>
        <ul className={style.detailList}>
          <li>Informative paragraph about the activity and what to do</li>
          <li>Option to minimize this one done reading</li>
        </ul>
      </div>
      <DetailBox/>
    </div>
  );
};

export default HeroLeft;
