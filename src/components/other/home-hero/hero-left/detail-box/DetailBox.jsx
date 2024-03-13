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
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English
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
