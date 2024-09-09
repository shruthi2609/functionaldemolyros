import { connect } from "react-redux";
import { asyncDispatch } from "../asyncDispatcher";
import UserComponent from "./UserComponent";

const mapStateToProps=(state)=>{
return {
    users:state.users,
    loading:state.loading
}
}
export default connect(mapStateToProps,{asyncDispatch})(UserComponent)
