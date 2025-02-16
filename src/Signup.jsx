import React,{useState} from 'react'
import { SignUp } from '@clerk/clerk-react'

const Signup = () => {
   
  return (
    <div>
        <SignUp signInUrl="/Login" forceRedirectUrl={"/dashboard"}/>
    </div>
  )
}

export default Signup