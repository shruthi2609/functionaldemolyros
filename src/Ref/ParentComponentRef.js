import { useRef } from "react";
import ChildComponentRef from "./ChildComponentRef";

function ParentComponentRef(){
    const usernameRef=useRef("dummy")
    const passwordRef=useRef("dummy")
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(usernameRef.current.value)
    }
    return(
        <>
        <ChildComponentRef ref={[usernameRef,passwordRef]}></ChildComponentRef>
        <button onClick={(e)=>handleLogin(e)}></button>
        
        </>
    )
}
export default ParentComponentRef