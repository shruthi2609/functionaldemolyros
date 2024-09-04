// import { useContext, useState } from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import AuthContext from "../AuthContext/AuthContext"
// function LoginComponent(){
//     const [uname,setUname]=useState("")
//     const [pwd,setPwd]=useState("")
//     const [success,setSuccess]=useState("")
//     const navigate=useNavigate()
//     const {globalUsername,setUsername}=useContext(AuthContext)

//     const handleChange=(e,keyword)=>{
//         if(keyword==="uname"){
//             setUname(e.target.value)
//         }
//         if(keyword==="pwd"){
//             setPwd(e.target.value)
//         }
//     }
//     const handleLogin=(e)=>{
//         e.preventDefault()
//         console.log("fun")
//         axios.get(`http://localhost:3001/AdminCredentials?username=${uname}`).then((res)=>{
//             console.log(res)
//             const result=res.data
//             if(result[0].password===pwd){
//                setUsername(uname)
//                 navigate("/dashboard")
//             }
//         }).catch((err)=>console.log(err))

//     }
//     return(
//         <>
//      <h1>Sign In Here</h1>
//       Username:  <input type='text' onChange={(e)=>handleChange(e,"uname")}></input>
//       Password: <input type='text' onChange={(e)=>handleChange(e,"pwd")}></input>
//       <p>{success}</p>
//       <button onClick={(e)=>handleLogin(e)}>login</button>
//         </>
//     )

// }
// export default LoginComponent