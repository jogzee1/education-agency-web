import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <>
      <div className='header2-div'>
        <div className='container'>
            <div className='logo'><h2>Toverbs Education</h2></div>
            <div className='menu'><Link to='/'>Home</Link></div>
        </div>
      </div>
    </>
  )
}

export default Header2;