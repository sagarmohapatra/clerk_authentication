/* eslint-disable no-sequences */
import { SignIn } from '@clerk/clerk-react'
import React,{useState} from 'react'

const Login = () => {

  return (
    <div>
       
        <SignIn signUpUrl={"/signup"} forceRedirectUrl={"/dashboard"}  />
    </div>
  )
}

export default Login