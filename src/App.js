
import { useState } from "react";
function App() {
  // const count=useState(0)
  // const increment=(e)=>{
  //  /* count[0]=count[0]+1
  //   console.log(count[0])*/
  //   count[1](count[0]+1)
  // }
  // return (
   
  //   <>
  //      { console.log(count)}
  //   <h1>{count[0]}</h1>
  //   <button onClick={(e)=>increment(e)}>+</button>
  //   </>
  // );
  const [count,setCount]=useState(0)
  const [fname,setFname]=useState("peter")
  const [data,setData]=useState({
    cname:"henry",
    cno:2837238787
  })
  const increment=(e)=>{
    e.preventDefault()
    setCount(count+1)
  }
  const updateName=(e)=>{
    e.preventDefault()
    setFname(fname+" smilga")
    
  }
  return (
    <>
    <h1>{count}</h1>
    <h2>{fname}</h2>
    <ul>
      <li>{data.cname}</li>
      <li>{data.cno}</li>
    </ul>
    <button onClick={(e)=>increment(e)}>+</button>
    <button onClick={(e)=>updateName(e)}>update</button>
    
    </>
  );

}


export default App;
