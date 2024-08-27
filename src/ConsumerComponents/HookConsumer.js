import useHook from "../CustomHooks/useHook";
import useTime from "../CustomHooks/useTime";

function HookConsumer(){
    // const data=useHook()
    const time=useTime()
    return(
        <>
        {console.log(time)}
        
        </>
       
    )
}
export default HookConsumer