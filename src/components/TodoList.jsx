import React, { useState,useReducer } from "react";
import CompletedTask from "./CompletedTask/CompletedTask";
import TodoHeader from "./Header/TodoHeader";
import Table from "./Table/Table";

function TodoList() {
  const [taskName, setTaskName] = useState("");
  
  const ACTIONS = {
      SET_TASK:'setTask',
      DEL_TASK:'delTask',
      EDIT_TASK:'editTask'
  }
  function deleteTask(delTask) {
    const newTaskList = task.filter((taskItem) => {
      return taskItem.id != delTask.id;
    });
    dispatchTask({type:ACTIONS.DEL_TASK, payload :newTaskList})
  }
  function editTask(taskID){
    task.filter(task => {
      if(task.id == taskID){
        task.Name = taskName;
      }
    })
    dispatchTask({type:ACTIONS.EDIT_TASK, payload:task});
    setTaskName('');
  }
  function dispatchAddTask(){
    if(taskName!='')
    dispatchTask({type:ACTIONS.SET_TASK, payload :{Name:taskName}})
    setTaskName('');
  }

  const [task, dispatchTask] = useReducer(reducer, []);
  console.log(task);

  function reducer(task, action) {
    switch(action.type){
      case ACTIONS.SET_TASK:
        return [...task,addTask(action.payload.Name)]
      case ACTIONS.DEL_TASK:
        return action.payload
      case ACTIONS.EDIT_TASK:
        return action.payload
    }
  }

  function addTask(name){
    return {id: Date.now(), Name:name, Completed:false};
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTaskName(value);
  }

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Table 
      task={task}
      handleChange={handleChange}
      dispatchAddTask={dispatchAddTask}
      deleteTask={deleteTask}
      editTask={editTask}
      />;
      break;
    case "/completedTask":
      Component = <CompletedTask 
      task={task}
      />;
      break;
  }

  return (
    <React.Fragment>
      <header>
        <TodoHeader />
      </header>
      {/* <nav><TodoNavbar /></nav> */}
      <section>
        {/* <Component
          setCompletedTask={setCompletedTask}
          completedTask={completedTask}
        /> */}
        {Component}
      </section>
      {/* <section><TodoRows /></section>
        <footer><TodoFooter /></footer> */}
    </React.Fragment>
  );
}

export default TodoList;
