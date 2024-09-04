import { useContext } from "react"

import SignInPage from "./SignInPage"
import React from "react"
import { AuthContextValue } from "./AuthContext"
function MainPage(){
   const isLogged=useContext(AuthContextValue)
    return(
        <>
        {console.log("main page")}
        {isLogged? <h1>Main Page</h1>:<h1>Please signin to continue</h1>}
       
        </>
    )
}
export default React.memo(MainPage)