import { useMemo, useReducer, useState } from "react"
import  { AuthContextDispatch, AuthContextValue } from "./AuthContext"
import SignInPage from "./SignInPage"
import MainPage from "./MainPage"
import authReducer from "../reducers/authReducer"
import { cond } from "lodash"
function AuthProvider(){
    // const [isLogged,setIsLogged]=useState(false)
    const [isLogged,dispatch]=useReducer(authReducer,false)
    const [dummy,setDummy]=useState("")
    return(
    <>
    {console.log("parent")}
    <button onClick={(e)=>setDummy("test")}>test</button>
    <br></br>
    <AuthContextValue.Provider value={isLogged
    }>
        <AuthContextDispatch.Provider value={dispatch}>
        <SignInPage></SignInPage>
        <MainPage></MainPage>
        </AuthContextDispatch.Provider>
    </AuthContextValue.Provider>
    </>
    )

}
export default AuthProvider