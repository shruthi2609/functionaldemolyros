import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo,removeTodo } from "../todoReducer"
function AddTodo(){
    const [id,setId]=useState(0)
    const [desc,setDesc]=useState("")
    const [title,setTitle]=useState("")
    const dispatch=useDispatch()
    const handleChange=(e,keyword)=>{
        if(keyword==="todoId"){
            setId(e.target.value)
        }
        if(keyword==="todoDesc"){
            setDesc(e.target.value)
        }
        else{
            setTitle(e.target.value)
        }

    }
    const handleCreate=(e)=>{
        e.preventDefault()
        dispatch(addTodo({todoId:id,todoTitle:title,todoDesc:desc}))

    }
    return(
        <>
        TodoId:<input type="text" onChange={(e)=>handleChange(e,"todoId")}></input>
        TodoDesc:<input type="text" onChange={(e)=>handleChange(e,"todoDesc")}></input>
        TodoTitle:<input type="text" onChange={(e)=>handleChange(e,"todoTitle")}></input>
        <button onClick={(e)=>handleCreate(e)}>add</button>
        </>
    )
}
export default AddTodo