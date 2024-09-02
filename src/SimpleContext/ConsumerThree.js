import { useContext } from "react"
import SimpleContext from "./SimpleContext"
function ConsumerThree(){
 const {username}=useContext(SimpleContext)
    return(
        <>
       <h1>consumeer three {username}</h1>
        </>
    )
}
export default ConsumerThree