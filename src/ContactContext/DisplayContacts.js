import { useContext } from "react"
import ContactContext from "./ContactContext"

function DispplayContacts(){
    const {contacts,dispatch}=useContext(ContactContext)
    const handleDeleteContact=(e,ipID)=>{
        dispatch({
            type:"DELETECONTACT",
            id:ipID
        })
    }
return(
    <>
    {
        contacts.map((item)=>(
            <>
            <h1>{item.cname}</h1>
            <p>{item.cno}</p>
            <button onClick={(e)=>handleDeleteContact(e,item.id)}>delete</button>
            </>
        ))
    }
    </>
)
}
export default DispplayContacts