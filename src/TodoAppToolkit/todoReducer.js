import { createSlice } from "@reduxjs/toolkit"

const initialValue=[
    {
        todoId:0,
        todoDesc:"dummy",
        todoTitle:"dummy"
    }
]

const todoSlice=createSlice({
name:"todoApp",
initialState:{
    todo:initialValue
},
reducers:{
    addTodo:(state,action)=>{
        state.todo=[...state.todo,action.payload]
    },
    removeTodo:(state,action)=>{
        console.log(state)
       state.todo=state.todo.filter((item)=>item.todoId!==action.payload.todoId)
    }
}
})
const {addTodo,removeTodo}=todoSlice.actions
export {addTodo,removeTodo}
export default todoSlice.reducer