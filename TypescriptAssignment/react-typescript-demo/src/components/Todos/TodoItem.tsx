import React from "react"
import {observer} from 'mobx-react-lite'
import TodoView from "./TodoView";
import Home from "./Home";
import UserStore, { UserElemenet } from "../UserStore";

const TodoItem = observer(()=>{ 
    const  todoListStore  = UserStore;
    const onSaveButton = ()=> {
     todoListStore.SaveTodo()  
    }
    type todos = {
      todos:UserElemenet
    }
    return(
        <div>
            <Home/> 
        <ul className="todo-list">
          
          {todoListStore.filterTodos.map((todos) => (
            <TodoView todos={todos} key={todos.id} />
          ))}
        </ul>
        <button onClick={onSaveButton}>Save</button>
        </div>
    )
})
export default TodoItem