import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import {auth} from "./firebase-config"
import Main from "./Main"

function App(){
  const [isAuthenticated,setIsAuthenticated]=useState();
useEffect(()=>{
  auth.onAuthStateChanged((email)=>{
    if(email){
      console.log(email);
    }
  });
},[])

  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;