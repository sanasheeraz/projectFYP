import React from 'react'
import { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import { addCustomer,customerLogin } from '../utils/interact';
import * as Components from '../component/Form';

const SignUp = () => {
  const [signIn, toggle] = React.useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSignUpClick = async () => {
    await addCustomer(name,email,password);
  };
  const handleLogInClick = async () => {
    await customerLogin(email,password);
  };

  return (
    <div>
      {/* navbar start */}
       <Navbar></Navbar>
      {/* navbar end */}
      <div  style={{"background": "#f6f5f7","display": "flex",
        "justifyContent": "center","alignItems": "center",
        "flexDirection": "column","fontFamily": "Montserrat, sans-serif","height": "100vh","margin": "25px 0 50px"}}>
      {/* contact start */}
      <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={(event) => event.preventDefault()}>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name'value={name} onChange={handleNameChange} />
                      <Components.Input type='email' placeholder='Email'value={email} onChange={handleEmailChange} />
                      <Components.Input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
                      <Components.Button onClick={handleSignUpClick}>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={(event) => event.preventDefault()}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email'  value={email} onChange={handleEmailChange} />
                       <Components.Input type='password' placeholder='Password'  value={password} onChange={handlePasswordChange}/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button onClick={handleLogInClick}>Sign In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Foodka!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start ordering with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
                  </Components.Overlay>
              </Components.OverlayContainer>
          </Components.Container>
        {/* contact end */}
        </div>
        {/* footer area start */}
        <Footer></Footer>
        {/* footer area end */}    
        {/* back-to-top end */}
        <div className="back-to-top">
          <span className="back-top"><i className="fas fa-angle-double-up" /></span>
        </div>
        {/* all plugins here */}
        {/* main js  */}
      
    </div>
  )
}

export default SignUp