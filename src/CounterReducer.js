import { useReducer } from "react"

function CounterReducer(){
    const [count,dispatch]=useReducer(countReducer,0)
    function countReducer(state,action){
        switch(action.type){
            case "INC":
            {
                    return state+1
            }
            case "DEC":
            {
                        return state-1
                }
        }
    }
    return(
        <>
        </>
    )
}