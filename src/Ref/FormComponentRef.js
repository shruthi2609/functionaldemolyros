import { useRef, useState } from "react";
function FormComponent(){
    let usernameRef=useRef("dummy")
    let passwordRef=useRef("dummy")
    let [displayName,setDisplayName]=useState("user")
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log("username",usernameRef.current.value)
        console.log("password",passwordRef.current.value)
        if(usernameRef.current.value==="john"&&passwordRef.current.value==="john@123")
        {
            console.log("login successful")
        }
        setDisplayName(usernameRef.current.value)
    }
    return(
        <>
        {console.log(displayName)}
        Username:<input ref={usernameRef}></input>
        Password:<input ref={passwordRef} ></input>
        <button onClick={(e)=>handleLogin(e)}>login</button>
        <h1>Welcome {displayName}</h1>
        </>
    )
}
export default FormComponent
/**
 * const uname,setuname =useState("")
 * handleChange(e){
 * setUname(e.target.value)
 * 
 * }
 * post("",{username:uname})
 * post("",{username:usernameRef.current.value})
 */