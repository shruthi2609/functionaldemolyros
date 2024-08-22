import { useEffect, useState } from "react"

function UseCaseThree(props){
const [fname,setFname]=useState('john')
const [age,setAge]=useState(18)
useEffect(
    ()=>{
        console.log("useeffect")
    },[props,age]
)
const handleChange=(e)=>{
    e.preventDefault()
    setFname("mary")

}
    return(
        <>
        {console.log("render")}
        <h1>LCM in hooks</h1>
        <h2> The user {fname}  is {age} years old</h2>
        <button onClick={(e)=>handleChange(e)}>change</button>
        </>
    )
}
export default UseCaseThree