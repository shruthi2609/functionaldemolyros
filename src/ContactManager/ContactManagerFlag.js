import { useEffect, useState } from "react"
import axios from "axios"
function ContactManagerFlag(){
    const [contacts,setContacts]=useState([])
    const [fname,setfname]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [msg,setMsg]=useState("")
    const [toggle,setToggle]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:3001/ContactDetails").then((res)=>setContacts(res.data)).catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3001/ContactDetails").then((res)=>setContacts(res.data)).catch((err)=>console.log(err))
    },[toggle])
    const handleChange=(e,keyword)=>{
        if(keyword==="fname")
            setfname(e.target.value)
        if(keyword==="email")
            setEmail(e.target.value)
        if(keyword==="phone")
                setPhone(e.target.value)
    }
    const handleCreate=(e)=>{
        e.preventDefault()
        const obj={cname:fname,cemail:email,cno:phone}
        axios.post("http://localhost:3001/ContactDetails",obj).then((res)=>{
            setMsg("created successfully")
            setToggle(!toggle)
          //  setContacts([...contacts,res.data])
        })
    }
    const handleDelete=(e,id,cname)=>{
        axios.delete(`http://localhost:3001/ContactDetails/${id}`).then((res)=>{setMsg(`deleted ${cname} successfully`)
        setToggle(!toggle)
    }).catch((err)=>console.log(err))
    }
    return(
        <>
        <form>
        Name:    <input type="text" placeholder="enter contact name" onChange={(e)=>handleChange(e,"fname")}></input>
        Email:    <input type="text" placeholder="enter contact email" onChange={(e)=>handleChange(e,"email")}></input>
        Phone:    <input type="text" placeholder="enter contact phone" onChange={(e)=>handleChange(e,"phone")}></input>
        <button onClick={(e)=>handleCreate(e)}>create contact</button>
        <p>{msg}</p>
        </form>
        {
            contacts.map((item)=>(
                <>
                <h1>{item.cname}</h1>
                <p>{item.cno}</p>
                <p>{item.cemail}</p>
                <button onClick={(e)=>handleDelete(e,item.id,item.cname)}>delete</button>
                </>
            ))
        }
        </>
    )
}
export default ContactManagerFlag