
import { useState } from "react";
import UseCaseOne from "./LCMWithHooks/UseCaseOne";
import UseCaseTwo from "./LCMWithHooks/UseCaseTwo";
import UseCaseThree from "./LCMWithHooks/UseCaseThree";
import UseCaseFour from "./LCMWithHooks/UseCaseFour";
import ContactManager from "./ContactManager/ContactManager";
import ContactManagerFlag from "./ContactManager/ContactManagerFlag";
import HookConsumer from "./ConsumerComponents/HookConsumer";
import useHook from "./CustomHooks/useHook";
import SignInComponent from "./ConsumerComponents/SignInComponent";
import JsonComponent from "./ConsumerComponents/JsonComponent";
import ArrayConsumer from "./ConsumerComponents/ArrayConsumer";
import PageRoot from "./PageRoot";

import TodoFunctional from "./TodoApp/TodoFuntional";
import ParentComponent from "./Optimization/ParentComponent";
import ContextProvider from "./SimpleContext/ContextProvider";
import AuthProvider from "./AuthContext/AuthProvider";
import {BrowserRouter,Link,NavLink,Route,Routes} from 'react-router-dom'
import AuthContext from "./AuthContext/AuthContext";
import LoginComponent from "./ContextRoutes/LoginComponent";
import DashBoardComponent from "./ContextRoutes/DashBoard";
import ViewProducts from "./ContextRoutes/ViewProducts";
import ContactProvider from "./ContactContext/ContactProvider";
function App() {
  const [globalUsername,setUsername]=useState("user")
  return(

<>
{/* <BrowserRouter>
<AuthContext.Provider value={{globalUsername:globalUsername,setUsername:setUsername}}>
<Routes>
  <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
  <Route path='/dashboard' element={<DashBoardComponent></DashBoardComponent>}></Route>
  <Route path="/products" element={<ViewProducts></ViewProducts>}></Route>
</Routes>
</AuthContext.Provider>
</BrowserRouter> */}
<ContactProvider></ContactProvider>
</>

  )

}


export default App;
