import React from 'react'
import atimage from '../images/logo.png'
import childimg from '../images/ph.jpg'

import sbench from '../images/mm.jpg'
import './home.css'
import StudentLogin from '../Login/StudentLogin'
import StaffLogin from '../Login/StaffLogin'
import Navbar from '../Navbar/Navbar'


const Home = () => {
  return (
   
         <div >
          <Navbar/>
          <div className='SContset'>
          <div className='Scont'>
        <div className='LoginM'>
       <div className='StudLogin'>
        <StudentLogin/>
       </div>
       <div className='StaffLogin'>
        <StaffLogin/>
       </div>
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
