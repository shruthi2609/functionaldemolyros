import { useState } from "react"
import useInput from "../CustomHooks/useInput"

function SignInComponent(){
    const {value,handleChange,handleError}=useInput()
    const [unameErr,setUsernameError]=useState("")
    const [username,setUname]=useState("")
    const [password,setPassword]=useState("")
    const updateUserError=(e)=>{
        const result=handleError(e)
        if(result){
            setUsernameError("username is required")
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
    }
    return(
        <>
        {console.log(username,password)}
        Username:<input type='text'  onBlur={(e)=>updateUserError(e)}></input>
        <p>{unameErr}</p>
        Password:<input type='text'  onBlur={(e)=>handleError(e)}></input>
        <button onClick={(e)=>handleLogin(e)}>login</button>
        </>
    )
}
export default SignInComponent