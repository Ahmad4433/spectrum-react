import React, { useEffect, useState } from "react";
import style from "./detailBox.module.css";

import apis from "../../../../../store/utils/apis";
import { useDispatch, useSelector } from "react-redux";
import httpAction from "../../../../../store/action/httpAction";

const DetailBox = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const list2 = apis();
  const data2 = {
    url: list2.getTenetsList,
  };

  const geteTenets = async () => {
    const result = await dispatch(httpAction(data2));
    setData(result?.list)
  };

  useEffect(() => {
    geteTenets();
  }, []);

  

  return (
    <div className={style.main}>
      <p className={style.box}>
      The first step in creating your directive is to choose a core tenet that resonates with your personal 
values and leadership philosophy. This could be Emotional Intelligence, Ethical Decision-Making, 
Inclusivity and Diversity, or Social Responsibility. This tenet will serve as the foundation of your 
leadership style, influencing how you interpret and apply the various leadership styles.
      </p>

      <div className={style.list}>
        {data && data.map((li, index) => {
          return (
            <div key={index} className={style.uDetail}>
              <img src={li.image} className={style.img} alt={index} />
              <span className={style.name}>{li.title}</span>
              <span className={style.detail}>{li.detail}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailBox;
