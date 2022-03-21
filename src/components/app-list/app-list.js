import React from "react";

import ToDoListItem from '../to-do-list-item/to-do-list-item';
import './app-list.css';
const ToDoList =({todoProp,onDelete,onToggleImportant,onToggleDone})=>{
    const elements = todoProp.map(item=>{
      const {id, ...itemResidue}=item;
      
    
     let className='list-group-item'
    
     return(   
        <li key ={id} className={className}>
            <ToDoListItem{...itemResidue}  onDelete={()=>onDelete(id)} onToggleImportant={()=>onToggleImportant(id)} onToggleDone={()=>onToggleDone(id)}/>
            </li>
        );
    });
 return(<ul className="list-group todo-list">
         {elements}   
        </ul>)
        };

export default ToDoList; 