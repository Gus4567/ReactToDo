import React, {Fragment} from "react";


const ListOfTodo = ({ text }) => {
    
    return (
      <Fragment>
      <ul className='task-list'>
        <li>
        {text}
        </li>
      </ul>
      </Fragment>
    );
  };
  

  export default ListOfTodo;