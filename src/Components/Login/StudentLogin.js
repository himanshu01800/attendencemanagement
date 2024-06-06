import React from 'react'
import { useState } from 'react';
import StuImg from '../images/student.png'

const StudentLogin = () => {

    
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
        <h4>Studnet Login</h4>
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
    <img  className="btimg" src={StuImg}/>
    <h5>Studnets Login with username and paswword to view the reports </h5>
  </div>
      
    </div>
  )
}

export default StudentLogin
