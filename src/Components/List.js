import React, { Fragment } from "react";
import ListOfToDo from "./ToDoList";
const List = ({ taskList }) => {
  console.log(taskList);

  return (
    <>
      
        {taskList.map((task) => (
          <ListOfToDo text={task.task} />
        ))}
      
    </>
  );
};

export default List;
