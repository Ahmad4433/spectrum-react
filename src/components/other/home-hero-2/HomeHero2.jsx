import React, { useEffect, useState } from "react";
import style from "./homeHero2.module.css";
import avatar from "../../../assts/avatar.png";


import httpAction from "../../../store/action/httpAction";
import { useDispatch, useSelector } from "react-redux";
import apis from "../../../store/utils/apis";

const HomeHero2 = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const list2 = apis();
  const data2 = {
    url: list2.getPersonalities,
  };

  const getPersonalities = async () => {
    const result = await dispatch(httpAction(data2));
    setData(result?.list)
  };

  useEffect(() => {
    getPersonalities();
  }, []);



  

  return (
    <div className={style.main}>
      <div className={style.banner}>
        <p>
          <h4 className={style.title}>
            It is a long established fact that a reader will be distracted
          </h4>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the year
        </p>
      </div>

      <div className={style.list}>
        {data && data.slice(6,14).map((li, index) => {
          return (
            <div  key={index} className={style.uDetail}>
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

export default HomeHero2;
