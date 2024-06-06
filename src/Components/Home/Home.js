import React from 'react'
import atimage from '../images/logo.png'
import childimg from '../images/ph.jpg'

import sbench from '../images/mm.jpg'
import './home.css'
import StudentLogin from '../Login/StudentLogin'
import StaffLogin from '../Login/StaffLogin'


const Home = () => {
  return (
    <div className='MCont'>
      <div className='Mimage'>
        <img src={atimage}/>
      </div>
      <div className="MNav">
        <ul>
            <li>Home</li>
            <li>Standered</li>
            <li>Staff</li>
            <li>FeedBack</li>
            <li>AdminPanel</li>
            <li>ContactUs</li>
        </ul>
      </div>

      <div className='Scont'>
        <div className='LoginM'>
       <div className='StudLogin'>
        <StudentLogin/>
       </div>
       <div className='StaffLogin'>
        <StaffLogin/>
       </div>
      </div>

      <div className='Simg'>
           <img  className="Cimage" src={childimg}/>
           <img className="Bimage" src={sbench}/>
           </div>
      </div>
      

    </div>
  )
}

export default Home
