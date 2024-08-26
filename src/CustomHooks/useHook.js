import { useState } from "react";

function useHook(){
    const [data,setData]=useState("some data")
    return data
   
}
export default useHook