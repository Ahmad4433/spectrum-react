import React from "react";
import style from "./heroLeft.module.css";
import DetailBox from "./detail-box/DetailBox";
import UserDetail from "../hero-right/user-detail-sec/UserDetail";
import SelectedUsers from "../hero-right/select-users-sec/SelectedUsers";
const HeroLeft = () => {
  return (
    <div className={style.main}>
      <div>
           <DetailBox />
      </div>
      <div className={style.right}>
        <UserDetail />
        <SelectedUsers />
      </div>
    </div>
  );
};

export default HeroLeft;
