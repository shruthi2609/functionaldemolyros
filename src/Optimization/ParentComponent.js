import { useState } from "react"
import ChildComponentOne from "./ChildComponentOne"
import ChildComponentTwo from "./ChildComponentTwo"

function ParentComponent(){
    const [fname,setFname]=useState("john")
    const [role,setRole]=useState("user")
    const changeFname=()=>{
        setFname("mary")
    }
    const changeRole=()=>{
        setRole("admin")
    }
    return(
        <>
        {console.log("inside parent")}
        <ChildComponentOne data={fname}></ChildComponentOne>
        <ChildComponentTwo data={role}></ChildComponentTwo>
        <button onClick={()=>changeFname()}>change fname</button>
        <button onClick={()=>changeRole()}>change role</button>
        </>
    )
}
export default ParentComponent