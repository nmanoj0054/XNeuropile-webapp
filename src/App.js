import React from 'react';

import './App.css';
import Login from './Components/login-signup/Login';

function App() {
  return (
    <div className="App">
      <div className='png' style={{marginTop: "30px"}}><img src={"XN-5 image.jpg"} className="App-logo" alt="logo" style={{borderRadius:"30px",marginBottom:"50px"}}/></div>
      <div className='text' style={{ fontSize:"3em" }} >XNeuropile</div>
      <Login />
    </div>
  );
}

export default App;
