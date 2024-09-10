import React from "react"
const ChildComponentRef=React.forwardRef((props,ref)=>{
    const [usernameRef,passwordRef]=ref
    return(
        <>
      {console.log(ref)}
         Username:<input type='text' ref={usernameRef}></input>
         Password:<input type="text" ref={passwordRef}></input>
        </>
    )
})
export default ChildComponentRef