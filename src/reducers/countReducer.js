function countReducer(count=0,action){
switch(action.type){
    case "INC":
        return count+1
    case "DEC":
        return count-1
    default:
        {
            console.log("invalid case")
            return count
        }
       
}
}
export default countReducer
/**
 * function loggedReducer(isLogged=false,action){
 * case "LOGIN":
 * return true
 * case "LOGOUT":
 * return false
 * default:
 * return false
 * }
 * const store=createStore(loggedReducer)
 * <Provider store={store}>
 * <LoginComponentConnector>
 *
 * </Provider>
 */
/**
 * function LoginComponentConnector(){
 * mapStateProps()
 * 
 * mapDisptachToProps()
 * 
 * 
 * connect()(LoginComponent)
 * }
 */

