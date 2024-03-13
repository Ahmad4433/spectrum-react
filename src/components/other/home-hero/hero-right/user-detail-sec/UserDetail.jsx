import React from "react";
import style from "./userDetail.module.css";
import potrate from "../../../../../assts/potrate.png";

const UserDetail = () => {
  return (
    <div className={style.main}>
      <div>
        <div className={style.viewSec}>
          <div className={style.bars}>
            <span className={style.topBar}></span>
            <span className={style.leftBar}></span>
          </div>
          <div className={style.potrateParent}>
            <div className={style.portateBg}></div>
          </div>
          <div className={style.imageBg}>
            <img src={potrate} className={style.img} alt="selected" />
          </div>
        </div>
      </div>
      <div className={style.tenets}>
        <button>Tenet</button>
        <button>Tenet</button>
        <button>Tenet</button>
        <button>Tenet</button>
      </div>
    </div>
  );
};

export default UserDetail;
