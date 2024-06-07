import React from 'react';
import {  useNavigate } from 'react-router-dom'; // Import Link and useHistory

import alimage from '../images/logo.png';

const Navbar = () => {
  const nav =useNavigate(); 

  const handleClick = (path) => {
   nav(path) 
  };

  return (
    <div className='MCont'>
      <div className='Mimage'>
        <img src={alimage} alt="Logo" /> 
      </div>
      <div className="MNav">
        <ul>
        
          <li onClick={() => handleClick('/home')}>Home</li>
          <li onClick={() => handleClick('/standered')}>Standard</li>
          <li onClick={() => handleClick('/staff')}>Staff</li>
          <li onClick={() => handleClick('/feedback')}>Feedback</li>
          <li onClick={() => handleClick('/admin')}>Admin Panel</li>
          <li onClick={() => handleClick('/contactus')}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
