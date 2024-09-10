
import { useRef } from "react"

function SimpleComponentRef(){
let count=useRef(0)
const changeCount=(e)=>{
    e.preventDefault()
    count.current=count.current+1
    console.log(count.current)
}
return(
    <>
    <h1>Ref's</h1>
    <h2>{count.current}</h2>
    <button onClick={(e)=>changeCount(e)}>+</button>
    </>
)
}
export default SimpleComponentRef