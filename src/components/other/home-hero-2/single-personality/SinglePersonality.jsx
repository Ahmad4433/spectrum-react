import React, { useState } from "react";
import style from './singlePersonality.module.css'
const SinglePersonality = ({ img, title, detail }) => {

const [isExp,setIsExp] = useState(false)

const expHandler = ()=>{

    setIsExp(!isExp)
}


  return (
    <div className={style.uDetail}>
    
      <img src={img} className={style.img} alt={`item-`} />
      <span className={style.name}>{title}</span>
      <span className={isExp ? style.exp:style.detail}>{detail}</span>
      <span onClick={expHandler} className={style.more} >{isExp ?'Read Less..':'Read More...'}</span>
    </div>
  );
};

export default SinglePersonality;
