import React, { useState } from 'react';
import './LoginPage.css'; // Add your styles in a separate CSS file
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  document.title='Data Synthesizer';

  const handleLogin = () => {
     if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Simulate login logic (replace this with your actual login logic)
    if (username === 'admin' && password === 'password') {
      // alert(`Logged in as ${username}`);
      navigate('/home');
      
      // You may want to redirect the user to another page upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };
  
  return (

    <><div className='nav_bar'>
    
        {/* <li style={navItemStyle}><a href="/">Home</a></li> */}
        <button className="button_about">ABOUT</button>
        <button className="button_contact">CONTACT US</button>
        
        
      {/* </ul> */}
    </div><>

        <div className="left-side">
          <h1 className="heading">Data Synthesizer</h1>
         <h4>An inhouse solution to generate Synthetic data.</h4>
         <p className="heading2"> <br></br>What is Synthetic data?
          <br></br><br></br>Synthetic data is data that has been artificially generated from a model trained to <br></br>reproduce the characteristics and structure of the original data. 
          Synthetic data is a <br></br>type of data augmentation. No additional consent needed from customer before data<br></br> sharing to offshore location or to public domain.
          
          </p>
        </div>

        <div className="login-container">
          <div className="right-side">
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                
              
              <button type="button" onClick={handleLogin}>
                Login <Link to="/home"></Link>
              </button>
              
            </form>
          </div>
        </div></></>
  );
};

export default LoginPage;
