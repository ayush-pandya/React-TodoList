import React from 'react'
import CompletedTaskRow from './CompletedTaskRow/CompletedTaskRow';
function CompletedTask({task}) {
    console.log(task);
  return (
    <React.Fragment>
        {task.map((task,index) => (
            <CompletedTaskRow task={task}/>
        ))}
    </React.Fragment>
  )
}

export default CompletedTask;