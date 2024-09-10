
import { Provider } from "react-redux";

import store from "./ReduxJs Middleware Config/store";

import ViewUser from "./ReduxJs Toolkit Thunk/Components/ViewUser";
function App() {
 return(
  <>
  <Provider store={store}>
  <ViewUser></ViewUser>
  </Provider>
  </>
  
 )
}

export default App;
