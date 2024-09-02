import React, { useEffect } from "react"

function TodoTrue(props){
    const {data, fun, del, trash} = props
   
    return(
        <>
        <h1>Completed Items</h1>
        {console.log("Completed compo - child")}
            {
                data.map((item) => (
                    <div key={item.id}>
                    <p>Title : {item.title}</p>
                    <p>Desc : {item.desc}</p>
                    <button onClick={(e) =>fun(e,item.id)}>Undo</button>
                    <button onClick={(e) =>trash(e,item.id)}>Trash</button>
                    <button onClick={(e)=> del(e,item.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default React.memo(TodoTrue)