import axios from "axios"
 export const asyncDispatch =()=>async (dispatch)=>{
    try{
        const res=await axios.get("https://jsonplaceholder.typicode.com/users")
        let data=res.data
        return dispatch(
            {
            type:"GET_USER",
            payload:data
        })
    }
    catch(err){
        console.log(err)
    }

}
/*mapDispatchToProps(dispatch){
return {
login:()=>{
}
}
}*/
