import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers=createAsyncThunk('/user/fetchUsers',async ()=>{
try{
    const result=await axios.get('https://jsonplaceholder.typicode.com/users')
   
    return result.data/** payload  */
}
catch(e){
   return "error"
}
})
/**
 * {
 * type:"user/fetchUser/pending"
 * payload:undefined
 * }
 * {
 *  type:"user/fetchUser/fulffilled"
 * payload:result.data
 * }
 */
export const postUser=createAsyncThunk('user/postUser',async (args)=>{
try{
    const result=await axios.post("",args)
    return result.data
}
catch(e){
    console.log(e)
}
})

/**
 * component
 * dispatch(postUser({uname:"xyz",pwd:"xyz"}))
 */


const initialValue={
    usersData:[],
    loading:true
}
const userSlice=createSlice({
    name:'user',
    initialState:{
        value:initialValue
    },
    reducers:{
        addUser:(state,action)=>{
            console.log('action is triggered',action)
            state.value.usersData=[...state.value.usersData,action.payload]
        },
        removeUser:(state,action)=>{
            state.value.usersData=state.value.usersData.filter((item)=>item.id!==action.payload.userid)
        },
        updateUser:(state,action)=>{
            console.log(action)
           const userData=state.value.usersData.find((item)=>item.id==action.payload.userid)
          
           if(userData){
            userData.email=action.payload.newemail
           }
          
        }
    },
    // extraReducers:{
    //     // [fetchUsers.pending]:(state,action)=>{
    //     //     console.log("pending",action)
    //     //     // state.loading=true
    //     // },
    //     // [fetchUsers.fulfilled]:(state,action)=>{
    //     //     console.log('fullfiled',action)
    //     //     state.loading=false
    //     //     state.value.usersData=[...action.payload]
            
    //     // },
    //     // [fetchUsers.rejected]:(state,action)=>{
    //     //     console.log('fullfiled',action)
    //     //     // state.loading=false
    //     // },
    //     // [postUser.pending]:(state,action)=>{
    //     //     console.log("pending")
    //     // },
    //     // [postUser.fulfilled]:(state,action)=>{
    //     //     state.value.usersData=[...state.value.userData,...action.payload]
    //     // }
    //    
    // }
     /** version 2.2 */
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{
            console.log("pending")
        }).addCase(fetchUsers.fulfilled,(state,action)=>{
                console.log("fullfilled")
                state.userData=action.payload
            }).addCase(fetchUsers.rejected,(state,action)=>{
                console.log("rejected")
            })

    }
})
export const {addUser,removeUser,updateUser}=userSlice.actions
export default userSlice.reducer;