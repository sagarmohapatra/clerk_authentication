/* eslint-disable no-sequences */
import { SignIn } from '@clerk/clerk-react'
import React,{useState} from 'react'

const Login = () => {
  //  const [hide,setHide]=useState(false)
  return (
    <div>
        {/* {setHide(true)} */}
        <SignIn signUpUrl={"/SignIn"} forceRedirectUrl={"/dashboard"}  />
    </div>
  )
}

export default Login