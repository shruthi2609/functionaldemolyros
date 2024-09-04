import { connect } from "react-redux"
import CounterComponent from "./CounterComponent"
const mapStateToProps=(state)=>{
    return {
        count:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        plus:()=>dispatch({type:"INC"}),
        minus:()=>dispatch({type:"DEC"})
    }
}
const CounterConnnector=connect(mapStateToProps,mapDispatchToProps)(CounterComponent)

export default CounterConnnector
