import { useEffect, useState } from "react"
import useAxiosget from "../CustomHooks/useAxiosget"

function JsonComponent(){
   
    const {getData,response}= useAxiosget("https://jsonplaceholder.typicode.com/users")
    useEffect(()=>{
        getData()
        console.log(response)
    },[])
return(
    <>

    <h1>Json</h1>
<p>{response.map((item)=>(
    <>
    <p>{item.username}</p></>
))}</p>
    </>
)
}
export default JsonComponent