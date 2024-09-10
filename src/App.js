
import { Provider } from "react-redux";

import store from "./ReduxJs Middleware Config/store";

import ViewUser from "./ReduxJs Toolkit Thunk/Components/ViewUser";
import SimpleComponentRef from "./Ref/SimpleComponentRef";
import FormComponent from "./Ref/FormComponentRef";
import ParentComponentRef from "./Ref/ParentComponentRef";
function App() {
 return(
  <>
  {/* <Provider store={store}>
  <ViewUser></ViewUser>
  </Provider> */}
  <ParentComponentRef></ParentComponentRef>
  </>
 )
}

export default App;
