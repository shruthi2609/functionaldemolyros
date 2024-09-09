const initialState={
    users:[],
    loading:true
}
function userReducer(state=initialState,action){
    switch(action.type){
        case 'GET_USER':
            return {
                users:action.payload,
                loading:false
            }
        default:
            return state
        }

}
export default userReducer