import React from "react";
import './show-active-done-task.css';


const ShowActiveDoneTask = ({showCount})=>{
    const {doneCount,todoCount}=showCount
    return(
        <div className='show-active-done-task'>
          <div>Done {doneCount},</div>  
          <div>Active {todoCount}</div>  
        </div>
    )
};
export default ShowActiveDoneTask;