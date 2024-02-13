import React from 'react';
import SignUp from './SignUp';
import Registration from './Registration';


const App = () => {
  return (
    <div>
        <img src="F:\Projects\final web project\Project Web Development A\project\front-End\signup-page\public\img\logo.jpeg" alt="Logo" className="logo-image" />
        <h1>KUMKO</h1>
      <div className="app-container">
        <SignUp />
        <Registration/>        
      </div>
    </div>
  );
};

export default App;




