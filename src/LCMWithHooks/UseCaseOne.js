import { useEffect } from "react"

function UseCaseOne(){
    useEffect(
        ()=>{
            console.log("inside useeffect")
        }
    )
    return(
        <>
        {console.log("render")}
        <h1>LCM in hooks</h1></>
    )
}
export default UseCaseOne