import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initalValue={
    userData:[],
    loading:true
}

export const fetchUser=createAsyncThunk('/user/fetchUser',async ()=>{
try{
    const result=await axios.get("https://jsonplaceholder.typicode.com/users")
    return result.data
}
catch(err){
    return "error in fetching"
}   
})
const userSlice=createSlice({
    name:"user",
    initialState:{
        value:initalValue
    },
    reducers:{
        addUser:(state,action)=>{
            state.value.userData=[...state.value.userData,action.payload]
        },
        removeUser:(state,action)=>{
            state.value.userData=state.value.userData.filter((item)=>item.id!==action.payload.id)
        }
    },
    extraReducers:
    {
        [fetchUser.pending]:(state,action)=>{
            console.log("pending")
        },
        [fetchUser.fulfilled]:(state,action)=>{
            state.value.userData=[...state.value.userData,action.payload]
        },
        [fetchUser.rejected]:(state,action)=>{
            console.log("rejected")
        }
    }
    
})
export const {addUser,removeUser}=userSlice.actions
export default userSlice.reducer