import React from 'react';
import './Hamburger.css';

function Hamburger({isOpen}) {
  
  return (
    <>
    <div className="hamburger">
        <div className={isOpen ? 'bar' : 'burger'}></div>
        <div className={isOpen ? 'bar' : 'burger'}></div>
        <div className={isOpen ? 'bar' : 'burger'}></div>
    </div>



    
    </>
  )
}

export default Hamburger
