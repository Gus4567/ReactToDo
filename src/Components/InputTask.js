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
    <>
      <form className="task-form">
        Task:{" "}
        <input
          value={input}
          onChange={handleChange}
          placeholder="add new task"
        />
        <input type="submit" value="Agregar" onClick={handleTask}></input>
      </form>
    </>
  );
};

export default InputTask;
