import React, { useEffect, useState } from "react";
import style from "./selectedUser.module.css";

import apis from "../../../../../store/utils/apis";
import { useDispatch, useSelector } from "react-redux";
import httpAction from "../../../../../store/action/httpAction";
import { dragActions } from "../../../../../store/slices/drag-slice";

const SelectedUsers = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
 


  const list2 = apis();

  const data2 = {
    url: list2.getPersonalities,
  };

  const getPersonalities = async () => {
    const result = await dispatch(httpAction(data2));
    setData(result?.list);
  };

  useEffect(() => {
    getPersonalities();
  }, []);






  return (
    <div  id="dropzone" className={style.main}>
      <div   className={style.list}>
        {data &&
          data.slice(0, 0).map((li, index) => {
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

export default SelectedUsers;
