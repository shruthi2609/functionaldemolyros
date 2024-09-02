import { useState } from "react"
import AuthContext from "./AuthContext"
import SignInPage from "./SignInPage"
import MainPage from "./MainPage"
function AuthProvider(){
    const [isLogged,setIsLogged]=useState(false)
    return(
    <AuthContext.Provider value={{isLogged:isLogged,changeFun:setIsLogged}}>
    <SignInPage></SignInPage>
    <MainPage></MainPage>

    </AuthContext.Provider>
    )

}
export default AuthProvider