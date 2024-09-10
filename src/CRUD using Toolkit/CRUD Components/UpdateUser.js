import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateUser } from "../userSlice"
const UpdateUser=()=>{
    const [id,setID]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    const modifyUser=()=>{
        dispatch(updateUser({userid:id,newemail:email}))
    }
    const handleChange=(e,key)=>{
        if(key==='id'){
            setID(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
    }
    return(
        <div>
            <form>
                ID:<input type='text' onChange={(e)=>handleChange(e,'id')}></input>
               New Email:<input type='text' onChange={(e)=>handleChange(e,'email')} ></input>
            </form>
            <button onClick={modifyUser}>update contact</button>
        </div>
    )
}
export default UpdateUser