import React, { Fragment } from "react"
import ListOfToDo from "./ListToShow"
const List = ({ taskList }) => {
  console.log(taskList)
  
  return (
    <Fragment>
    <ul className='task-list'>
      
        
        {taskList.map(task => (
          <ListOfToDo text={task.task}/>
          ))}
     
      
    </ul>
    </Fragment>
  );
};

export default List;
