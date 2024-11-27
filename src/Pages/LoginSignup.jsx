import React from 'react'
import './CSS/LoginPage.css'
const LoginSignup = () => {
  return (
    <>
      {/* <div className="blurrypage">nsdfs
        sdf
      </div> */}
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email"  placeholder='Email Addres'/>
            <input type="password" placeholder='Password' />
          </div>
          <button className='continue-button'> Continue</button>
          <div className="loginsignup-login">
              <div className="askforaccount">
                  <p>Already have an account?</p> 
                  <span><a href="#">Login here</a></span>
              </div>
              <div className="policy">
                  <input type="checkbox" name='' id=''/>
                  <p>By continuing, I agree to the term of use & privacy policy</p>
                </div>
              </div>
        </div>
      </div>

    </>
  )
}

export default LoginSignup;