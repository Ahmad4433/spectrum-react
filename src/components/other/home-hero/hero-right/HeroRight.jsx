import React from "react";
import style from "./heroRight.module.css";
import SelectedUsers from "./select-users-sec/SelectedUsers.jsx";
import UserDetail from "./user-detail-sec/UserDetail.jsx";
const HeroRight = () => {
  return (
    <div className={style.main}>
      <UserDetail  />
      <SelectedUsers />
    </div>
  );
};

export default HeroRight;
