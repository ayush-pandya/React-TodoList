import React from 'react'
import CompletedTaskRow from './CompletedTaskRow/CompletedTaskRow';
function CompletedTask({completedTask}) {
    console.log(completedTask);
  return (
    <React.Fragment>
        {completedTask.map((task,index) => (
            <CompletedTaskRow task={task}/>
        ))}
    </React.Fragment>
  )
}

export default CompletedTask;