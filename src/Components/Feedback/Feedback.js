import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import StudentLogin from '../Login/StudentLogin'
import StaffLogin from '../Login/StaffLogin'
import './Feedback.css'


const Feedback = () => {
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle form submission here, such as sending the data to an API
      console.log('Form submitted:', formData);
      // Clear form fields after submission
      setFormData({ name: '', email: '', message: '' });
    };
  
  
  

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

<div className='Sim'>
<div>
     
      <form className='feedform' onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
     </div>
    </div>


     </div>
  )
}

export default Feedback
