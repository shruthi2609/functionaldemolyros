import { useEffect } from "react"
import { fetchUser } from "../userReducer"
import { useDispatch, useSelector } from "react-redux"
function ViewUser(){
   const result= useSelector((state)=>{
        return state.users
    })
    const dispatch=useDispatch()
    useEffect( ()=>{
        dispatch(fetchUser())

    },[dispatch])
    return(
        <>
        {console.log(result)}
        </>
    )
}
export default ViewUser