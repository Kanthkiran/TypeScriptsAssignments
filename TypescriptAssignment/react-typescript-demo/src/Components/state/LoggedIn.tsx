import { useState } from "react"
export const LoggedIn = ()=>{
    const[isLoggedIn,setisLoggedin] = useState(false)
    const handleLogin = ()=>{
        setisLoggedin(true)
    }
    const handleLogout = () =>{
        setisLoggedin(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>user is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
        </div>
    )
}