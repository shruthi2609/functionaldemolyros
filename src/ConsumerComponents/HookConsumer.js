import useHook from "../CustomHooks/useHook";
import useTime from "../CustomHooks/useTime";

function HookConsumer(){
    // const data=useHook()
    const {currentTime,stopClock}=useTime()
    return(
        <>
        
        <h1>{currentTime}</h1>
        <button onClick={()=>stopClock()}>stop</button>
        
        </>
       
    )
}
export default HookConsumer