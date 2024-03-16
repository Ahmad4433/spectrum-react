import React, { useEffect, useState } from "react";
import style from "./userDetail.module.css";
import potrate from "../../../../../assts/potrate.png";

import { IoIosRemoveCircleOutline } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";

import { Droppable, Draggable } from "react-beautiful-dnd";
import apis from "../../../../../store/utils/apis";
import httpAction from "../../../../../store/action/httpAction";
import { tenetActions } from "../../../../../store/slices/tenets-sllice";

const UserDetail = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const itemId = useSelector((state) => state.tenet.itemId);

  const apiList = apis();

  const tenetListData = {
    url: apiList.getTenetsList,
  };
  const getTenetsList = async () => {
    const result = await dispatch(httpAction(tenetListData));

    if (itemId) {
      const findedenet = result?.list.find((ten) => ten.id === itemId);
      setItems((prevItems) => [...prevItems, findedenet]);
    }
  };
  useEffect(() => {
    getTenetsList();
  }, [itemId]);

  const data = {
    url: apiList.getUserTenetsList,
    method: "POST",
    body: { userId: apiList.userId },
  };
  const getTenets = async () => {
    const result = await dispatch(httpAction(data));
    setItems(result?.list);
  };
  useEffect(() => {
    getTenets();
  }, []);

  const addUserTenetData = {
    url: apiList.addUserTenet,
    method: "POST",
    body: { tenId: itemId, userId: apiList.userId },
  };
  const addUserTen = async () => {
    await dispatch(httpAction(addUserTenetData));
  };
  useEffect(() => {
    if (itemId) {
      addUserTen();
    }
  }, [itemId]);

  const deleteTeneHandler = async (id) => {
    const deleteTentData = {
      method: "POST",
      body: { tenId: id },
      url: apiList.deleteUserTenet,
    };
    dispatch(tenetActions.setOndeleteId(id))
    await dispatch(httpAction(deleteTentData));

    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });

      
  };

  return (
    <div className={style.main}>
      <div>
        <div className={style.viewSec}>
          <div className={style.bars}>
            <span className={style.topBar}></span>
            <span className={style.leftBar}></span>
          </div>
          <div className={style.potrateParent}>
            <div className={style.portateBg}></div>
          </div>
          <div className={style.imageBg}>
            <img src={potrate} className={style.img} alt="selected" />
          </div>
        </div>
      </div>
      <Droppable droppableId="tenetArray">
        {(provided) => (
          <div
            className={style.tenets}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items &&
              items.map((ten, index) => {
                return (
                  <div className={style.tenet} key={index}>
                    <img src={ten.image} className={style.telImage} />
                    <p>{ten.title}</p>

                    <span>
                      <IoIosRemoveCircleOutline
                        onClick={() => deleteTeneHandler(ten.id)}
                        className={style.removeIcon}
                      />
                    </span>
                  </div>
                );
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default UserDetail;
