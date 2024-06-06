import React from 'react'
import { useState } from 'react';
import './LoginCom.css'
import StaffImage from '../images/teacher.png'

const StaffLogin = () => {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLoginNameChange = (event) => {
      setLoginName(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // You can add your login logic here
      console.log('Login Name:', loginName);
      console.log('Password:', password);
    };
  return (
    <div className='FCont'>
    <div className='Slform'>
    <h4>Staff Login</h4>
    <form className='Form' onSubmit={handleSubmit}>
  <div>
    <label htmlFor="loginName">Login Name:</label>
    <input
      type="text"
      id="loginName"
      value={loginName}
      onChange={handleLoginNameChange}
    />
  </div>
  <div> 
    <label htmlFor="password"> {'\u00A0\u00A0\u00A0\u00A0'}Password:</label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={handlePasswordChange}
    />
  </div>
  <button type="submit">Login</button>
</form>
    </div>
  <div className='Bot'>
    <img  className="btimg" src={StaffImage}/>
    <h5>Staff can make attendence of student and genrate reports after login to system</h5>
  </div>
   
  
</div>
  )
}

export default StaffLogin
