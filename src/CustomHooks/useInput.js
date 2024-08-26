import { useState } from "react";

function useInput(){
const [value,setValue]=useState("")
const handleChange=(e)=>{
    setValue(e.target.value)
}
const handleError=(e)=>{
    if(!e.target.value)
    {
        return true
    }
    else{
        return false
    }
}
return{
    value,handleChange,handleError
}
}
export default useInput