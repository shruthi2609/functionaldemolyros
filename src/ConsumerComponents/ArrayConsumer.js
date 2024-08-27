import useArray from "../CustomHooks/useArray"

function ArrayConsumer(){
    const {array,addData}=useArray([
        {
            id:1,
            title:"training",
            desc:"lyros training morning session",
            status:false,
            active:true
           
          },
          {
            id:2,
            title:"client call",
            desc:"scrum meeting",
            status:true,
            active:true
            
          },{
            id:3,
            title:"buy groceries",
            desc:"eggs-2 nos milk-1lt",
            status:false,
            active:true
          },
          {
            id:4,
            title:"buy vegetables",
            desc:"spinach -2 nos",
            status:false,
            active:true
          },      
    ])
    return(
        <>
        <h1>Array Consumer</h1>
        
        <button onClick={(e)=>addData({
            id:5,
            title:"service center update",
            desc:"inquire",
            status:false,
            active:true
        })}>add data</button>
        {
            array.map((item)=>(
                <>
                <h2>{item.title}</h2>
                <h2>{item.desc}</h2>
                <button>delete</button>
                </>
            ))
        }</>
    )
}
export default ArrayConsumer