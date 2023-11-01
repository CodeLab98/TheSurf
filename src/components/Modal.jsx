import React from 'react';
import './Modal.css';

function Modal({open, onClose}) {
    if(!open) return null


  return (
    <>
    <div onClick={onClose} className="overlay">
        <form onClick={(e) => {
          e.stopPropagation()
        }} className="signup" onsubmit="return false" autocomplete="off">
          <div className="header-title">
          <h1 className=''>Create account</h1>
          <p onClick={onClose} className="close-btn">X</p>
         

          </div>
       
          <div className="signup__field">
            <input className="signup__input" type="text" name="username" id="username" required />
            <label className="signup__label" for="username">Username</label>
          </div>

          <div className="signup__field">
            <input className="signup__input" type="text" name="email" id="email" required />
            <label className="signup__label" for="email">Email</label>
          </div>

          <div className="signup__field">
            <input className="signup__input" type="password" name="password" id="password" required />
            <label className="signup__label" for="password">Password</label>
          </div>

          <button>Sign up</button>
        </form>
        
    </div>
    </>
  )
}

export default Modal
