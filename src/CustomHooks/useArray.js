import { useState } from "react";

function useArray(defaultArray){
    const [array,setArray]=useState(defaultArray)
    function addData(element){
        setArray([...array,element])
    }
    
   
    return {array,addData}
}
export default useArray