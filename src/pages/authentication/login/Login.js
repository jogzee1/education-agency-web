import React from 'react';
import { Link } from 'react-router-dom';
import Back2 from '../../../components/common/back2/Back2';
import Header2 from '../../../components/common/header/Header2';
import './login.css'

const Login = () => {
  return (
    <>
    {/*<Back2 />*/}
    
     <section className='login-section'>
     <Header2 />
     <div className='container'>
     <div className='login'>
      <h2>Toverbs Edu</h2>
      <h3>Sign in to your Portal</h3>
      <p>using your Emal or Username created</p>
     <form action=''>
        
        <input type='text' placeholder='Username/ Email' />
        <input type='password' placeholder='Password' />
      
        <button className='primary-btn'>Login</button>
      </form>
      <div className='flexSB'>
        <div className='flex-item'>
        <input type='checkbox' id='stay_signed_in' name='stay_signed_in' value='Stay Signed In' />
        <label for="stay_signed_in">Stay Signed In</label>
        </div>

        <div className='flex-item'><Link to=''>Forgot your password</Link></div>
      </div>
      <button className='outline-btn'>Create an Account</button>
     </div>
     </div>
     </section>
    </>
  )
}

export default Login