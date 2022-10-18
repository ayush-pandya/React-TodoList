import React from "react";

function Row({ task, deleteTask, id, editTask, handleChange,isEditing, setIsEditing}) {
  let taskName = task.Name;
  // if(isReadOnly){
  //   document.getElementById(id).readOnly = true;
  // }
  function taskCompleted() {
    console.log("hello");
    task.Completed = true;
    console.log(task);
  }
  return (
    <div className="flex h-16 justify-around ">
      <div className="bg-gradient-to-br from-green-400 to-blue-600 flex align-center p-0.5 mb-2 mr-2 mt-2 ml-2 rounded-lg grow">
        <input
          type="text"
          id={id}
          name={id}
          className="h-12 dark:bg-gray-900 font-medium rounded-lg pl-3 bg-white dark:text-white grow"
          placeholder="Task"
         value={taskName}
         onBlur={() => {document.getElementById(id).readOnly = true;
        setIsEditing(true)}}
         onChange={handleChange}
         readOnly
        ></input>
      </div>
      <div className="flex">
        <button
          className="relative inline-flex items-center justify-center p-0.5  mb-2 mr-2 mt-2 ml-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white w-200"
          onClick={editTask}
          
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Edit
          </span>
        </button>
        <button
          className="relative inline-flex items-center justify-center p-0.5  mb-2 mr-2 mt-2 ml-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white w-200"
          onClick={deleteTask}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Delete
          </span>
        </button>
        <button
          className="relative inline-flex items-center justify-center p-0.5  mb-2 mr-2 mt-2 ml-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white w-200"
          onClick={taskCompleted}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Mark as Complete
          </span>
        </button>
      </div>
    </div>
  );
}

export default Row;
