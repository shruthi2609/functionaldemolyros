import { useState } from "react"
import { login,logout } from "../reducers/loginReducer"
import React from "react"
import { useDispatch } from "react-redux"
function LoginComponent(){
    const dispatch=useDispatch()
    const [value,setValue]=useState("")
    const [uname,setUsername]=useState("")
    const [uemail,setEmail]=useState("")
   
    const handleChange=(e,keyword)=>{
       if(keyword==="uname"){
        setUsername(e.target.value)
       }
       else{
        setEmail(e.target.value)
       }
    }
    
    
    const handleLogin=(e)=>{
       dispatch(login({email:uemail,username:uname}))
       
    }
    const handleLogout=(e)=>{
        dispatch(logout())
     
    }
    return(
        <>
        {console.log("signin page")}
        Username:<input type='text'   onChange={(e)=>handleChange(e,"uname")}></input>
     
        email:<input type='text'   onChange={(e)=>handleChange(e,"email")}></input>
      
        <button onClick={(e)=>handleLogin(e)}>login</button>
        <button onClick={(e)=>handleLogout(e)}>logout</button>
        </>
    )
}
export default LoginComponent