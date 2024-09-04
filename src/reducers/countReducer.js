function countReducer(count=0,action){
switch(action.type){
    case "INC":
        return count+1
    case "DEC":
        return count-1
    default:
        console.log("error")
}
}
export default countReducer