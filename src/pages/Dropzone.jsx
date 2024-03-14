import React from "react";
import { Droppable } from "react-beautiful-dnd";
import style from "./dropZone.module.css"; 
const DropZone = () => {
  return (
    <Droppable droppableId="dropZoneId">
      {(provided) => (
        <div
          className={style.dropZone} 
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <p>Drop items here</p>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DropZone;
