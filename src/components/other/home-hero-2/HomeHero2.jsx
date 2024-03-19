import React, { useEffect, useState } from "react";
import style from "./homeHero2.module.css";
import { Droppable, Draggable } from "react-beautiful-dnd";
import httpAction from "../../../store/action/httpAction";
import { useDispatch, useSelector } from "react-redux";
import apis from "../../../store/utils/apis";
import SinglePersonality from "./single-personality/SinglePersonality";

const HomeHero2 = () => {
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const itemId = useSelector((state) => state.drag.itemId);
  const onDeleteItemId = useSelector((state) => state.drag.delteItemId);

  const list2 = apis();
  const data2 = {
    url: list2.userTotalPersonalities,
    method: "POST",
    body: { userId: list2.userId },
  };

  const getPersonalities = async () => {
    const result = await dispatch(httpAction(data2));
    setData(result?.list);
  };

  useEffect(() => {
    getPersonalities();
  }, [onDeleteItemId, itemId]);

  return (
    <div>
      <div className={style.main}>
        <div className={style.banner}>
          <p>
            <h4 className={style.title}>
              The Full Spectrum Leadership Framework encompasses fourteen styles
              of leadership
            </h4>
            each tailored to specific circumstances and challenges. These styles
            allow leaders to adapt their approach to suit different situations.
            Choose the 4 leadership styles that resonate with you right now in
            your leadership journey and drag them over onto your personal
            leadership board.
          </p>
        </div>

        <div className={style.personalities}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className={style.list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {data &&
                  data.map((li, index) => (
                    <Draggable
                      key={index}
                      draggableId={`item-${li.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={style.child}
                        >
                          <SinglePersonality
                            title={li.title}
                            img={li.image}
                            detail={li.detail}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </div>
  );
};

export default HomeHero2;
