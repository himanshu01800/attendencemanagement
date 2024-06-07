import React from 'react'
import Navbar from '../Navbar/Navbar'
import StudentLogin from '../Login/StudentLogin'
import StaffLogin from '../Login/StaffLogin'

const staff = () => {
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
          staff details
           </div>
          </div>
     

           </div>
  )
}

export default staff
