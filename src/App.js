import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from "./components/TodoList"
function App() {

  return (
    <React.Fragment>
      <div className='bg-gradient-to-br from-cyan-600 to-blue-500 items-center w-full h-full min-h-[100vh]'>
        <TodoList />
      </div>
    </React.Fragment>
  );
}

export default App;
