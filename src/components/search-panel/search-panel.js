import React from "react";
import './search-panel.css';
import ButtonForSearch from '../button-for-search/button-for-search'
export default class SearchPanel extends React.Component{


formDefault=(e)=>{
    e.preventDefault();
}

onChangeEvent=(e)=>{
    this.props.filterTask(e.target.value)
}

render(){
    //  const {showActive}=this.props;
const {onAllActiveDone}=this.props
   const searchText = 'Type here to search';
        return (
        <form className='search-Panel' onSubmit={this.formDefault}>
            <input type='text' placeholder={searchText} onChange={this.onChangeEvent} ></input>
            <ButtonForSearch onAllActiveDone={onAllActiveDone}/>
        </form>)
    };

}