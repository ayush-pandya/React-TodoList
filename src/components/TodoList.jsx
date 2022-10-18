import React, { useState } from "react";
import CompletedTask from "./CompletedTask/CompletedTask";
import TodoHeader from "./Header/TodoHeader";
import Table from "./Table/Table";

function TodoList() {
  const [completedTask, setCompletedTask] = useState([]);

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Table;
      break;
    case "/completedTask":
      Component = CompletedTask;
      break;
  }
  return (
    <React.Fragment>
      <header>
        <TodoHeader />
      </header>
      {/* <nav><TodoNavbar /></nav> */}
      <section>
        <Component
          setCompletedTask={setCompletedTask}
          completedTask={completedTask}
        />
      </section>
      {/* <section><TodoRows /></section>
        <footer><TodoFooter /></footer> */}
    </React.Fragment>
  );
}

export default TodoList;
