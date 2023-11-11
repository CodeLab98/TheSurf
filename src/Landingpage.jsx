import React from 'react';
import './Home.css';


function Home() {
  return (
    <>
     <div className='hero-container'>
      <div id="hero-content">
        <h1>The surf</h1>
        <h3><strong>Good Times</strong> & Amazing Experiences</h3>
      </div>
      <div class="arrow bounce"><i class="fa fa-angle-down fa-5x" aria-hidden="true"></i></div>
      <video autoPlay muted loop id="myVideo">
          <source src="videos/surfing-video.mp4" autoPlay loop muted type="video/mp4" />
        </video>
     </div>
    </>
  )
}

export default Home
