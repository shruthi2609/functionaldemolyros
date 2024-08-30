import React from "react"
function ChildComponentTwo(props){
    return(
        <>
           {console.log("inside two")}
         <h1>from child Two{ props.data}</h1>
        </>
    )
}
export default React.memo(ChildComponentTwo)