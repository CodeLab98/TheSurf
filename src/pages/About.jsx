import React from 'react';
import "./About.css";


function About() {
  return (
   <>

   <div id="about">

    <div className="container">

      <div id="about-container">

      <div id="about-content-left">
          <h5>Established since 1961</h5>
          <h1>All About The Surf</h1>
          <p className='about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repudiandae id voluptate quod ullam! Nulla facilis dignissimos explicabo expedita fuga. Ipsa maxime earum, placeat quam illum eius qui sequi ipsam voluptas nostrum est exercitationem similique blanditiis modi porro explicabo rerum accusamus sapiente quibusdam impedit ullam fugiat sit tenetur sint? Asperiores.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repudiandae id voluptate quod ullam! Nulla facilis dignissimos explicabo expedita fuga. Ipsa maxime earum</p>
          <button className='about-btn'>Learn More</button>
      </div>

        <div id="about-content-right">
          <img src="images/about-the-surf.jpg" className='images' alt="" />
        </div>

      </div>

    </div>
    
    <div className="wave-2">
    </div>

   </div>


   </>
  )
}

export default About