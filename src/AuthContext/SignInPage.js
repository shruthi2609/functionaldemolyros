import { useState } from "react"
import { useContext } from "react"
import { AuthContextDispatch } from "./AuthContext"
import React from "react"
function SignInPage(){
    const dispatch=useContext(AuthContextDispatch)
    const [value,setValue]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [unameErr,setUserErr]=useState("")
    const [pwdErr,setPwdErr]=useState("")
    const handleChange=(e,keyword)=>{
       if(keyword==="uname"){
        setUsername(e.target.value)
       }
       else{
        setPassword(e.target.value)
       }
    }
    const handleError=(e,keyword)=>{
        if(keyword==="uname"){
            setUserErr("username is required")
        }
        else{
            setPwdErr("password is required")
        }
       
    }
    
    const handleLogin=(e)=>{
       
        dispatch({type:"LOGIN"})
    }
    const handleLogout=(e)=>{
        dispatch({type:"LOGOUT"})
    }
    return(
        <>
        {console.log("signin page")}
        Username:<input type='text'  onBlur={(e)=>handleError(e,"uname")} onChange={(e)=>handleChange(e,"uname")}></input>
        <p>{unameErr}</p>
        Password:<input type='text'  onBlur={(e)=>handleError(e,"pwd")} onChange={(e)=>handleChange(e,"pwd")}></input>
        <p>{pwdErr}</p>
        <button onClick={(e)=>handleLogin(e)}>login</button>
        <button onClick={(e)=>handleLogout(e)}>logout</button>
        </>
    )
}
export default React.memo(SignInPage)