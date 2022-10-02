import React from 'react'
import Header2 from '../../../components/common/header/Header2';
import './register.css'

const Register = () => {
  return (
    <>
    {/*<Back2 />*/}
    
     <section className='register-section'>
     <Header2 />
     <div className='container'>
     <div className='register'>
      <h2>Toverbs Edu</h2>
      <h3>Create an Account</h3>
     <form action=''>
        
        <input type='text' placeholder='Firstname' />
        <input type='text' placeholder='Lastname' />
        <input type='email' placeholder='Email' />
        <input type='addres' placeholder='Nationality' />
        <input type='phone' placeholder='Phone number' />
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Create Password' />
        <input type='password' placeholder='Confirm Password' />
      
        <button className='primary-btn'>SEND MESSAGE</button>
      </form>
     </div>
     </div>
     </section>
    </>
  )
}

export default Register;