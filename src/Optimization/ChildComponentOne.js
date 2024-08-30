import React from "react"
function ChildComponentOne(props){
    return(
        <>
           {console.log("inside one")}
        <h1>from child One{ props.data}</h1>
        </>
    )
}
export default React.memo(ChildComponentOne,(prevProps,nextProps)=>{
    if(prevProps===nextProps){
        return false
    }
    else{
        return true
    }
})

/**
 * React.memo(ChildComponentOne)
 */