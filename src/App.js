import React, {useState} from "react"
import "./App.css";
import InputTask from "./Components/ThingToDo";
import List from "./Components/ListOfTask"


const App = () => {
  const [input, setInput] = useState('')
  const [taskList, setTaskList]= useState([])
  return(
    <div className="taskList">
      
      <InputTask taskList={taskList} setTaskList={setTaskList} input={input} setInput={setInput} />
      <List taskList={taskList}/>
      
    </div>
    
    
  );
};

export default App;
