import React from "react"
import _isEqual from "lodash/isEqual"
function TodoTrash(props){
    const {data, fun, del, trash} = props
    return(
        <>
        {console.log("Trash compo - child")}
        <h1>Trash Items</h1>
            {
                data.map((item) => (
                    <div key={item.id}>
                    <p>Title : {item.title}</p>
                    <p>Desc : {item.desc}</p>
                    <button onClick={(e) =>fun(e,item.id)}>Undo</button>
                    <button onClick={(e)=> del(e,item.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default React.memo(TodoTrash,(prevProps,newProps)=>{
    if(_isEqual(prevProps,newProps)){
        return false
    }
    else{
        return true
    }
 }
)