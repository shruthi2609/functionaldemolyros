function authReducer(state,action){
    switch(action.type){
        case "LOGIN":
            {
                return true
            }
        case "LOGOUT":
            {
                return false
            
            }
        default:
            console.log("error")
    }

}
export default authReducer