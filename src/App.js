import React from 'react'
// import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard'
import { SignIn, SignUp } from '@clerk/clerk-react'
const App = () => {
 
  return (
    <div>
     
      <Router>
        <Routes>
        
        <Route path="/Login" element={<SignIn/>}/>
     
       
         <Route path="/signup" element={<SignUp/>}/>
    
          
          <Route path="/register" element={""}/>
          <Route path="/" element={<Dashboard/>}/>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App