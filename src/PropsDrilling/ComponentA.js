import { useState } from "react";

function ComponentA(){
    const [username,setUsername]=useState("john")
    return(
        <>
        <MainPage data={username}></MainPage>
        </>
    )
}
export default ComponentA