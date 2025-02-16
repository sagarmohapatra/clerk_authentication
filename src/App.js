import React from 'react'
// import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard'
// import { SignIn, SignUp } from '@clerk/clerk-react'
import Signup from './Signup'
import Login from './Login'
const App = () => {
 
  return (
    <div>
     
      <Router>
        <Routes>
        
        <Route  path="/" element={<Login/>}/>
     
       
         <Route path="/signup" element={<Signup/>}/>
    
          
          <Route path="register" element={""}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App