import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import ToDoList from './components/app-list/app-list';
import AddItemInList from './components/add-item-in-list/add-item-in-list';


export default class App extends React.Component{
   maxId=100;
   state={
      toDoData:[this.createTodoItem('Drink Cofee'),this.createTodoItem('Build React App'),this.createTodoItem('Have a lunch'),],
      valFromInput:'',
      filter:'',
   };

   createTodoItem(text){
      return {
         text,
         important:false,
         done:false,
         id:this.maxId++
      }
   }


   deleteItem=(id)=>{
      this.setState(({toDoData})=>{
         const indx = toDoData.findIndex((el)=>el.id===id);
         const newArray = [...toDoData.slice(0,indx),...toDoData.slice(indx+1)];
         
            return {
               toDoData:newArray
               }
            }
         );
   };

   

   addItemInList = (text)=>{
      const newItem=this.createTodoItem(text)
      this.setState(({toDoData})=>{
      const objectNew=[...toDoData,newItem];
      
      return {toDoData:objectNew}
      })
   };




  


  onToggleImportant = (id)=>{
   this.setState(({toDoData})=>{
    return {
       toDoData:this.toggleHelp(id,toDoData,'important')
    }
   });
}

toggleHelp=(id,arr,property)=>{
   const indx = arr.findIndex((el)=>el.id===id);//находит и возвращает элемент по айдишнику 
   const oldItem=arr[indx]; // вот этот элемент из тудуданных 
   const newItem={...oldItem,[property]:!oldItem[property]}; //этот элемент из списка только с мененым свойством
   return [...arr.slice(0,indx),newItem,...arr.slice(indx+1)];// новый массив данных из старого и впендюриного измененного элемента
}
   //находит элемент из массива по айди и меняет его свойства


  onToggleDone = (id)=>{
     this.setState(({toDoData})=>{
      return {
         toDoData:this.toggleHelp(id,toDoData,'done')
      }
     });
  }

// showFromFilter=(text)=>{
//    this.setState(({toDoData})=>{
//    const resAfterFilter=toDoData.filter((originalText)=>originalText.text===text)
//    return {toDoData:resAfterFilter} 
//    })
// }

  filterTaskForTododata=(arr, valFromInput)=>{
     if(valFromInput.length===0){return arr};
     return arr.filter((el)=>{
      return el.text.toUpperCase().indexOf(valFromInput.toUpperCase() )>-1}); 
   }
   //отфильтровывает список на основании того что было вбито в е таргет вэлью
   //массив он возвращет, просто массив не обьект
filterTask=(val)=>{
   this.setState(({valFromInput})=>{
      return {valFromInput:val}   
   })
}
//передает значение от е таргета в сеарч панеле до этой страницыб заодно это значение кидает в стэйт valFromInput


onAllActiveDone=(itemText)=>{
   this.setState(({filter})=>{
      return {filter:itemText}
   })
}
//меняет фильтр в зависимости от текста передаваемого button-for-search

filterToggle=(arr,filtering)=>{
   switch (filtering) {
      case 'all':
         return arr;
      case 'Active':
         return arr.filter(el=>el.important===true);
      case 'Done':
         return arr.filter(el=>el.done===true);
      default:return arr
   }
}
//отфильтровывает по свойству и возвращает просто массив отфильтрованных



   render(){
      const{toDoData, valFromInput,filter}=this.state
       const doneCount=this.state.toDoData.filter((el)=>el.done===true).length;
      const todoCount=this.state.toDoData.length-doneCount;
      const visibleItems=this.filterToggle(this.filterTaskForTododata(toDoData,valFromInput),filter)
      // по идее должен показывать то что осталось от отфильтрованных данных из туду дата и то что 
      // вбили в е таргет дата, да еще по фильтру в свиче
      
      const showCount={doneCount,todoCount}
       
      return(
            <div>
               <AppHeader showCount={showCount}/>
               <SearchPanel todoProp={toDoData} filterTask={this.filterTask} onAllActiveDone={this.onAllActiveDone}/*showActive={this.showActive} showAll={this.showAll}*//>
               <ToDoList 
                  todoProp={visibleItems}
                  
                  onDelete={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}
               />
               <AddItemInList onAdd={this.addItemInList} />
            </div>
      )
   }
   
};

ReactDOM.render(<App/>,document.getElementById('root'));

