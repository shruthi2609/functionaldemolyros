
import { Provider } from "react-redux";

import store from "./ReduxJs Middleware Config/store";
import User from "./ReduxJs Middleware Config/components/UserConnector"
function App() {
 return(
  <>
  <Provider store={store}>
   <User></User>
  </Provider>
  </>
  
 )
}

export default App;
