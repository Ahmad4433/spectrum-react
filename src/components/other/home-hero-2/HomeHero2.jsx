import React, { useEffect, useState } from "react";
import style from "./homeHero2.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import httpAction from "../../../store/action/httpAction";
import { useDispatch } from "react-redux";
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
    setData(result?.list);
  };

  useEffect(() => {
    getPersonalities();
  }, []);

  // Reorder the data array based on the drag and drop result
  const reorderData = (list, startIndex, endIndex) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    return result;
  };

  // Handle drag end event
  const onDragEnd = (result) => {
    console.log(result);
    // Dropped outside the list
    if (!result.destination) {
      return;
    }

    const newData = reorderData(
      data,
      result.source.index,
      result.destination.index
    );

    setData(newData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={style.main}>
          <div className={style.banner}>
            <p>
              <h4 className={style.title}>
                It is a long established fact that a reader will be distracted
              </h4>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the year
            </p>
          </div>

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
                      draggableId={`item-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={style.uDetail}
                        >
                          <img
                            src={li.image}
                            className={style.img}
                            alt={`item-${index}`}
                          />
                          <span className={style.name}>{li.title}</span>
                          <span className={style.detail}>{li.detail}</span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default HomeHero2;



