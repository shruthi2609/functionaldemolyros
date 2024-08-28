
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
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return(
<BrowserRouter>
<Routes>
<Route path='/' element={<HookConsumer></HookConsumer>}></Route>
<Route path="/contact" element={<ContactManager></ContactManager>}></Route>
</Routes>
</BrowserRouter>
  )

}


export default App;
