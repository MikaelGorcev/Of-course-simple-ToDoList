
import React from "react";
import "./add-item-in-list.css"
export default class AddItemInList extends React.Component{

    state={
        text:''
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text:''})
    }

    onTextChange=(e)=>{
        this.setState({text:e.target.value});
    }
        

render (){
    
    return (
        <form className="AddItemInList d-flex" onSubmit={this.onSubmit}>
            <input type='text' className="form-control" onChange={this.onTextChange} placeholder='what needs to be done' value={this.state.text}/>
            <button className="btn btn-success">add item in list</button>
        </form>
    )}
};
