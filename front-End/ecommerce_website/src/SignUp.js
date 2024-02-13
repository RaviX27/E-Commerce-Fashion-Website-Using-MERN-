import React, { useState } from 'react';
import './styles.css'
import axios from 'axios'




const SignUp = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:2000/api/signin', {

        email,
        password
      });

      console.log("API response:", response.data);

      // Assuming the API response format is { message: 'Sign-in successful', redirectUrl: 'http://localhost:3001/' }
      if (response.data.message === 'Sign-in successful' && response.data.redirectUrl) {
        // Perform the redirect
        window.location.href = response.data.redirectUrl;
      }

      // Perform any additional actions, such as redirecting to a new page.
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };



  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="buttons">
            <button className="signUp" onClick={handleSignin}>Sign In</button>
            <span className="or">-------OR-------</span>
            <div className="signin-section">
                <p className="already-have">Already have an account?</p>
            <button className="signIn" onClick={() => { window.location.href = '/registation'; }}>Sign Up</button>
            </div>
        </div>
    </div>
  );
};

export default SignUp;
