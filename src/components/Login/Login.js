import React from 'react'
import SignInBody from '../SignInBody/SignInBody.js'
import Navbar from "../Navbar/Navbar.js"
function Login() {
  return (
    <div>

<Navbar showSignInButton={false} />
        <SignInBody setIsUserLoggedIn={setIsUserLoggedIn} />
    </div>
  )
}

export default Login