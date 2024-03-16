import React, { useEffect, useState } from "react";
import style from "./homeHero2.module.css";
import { Droppable, Draggable } from "react-beautiful-dnd";
import httpAction from "../../../store/action/httpAction";
import { useDispatch, useSelector } from "react-redux";
import apis from "../../../store/utils/apis";

const HomeHero2 = () => {
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const itemId = useSelector((state) => state.drag.itemId);
  const onDeleteItemId = useSelector((state) => state.drag.delteItemId);


  // for reodering array
  const sourceIndex = useSelector(state=>state.drag.sourceIndex)
  const destIndex = useSelector(state=>state.drag.destinationIndex)

  const list2 = apis();
  const data2 = {
    url: list2.userTotalPersonalities,
    method: "POST",
    body: { userId: list2.userId},
  };

  const getPersonalities = async () => {
    const result = await dispatch(httpAction(data2));
    setData(result?.list);
  };

  useEffect(() => {
    getPersonalities();
  }, [onDeleteItemId]);

  useEffect(() => {
    if (itemId && data.length > 8) {
      setData((prevData) => {
        return prevData.filter((data) => data.id !== itemId);
      });
    }
  }, [itemId]);



  // useEffect(() => {
  //   if (sourceIndex !== null && destIndex !== null) {
  //     // Clone the data array to avoid mutating the state directly
  //     const newData = [...data];
      
  //     // Remove the item from its source index
  //     const [removed] = newData.splice(sourceIndex, 1);
      
  //     // Insert the removed item at the destination index
  //     newData.splice(destIndex, 0, removed);
  
  //     // Update the state with the reordered array
  //     setData(newData);
  //   }
  // }, [sourceIndex, destIndex]);

  return (
    <div>
      <div className={style.main}>
        <div className={style.banner}>
          <p>
            <h4 className={style.title}>
              It is a long established fact that a reader will be distracted
            </h4>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            year
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
                    draggableId={`item-${li.id}`}
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
    </div>
  );
};

export default HomeHero2;
