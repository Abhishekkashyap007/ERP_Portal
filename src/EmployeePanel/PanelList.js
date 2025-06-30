import React, { useState } from 'react'
import PanelHeader from './PanelHeader';

function PanelList() {

  const [todolist, setTodolist] = useState([]);

  let saveTodoList = (e) => {

    let todoname = e.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finallist = [...todolist, todoname]
      setTodolist(finallist);
    } else {
      alert("This Task already Exist!..")
    }

    e.preventDefault();
  }

  let list=todolist.map((value,index)=>{
    return(
      <TodoListItems value={value} key={index} indexNumber={index}
      todolist={todolist} setTodolist={setTodolist}
      />
    )
  })

  return (
    <>
    <PanelHeader/>
    <div className='app mt-5 pt-5'>
      <h1>Daily Task List</h1>
      <form onSubmit={saveTodoList}>
        <input type='text' name='todoname' />
        <button>Save</button>
      </form>
      <div className='outerdiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
    </>
  )
}

export default PanelList;

function TodoListItems({value,indexNumber,todolist,setTodolist}){

  const[status,setStatus]=useState(false);

  let deleteRow=()=>{
    let finaltodolist=todolist.filter((v,i)=>i!==indexNumber);
    setTodolist(finaltodolist)
  }
  let checkstatus=()=>{
    setStatus(!status)
  }

  return(
    <li onClick={checkstatus} className={(status)?'changestyle':''}>{indexNumber+1}. {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
