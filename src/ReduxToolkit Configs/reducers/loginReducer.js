import { createSlice } from "@reduxjs/toolkit";

const initalValue={email:"dummy",username:"dummy"}

const userSlice=createSlice({
    name:"userinfo",
    initialState:{
        loginInfo:initalValue,
        isLogged:false
    },
    reducers:{
        login:(state,action)=>{
            console.log(action)
            state.loginInfo=action.payload
            state.isLogged=true
        },
        logout:(state)=>{
            state.loginInfo=initalValue
            state.isLogged=false
        }
    }
})
// export const {login,logout}=userSlice.actions
const {login,logout}=userSlice.actions
export {login,logout}
export default userSlice.reducer


/**
 * function Comp()
 * {
 * }
 * export default Comp
 * 
 * 
 * export default function Comp(){
 * }
 */

