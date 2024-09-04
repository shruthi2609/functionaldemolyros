import { useContext, useState } from "react";
import ContactContext from "./ContactContext";

function ContactConsumer(){
    const {contacts,dispatch}=useContext(ContactContext)
    const [cname,setCname]=useState("")
    const [cno,setCno]=useState("")
   
    const handleChange=(e,keyword)=>{
        if(keyword==="cname"){
         setCname(e.target.value)
        }
        else{
         setCno(e.target.value)
        }
     }
     const addContact=(e)=>{
        dispatch({
            type:"ADDCONTACT",
            payload:{ 
                id:2,
                cname:cname,
                cno:cno
            }
        })
     }
    return(
        <>
         Contact Name:<input type='text'  onChange={(e)=>handleChange(e,"cname")}></input>
        Contact No:<input type='text'  onChange={(e)=>handleChange(e,"cno")}></input>
        <button onClick={(e)=>addContact(e)}>add</button>
        </>
    )
}
export default ContactConsumer