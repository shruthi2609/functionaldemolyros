function CounterComponent(props){
    return(
        <>
        {console.log(props)}
        <button onClick={(e)=>props.plus}>
            +
        </button>
        <p>{props.count}</p>
        <button onClick={(e)=>props.minus}>
            -
        </button>
        </>

    )
}
export default CounterComponent