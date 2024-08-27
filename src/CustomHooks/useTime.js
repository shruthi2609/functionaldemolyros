import { useEffect, useState } from "react"

function useTime(){
    const getTime=()=>{
      let date=  new Date()
      let hours=date.getHours()
      let minutes=date.getMinutes()
      let seconds=date.getSeconds()
      return `${hours}:${minutes}:${seconds}`
    }
    const [currentTime,setTime]=useState(getTime())
    useEffect(()=>{
        const intervalId=setInterval(()=>setTime(getTime()),2000)
        return ()=>clearInterval(intervalId)
    },[])
   
    return currentTime

}
export default useTime