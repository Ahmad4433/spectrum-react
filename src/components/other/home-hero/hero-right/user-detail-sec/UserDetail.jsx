import React, { useEffect, useState } from "react";
import style from "./userDetail.module.css";
import potrate from "../../../../../assts/potrate.png";

import { IoIosRemoveCircleOutline } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";

import { Droppable, Draggable } from "react-beautiful-dnd";
import apis from "../../../../../store/utils/apis";
import httpAction from "../../../../../store/action/httpAction";
import { tenetActions } from "../../../../../store/slices/tenets-sllice";

const UserDetail = ({ isProfile, isCenter }) => {
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
    if (items && items.length >= 1) {
      return;
    }
    await dispatch(httpAction(addUserTenetData));
    dispatch(tenetActions.setSelected(true));
  };
  useEffect(() => {
    if (items && items.length >= 1) {
      return;
    }
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
    dispatch(tenetActions.setOndeleteId(id));
    await dispatch(httpAction(deleteTentData));
    dispatch(tenetActions.setSelected(false));

    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });

    window.location.reload();
  };

  return (
    <div className={style.main}>
      <Droppable droppableId="tenetArray">
        {(provided) => (
          <div
            className={style.tenets}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <p className={style.leaderTitle}>My Leadership Styles</p>

            {items &&
              items
                .slice()
                .reverse()
                .map((ten, index) => {
                  return (
                    <div>
                      <div className={style.tenet} key={index}>
                        <div className={style.imaseSec}>
                          <img src={ten.image} className={style.telImage} />
                          <span>
                            <IoIosRemoveCircleOutline
                              onClick={() => deleteTeneHandler(ten.id)}
                              className={style.removeIcon}
                            />
                          </span>
                        </div>
                        <p className={style.title}>{ten.title}</p>
                        <p>{ten.detail}</p>
                      </div>
                    </div>
                  );
                })}
            {provided.placeholder}
            {items?.length === 0 && (
              <div className={style.tenetDummy}>Drop Tenet Here</div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default UserDetail;
