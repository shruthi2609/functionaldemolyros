
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
import DashBoardComponent from "./ReduxToolkit Configs/Components/DashBoardComponent";
import ViewProducts from "./ContextRoutes/ViewProducts";
import ContactProvider from "./ContactContext/ContactProvider";
import countReducer from "./reducers/countReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./ReduxToolkit Configs/reducers/loginReducer";
const store=configureStore(
  {
    reducer:loginReducer
  }
)
function App() {
 return(
  <Provider store={store}>
<DashBoardComponent></DashBoardComponent>
  </Provider>
  
 )
  

}


export default App;
