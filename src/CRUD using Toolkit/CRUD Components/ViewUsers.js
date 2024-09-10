
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsers } from "../userSlice";
import { useEffect } from "react";
import { removeUser } from "../userSlice";
const ViewUsers=()=>{
    const dispatch=useDispatch()
    const {loading,usersData}=useSelector((state)=>state.user.value)
    const handleDelete=(userid)=>{
        dispatch(removeUser({userid:userid}))
    }
    useEffect(()=>{
        dispatch(fetchUsers())
        /**
         * dispatch({
 *  type:"user/fetchUser/fulffilled"
 * payload:result.data
 * })
         */
    },[])
    return(
        <div>
            {console.log('global state',usersData)}
            <h1>List of users</h1>
            {
                usersData.map((item)=>(
                    <div>
                        <h1>{item.username}</h1>
                        <p>{item.email}</p>
                        <button onClick={()=>handleDelete(item.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default ViewUsers