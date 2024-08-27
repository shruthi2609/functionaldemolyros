import { useState } from "react"
import axios from "axios"
function useAxiosget(url){
    const [response,setResponse]=useState([])
const getData=()=>{
    axios.get(url).then((res)=>
    {
        setResponse(res.data)
    }
    ).catch((err)=>console.log(err))
}
return {getData,response}
}
export default useAxiosget