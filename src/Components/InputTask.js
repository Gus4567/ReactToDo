import React, { useState, Fragment } from "react";


const InputTask = ({ input, setInput, taskList, setTaskList }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { task: input }]);
  
   setInput("");
  };
  return (
    <Fragment>
      <form className="task-form">
        <label>
          Task: <input  value={input} onChange={handleChange} placeholder="add new task" />
          <input type="submit" value="Agregar" onClick={handleTask}></input>
        </label>
      </form>
    </Fragment>
  );
};

export default InputTask;
