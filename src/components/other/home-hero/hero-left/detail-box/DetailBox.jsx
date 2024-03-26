import React, { useEffect, useState } from "react";
import style from "./detailBox.module.css";

import apis from "../../../../../store/utils/apis";
import { useDispatch, useSelector } from "react-redux";
import httpAction from "../../../../../store/action/httpAction";
import { tenetActions } from "../../../../../store/slices/tenets-sllice";
import { Draggable, Droppable } from "react-beautiful-dnd";
import potrate from "../../../../../assts/potrate.png";
import potrateBg from "../../../../../assts/potratebg.png";
import UserDetail from "../../hero-right/user-detail-sec/UserDetail";

const DetailBox = () => {
  const [data, setData] = useState();
  const [newItems, setNewItems] = useState();
  const itemId = useSelector((state) => state.tenet.itemId);
  const onDeleteId = useSelector((state) => state.tenet.onDeleteId);
  const isSelectedTene = useSelector((state) => state.tenet.isSelected);

  const dispatch = useDispatch();
  const list2 = apis();
  const data2 = {
    url: list2.getUserTotalTenets,
    method: "POST",
    body: { userId: list2.userId },
  };
  // get user tenets
  const geteTenets = async () => {
    const result = await dispatch(httpAction(data2));
    setData(result?.list);
  };
  useEffect(() => {
    geteTenets();
  }, []);

  useEffect(() => {
    if (data && data.length <= 3) {
      dispatch(tenetActions.setSelected(true));
    }
  }, [data]);

  useEffect(() => {
    if (itemId) {
      setData((prevData) => {
        return prevData.filter((item) => item.id !== itemId);
      });
    }
  }, [itemId]);

  const getAllTenets = async () => {
    const newData = {
      url: list2.getTenetsList,
    };
    const result = await dispatch(httpAction(newData));

    setNewItems(result?.list);
  };
  useEffect(() => {
    getAllTenets();
  }, []);

  useEffect(() => {
    if (onDeleteId) {
      const findeDItem = newItems?.find((item) => item.id === onDeleteId);
      setData((prevData) => {
        return [...prevData, findeDItem];
      });
    }
  }, [onDeleteId]);

  return (
    <div className={style.main}>
      <Droppable droppableId="tenets">
        {(provided) => (
          <div
            className={style.listParent}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <p className={style.dragTitle}>Drag Tenet from here</p>
            {data && data.length === 3 && (
              <span className={style.dragTitle}>
                You can choice only one Tenet
              </span>
            )}
            <div className={style.list}>
              {data &&
                data.map((li, index) => {
                  return (
                    <Draggable
                      isDragDisabled={isSelectedTene}
                      key={index}
                      index={index}
                      draggableId={`item-${li.id}`}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          key={index}
                          className={style.uDetail}
                        >
                          <img
                            src={li.image}
                            className={style.img}
                            alt={index}
                          />
                          <span className={style.name}>{li.title}</span>
                          <span className={style.detail}>{li.detail}</span>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
            </div>
          </div>
        )}
      </Droppable>

      <div className={style.left}>
        <div className={style.viewSec}>
          <img src={potrate} className={style.userImg} alt="selected" />
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
