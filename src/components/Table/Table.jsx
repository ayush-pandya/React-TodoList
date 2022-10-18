import React, { useState,useEffect } from "react";
import Row from "../Row/Row";

function Table() {
  const [task, setTask] = useState([]);
  const [taskEdit,setTaskEdit] = useState("");
  const [taskName, setTaskName] = useState("");
  const [emptyInput, setEmptyInput] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => { 
    const incompleteTaskList= task.filter(task => {
      console.log(task);
      return task.Completed != true;
    })
    setTask(incompleteTaskList);
  }, [])
  
  function editTask(taskID) {
    setIsEditing(true);
    document.getElementById(taskID).readOnly = false;
  }
  function deleteTask(delTask) {
    const newTaskList = task.filter((taskItem) => {
      return taskItem.Name != delTask.Name;
    });
    setTask(newTaskList);
  }
  function addTask() {
    if (emptyInput && taskName !== "") setTask([...task, { Name: taskName, Completed:false }]);
    setEmptyInput(false);
   
  }
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "add-task") {
      setEmptyInput(true);
      setTaskName(value);
    }else if(isEditing){
      setTaskEdit(value);
      task[name]["Name"] = value;
    }
  }
  return (
    <React.Fragment>
      <div className="flex-col">
        <div className="flex w-3/4 m-auto">
          <div className="bg-gradient-to-br from-green-400 to-blue-600 flex  p-0.5 mb-2 mr-2 mt-2 ml-2 rounded-lg grow">
            <input
              type="text"
              id="success"
              name="add-task"
              className="h-12 dark:bg-gray-900 font-medium rounded-lg pl-3 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 bg-white dark:text-white w-full"
              placeholder="Task"
              onChange={handleChange}
            ></input>
          </div>

          <button
            className="relative inline-flex items-center justify-center p-0.5  mb-2 mr-2 mt-2 ml-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white w-200"
            onClick={() => addTask()}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add
            </span>
          </button>
        </div>
        <br />
        {task.map((task, index) => (
          <Row
            task={task}
            deleteTask={() => deleteTask(task)}
            editTask={() => editTask(index)}
            id={index}
            handleChange={handleChange}
            key = {index}
            isEditing={isEditing}
            setIsEditing={() => setIsEditing}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Table;
