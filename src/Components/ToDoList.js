import React, { Fragment } from "react";

const ListOfTodo = ({ text }) => {
  return (
    <>
      <ul className="task-list">
        {text}
      </ul>
    </>
  );
};

export default ListOfTodo;
