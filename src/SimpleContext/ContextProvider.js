import { useState } from "react";
import ConsumerOne from "./ConsumerOne";
import ConsumerTwo from "./ConsumerTwo";
import SimpleContext from "./SimpleContext";
function ContextProvider(){
  const [username,setUsername]=useState("user")
  
    return(
        <>
       
        <SimpleContext.Provider value={{username:username,changeFunction:setUsername}}>
        <ConsumerOne></ConsumerOne>
        <ConsumerTwo></ConsumerTwo> 
        {/**
         * h1 
         * consumerthree
         */}
        </SimpleContext.Provider>
        </>
    )

}
export default ContextProvider