import { observer } from "mobx-react-lite";
import UserStore from "../UserStore";
type todos = {
  id:string;
  name:string;
  isChecked:boolean
}
const  TodoView = observer(({ todos }:any) =>{
  const  todoListStore  = UserStore;

    
  return (
    <>
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={todoListStore.toggle}
          id={todos.id}
          checked={todos.isChecked}
        />
        <label>{todos.name}</label>
        <button  onClick={() => todoListStore.deleteTodo(todos.id)}>Delete</button>
      </div>
      
    </li>
    </>
  );
}
)
export default TodoView;
