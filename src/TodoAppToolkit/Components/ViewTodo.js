import { useDispatch, useSelector } from "react-redux"
import { addTodo,removeTodo} from "../todoReducer"
function ViewTodo(){
   const results =useSelector((state)=>{return state.todo
   })
   const dispatch=useDispatch()
   const handleDelete=(e,id)=>{
      dispatch(removeTodo({todoId:id}))
   }
   return(
    <>
    {console.log(results)}
    <h1>Todo List</h1>
    {
      results.map((item)=>(
         <>
         <h1>{item.todoTitle}</h1>
         <h2>{item.todoDesc}</h2>
         <button onClick={(e)=>handleDelete(e,item.todoId)}>delete</button>
         </>
      ))
    }
    </>
   )

}
export default ViewTodo