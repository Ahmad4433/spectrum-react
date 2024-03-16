import React, { useEffect, useState } from "react";
import style from "./selectedUser.module.css";

import apis from "../../../../../store/utils/apis";
import { useDispatch, useSelector } from "react-redux";
import httpAction from "../../../../../store/action/httpAction";
import { dragActions } from "../../../../../store/slices/drag-slice";
import { Droppable } from "react-beautiful-dnd";
import { IoIosRemoveCircleOutline } from "react-icons/io";


const SelectedUsers = () => {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
  const [dragged, setDragged] = useState([]);

  const dispatch = useDispatch();

  const itemsId = useSelector((state) => state.drag.itemId);

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

  const getUserPersoData = {
    url: list2.userPersonalityList,
    method: "POST",
    body: { userId: list2.userId},
  };

  const getUserPerso = async () => {
    const result = await dispatch(httpAction(getUserPersoData));
    setSelected(result?.list);

    setDragged(result?.list);
  };

  useEffect(() => {
    getUserPerso();
  }, []);

  const addUserPersonality = async (id) => {
    if (dragged && dragged.length >= 6) {
      return;
    }

    const addPersonalityData = {
      url: list2.addUserPersonality,
      method: "POST",
      body: { userId: list2.userId, perId: id },
    };

    await dispatch(httpAction(addPersonalityData));
  };

  useEffect(() => {
    if (dragged && dragged.length >= 6) {
      return;
    }
    if (itemsId) {
      const findedItem = data?.find((li) => li.id === itemsId);
      setDragged((prevDragged) => [...prevDragged, findedItem]);
      addUserPersonality(itemsId);
    }
  }, [itemsId]);

  const deletePerHandler = async (id) => {
    const deleteData = {
      url: list2.deleteUserPersonality,
      method: "POST",
      body: { perId: id },
    };

    await dispatch(httpAction(deleteData));

    setDragged((prevDrag) => {
      return prevDrag.filter((item) => item.id !== id);
    });
    dispatch(dragActions.setOndeleteItem(id));
   
  };

  return (
    <Droppable droppableId="someid">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          id="dropzone"
          className={style.main}
        >
          <div className={style.list}>
            {dragged &&
              dragged.map((li, index) => {
                return (
                  <div key={index} className={style.uDetail}>
                    <span className={style.delete}>
                      {
                        <IoIosRemoveCircleOutline
                          onClick={() => deletePerHandler(li.id)}
                          className={style.deleteIcon}
                        />
                      }
                    </span>
                    <img src={li?.image} className={style.img} alt={index} />
                    <span className={style.name}>{li?.title}</span>
                    <span className={style.detail}>{li?.detail}</span>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default SelectedUsers;
