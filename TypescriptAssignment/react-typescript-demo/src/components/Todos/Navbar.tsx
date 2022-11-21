import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react'
import {makeObservable,autorun,observable, action,computed,reaction } from "mobx"
import UserStore from "../UserStore";
type MyProps = {
   
 id:string;
 Name:string

  };
const Navbar = observer((props:MyProps)=>{
   
    const  todoListStore  = UserStore
    const OnclickedButton = ()=>{
        console.log("button clciked")
        todoListStore.setFilter(props.id)
    }
    autorun(() => console.log(todoListStore.filter,"Autorun"))
    return(
        <div>
            <nav>
              <button onClick={OnclickedButton}>{props.Name}</button>
            </nav>
        </div>
    )
})
export default Navbar