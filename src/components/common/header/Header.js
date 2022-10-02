import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from "./Head";
import "./header.css"

const Header = () => {
    const [click, setClick] = useState(false);

    return (
      <>
        <Head />
        <header>
          <nav className='flexSB'>
            <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/courses'>All Courses</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <div className='start'>
              <div className='button'><Link to='/login' style={{ color: '#fff' }}>Login</Link> | <Link to='/register' style={{ color: '#fff' }}>Register</Link></div>
            </div>
            <button className='toggle' onClick={() => setClick(!click)}>
              {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </header>
      </>
    )
}

export default Header