import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.bar}></div>
      <p className={style.copy} >&copy; 2024 All rights reserved.</p>
    </div>
  );
};

export default Footer;
