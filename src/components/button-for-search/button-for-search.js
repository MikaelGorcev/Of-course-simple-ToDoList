import React from "react";
import './button-for-search.css';


export default class ButtonForSearch extends React.Component{
  
    
   
   
   
    render() {  
        
       const{onAllActiveDone}=this.props
        
        const searchButtonName = [
            {text:'all'},
            {text:'Active'},
            {text:'Done'},
        ];
        const elementsForButton = searchButtonName.map(item=>{
            if(item.text==='Active'||'all'||'Done'){
                return(
                    <button key = {item.text} onClick={()=>onAllActiveDone(item.text)} className="btn btn-outline-primary">
                    <span>{item.text}</span>
                    </button>
                )
            }


            return(
                <button key = {item.text} className="btn btn-outline-primary">
                <span>{item.text}</span>
                </button>
            )
        });
        return(
            <div className='buttonBlock'>
                {elementsForButton}
            </div>
        )
    }

}