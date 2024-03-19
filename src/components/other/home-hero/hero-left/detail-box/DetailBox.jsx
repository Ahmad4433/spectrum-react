import React, { useEffect, useState } from "react";
import style from "./detailBox.module.css";

import apis from "../../../../../store/utils/apis";
import { useDispatch, useSelector } from "react-redux";
import httpAction from "../../../../../store/action/httpAction";

import { Draggable, Droppable } from "react-beautiful-dnd";

const DetailBox = () => {
  const [data, setData] = useState();
  const [newItems, setNewItems] = useState();
  const itemId = useSelector((state) => state.tenet.itemId);
  const onDeleteId = useSelector((state) => state.tenet.onDeleteId);

  const dispatch = useDispatch();
  const list2 = apis();
  const data2 = {
    url: list2.getUserTotalTenets,
    method: "POST",
    body: { userId: list2.userId },
  };
  const geteTenets = async () => {
    const result = await dispatch(httpAction(data2));
    setData(result?.list);
  };
  useEffect(() => {
    geteTenets();
  }, []);

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
      <p className={style.box}>
        <p className={style.p1}>
          The first step in creating your directive is to choose a core tenet
          that resonates with your personal values and leadership philosophy.
        </p>
        <p className={style.p2}>
          This could be Emotional Intelligence, Ethical Decision-Making,
          Inclusivity and Diversity, or Social Responsibility. This tenet will
          serve as the foundation of your leadership style, influencing how you
          interpret and apply the various leadership styles.
        </p>
        <p className={style.p3}>
          Hover over the 4 tenets below and choose one which resonates with
          there you are in your personal leadership journey then drag your
          chosen tenet into your Leadership board.
        </p>
      </p>

      <Droppable droppableId="tenets">
        {(provided) => (
          <div
            className={style.listParent}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <p className={style.dragTitle}>Drag Tenet from here</p>
            <div className={style.list}>
              {data &&
                data.map((li, index) => {
                  return (
                    <Draggable
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
    </div>
  );
};

export default DetailBox;
