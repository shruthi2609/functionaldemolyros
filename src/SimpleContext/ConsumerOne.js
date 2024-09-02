import { useContext, useEffect } from "react"
import SimpleContext from "./SimpleContext"
function ConsumerOne(){
   const {username,changeFunction}=useContext(SimpleContext)
  
    return(
        <>
        {console.log(username)}
       <h1>consumeer one{username} </h1>
       <button onClick={(e)=>changeFunction("john")}>change</button>
        </>
    )
}
export default ConsumerOne