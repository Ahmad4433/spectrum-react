import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo from '../../../assts/logo.png'
const Header = () => {
  return (
    <div className={style.main}>
        
      <div className={style.header}>
      <img src={logo} className={style.logo} alt="logo" />
        <div className={style.navMain}>
          <div className={style.navigations}>
            <Link className={style.navItem}>Home</Link>
            <Link className={style.navItem}>My Directive</Link>
            <Link className={style.navItem}>Tools & Resources</Link>
          </div>
          <div className={style.search}>
            <CiSearch className={style.sIcon} />
            <input
              type="text"
              placeholder="Search..."
              className={style.searchBar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
