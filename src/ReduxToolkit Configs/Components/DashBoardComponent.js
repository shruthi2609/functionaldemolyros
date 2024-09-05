import { useSelector } from "react-redux"

export default function DashBoardComponent(){
    const result=useSelector((state)=>{
        return state
    })
return(
    <>
    {console.log(result)}
    <h1>DashBoardComponent</h1>
    {
        result.isLogged?<h1>{result.loginInfo.email}</h1>:<h1>Please signin</h1>
    }

    </>
)
}
