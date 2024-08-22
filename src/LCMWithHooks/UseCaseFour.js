import { useEffect } from "react"

function UseCaseFour(){
    useEffect(()=>{
        return ()=>{
            console.log("unmount")
        }
    },[])
    return(
        <>
        <h1>LCM in hooks</h1></>
    )
}
export default UseCaseFour