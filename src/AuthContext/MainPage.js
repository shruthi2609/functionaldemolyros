import { useContext } from "react"
import AuthContext from "./AuthContext"
import SignInPage from "./SignInPage"
function MainPage(){
   const {isLogged,changeFun}= useContext(AuthContext)
    return(
        <>
        {isLogged? <h1>Main Page</h1>:<h1>Please signin to continue</h1>}
       
        </>
    )
}
export default MainPage