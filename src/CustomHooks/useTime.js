import { useEffect, useState,useRef } from "react"

function useTime(){
    const getTime=()=>{
      let date=  new Date()
      let hours=date.getHours()
      let minutes=date.getMinutes()
      let seconds=date.getSeconds()
      return `${hours}:${minutes}:${seconds}`
    }
    const [currentTime,setTime]=useState(getTime())
    const [isActive,setActive]=useState(true)
    const stopClock=()=>{
      setActive(false)
    }
    let timeoutID
    
    useEffect(()=>{
      if(isActive){
        timeoutID=setInterval(()=>setTime(getTime()),2000)
        console.log(timeoutID)
      }
      else{
        clearInterval(timeoutID)
      }
        
        return ()=>{
         
          console.log("unmount hit")
          console.log(timeoutID)
          clearInterval(timeoutID)
        }
    },[currentTime,setTime,isActive])
    return {currentTime,stopClock}

}
export default useTime