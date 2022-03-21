import React from 'react';
import './app-header.css'
import ShowActiveDoneTask from '../show-active-done-task/show-active-done-task';
const AppHeader =({showCount})=>{
    return (
        <div className="app-header">
            <h1>Hellow</h1>
            <ShowActiveDoneTask showCount={showCount}/>
        </div>
        )
};

export default AppHeader;
