import React from 'react';
// import { Link } from "react-router-dom";
import { useState } from 'react';
import './Navbar.css';
import Hamburger from './Hamburger';


function Navbar() {


   const [isNavExpanded, setIsNavExpanded] = useState(false);

   const handleCLick = () => {
      setIsNavExpanded(!isNavExpanded)
   }

  return (
   <>

    <div className="navigation">

      <a href="/" className="logo">
        <img src="images/SP.png" alt="" />
      </a>

      <div className="hamburger"onClick={handleCLick}>
       <Hamburger isOpen={isNavExpanded} />
      </div>

      <nav  className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
            <li>
              <a className='nav-link nav-link-line' href="#about">About</a>
            </li>
            <li>
              <a className='nav-link nav-link-line' href="#destinations">Destinations</a>
            </li>
            <li>
              <a className='nav-link nav-link-line' href="#newsletter">Newsletter</a>
            </li>
        </ul>
      </nav>

    </div>

   </>
  )
}

export default Navbar