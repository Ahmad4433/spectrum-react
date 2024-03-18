import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo from '../../../assts/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Header = () => {

const [isOpen,setIsOpen] = useState(false)


const menuOpenHandler = ()=>{

  setIsOpen(true)

}

const menuCloseHandler = ()=>{

  setIsOpen(false)
}


useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    
    document.body.style.overflow = "auto";
  }
}, [isOpen]);

  return (
    <div className={style.main}>
        
      <div className={style.header}>
    <div className={isOpen ? style.mobileHeader :style.mobileHeaderHide} >
  <div className={style.close} >
  <IoClose onClick={menuCloseHandler} className={style.closeIcon} />
  </div>

  <div className={style.navigationsMobile}>
            <Link className={style.navItem}>Home</Link>
            <Link className={style.navItem}>My Directive</Link>
            <Link className={style.navItem}>Tools & Resources</Link>
          </div>


       <div className={style.searchParent} >

       <div className={style.searchMobile}>
            <CiSearch className={style.sIcon} />
            <input
              type="text"
              placeholder="Search..."
              className={style.searchBarMobile}
            />
          </div>

       </div>


    </div>

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
          <div className={style.menu} >
    <IoMenu onClick={menuOpenHandler} className={style.menuIcon} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
