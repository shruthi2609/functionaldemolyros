import { useEffect } from "react"

function UserComponent(props){
    useEffect(()=>{
        props.asyncDispatch()
    },[])
    return(
        <>
        {console.log(props)}
        <h1>User Data</h1>
       {
        props.loading?<h1>Loading....</h1>:(
            
          props.users.map((item)=>(
                    <>
                    <h1>{item.username}</h1>
                    <p>{item.email}</p></>
                ))
            
        )
       
       } 
        
        
        </>
    )
}
export default UserComponent