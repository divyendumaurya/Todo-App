import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (index)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(index,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      
    </div>
  )
}

export default App