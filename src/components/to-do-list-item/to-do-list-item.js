import React from 'react';
import ButtonBlockForList from "../list-button-block/list-button-block";
import './to-do-list-item.css'

const ToDoListItem=({text,done,important,onDelete,onToggleImportant,onToggleDone})=>{
    let className='to-do-list-item';
    
   
    if(done){
        className +=' done';
    }
    if(important){
        className +=' alert alert-success'
    }
    return (<div className={className}>
                <div onClick={onToggleDone}>{text}</div>
                <ButtonBlockForList makeImportant={onToggleImportant} onDelete={onDelete}/>
           </div>)
    
}
export default ToDoListItem