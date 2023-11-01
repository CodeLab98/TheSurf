import React from 'react';
import "./Footer.css";

function Footer() {
  
    return (
      <>
        <div id="footer">
            <div className="container">
                {/* Footer info detail  */}
                    <div className="footer-info-container">
                        {/* Location */}
                            <div className="footer-info-location foot-info">
                                
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="footer-info-location-text">
                                       
                                        <span>Lorem ipsum dolor sit amet.</span>
                                    </div>
                            </div>
                            {/* Number */}
                            <div className="footer-info-number foot-info">
                              
                                    <i className="fas fa-phone"></i>
                                    <div className="footer-info-number-text">
                                        
                                        <span>98765432100</span>
                                    </div>
                                
                            </div>
                            {/* Email */}
                            <div className="footer-info-email foot-info">
                                
                                    <i className="far fa-envelope-open"></i>
                                    <div className="footer-info-email-text">
                                    
                                        <span>mail@tmail.com</span>
                                    </div>
                                
                            </div>
                        
                    </div>
                {/* Footer extra detail */}
                    <div className="footer-content">
                            <div className="footer-content-container">
                                
                                    <div className="footer-content-boxes">
                                        <div className="footer-logo">
                                            <h2>The-Surf</h2>
                                        </div>
                                        <div className="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="footer-socials">
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-twitter"></i>
                                        <i className="fa-brands fa-youtube"></i>
                                        <i className="fa-brands fa-facebook"></i>
                                        </div>
                                    </div>
                             
                                    <div className="footer-content-boxes">
                                        <div className="footer-content-boxes-header">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <div className="useful-links-container">
                                        <ul>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                            <li><a href="#">Contact</a></li>
                                           
                                        </ul>
                                        <ul>
                                        
                                            <li><a href="#">Expert Team</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Latest News</a></li>

                                        </ul>

                                        </div>
                                   
                                    </div>
                                
                            </div>
                    </div>
                {/* footer copyright section */}
                <div className="copyright-content">
                    <div className="container">
                        <div className="copyright-content-container">

                                <div className="copyright-text">
                                    <p>Copyright &copy; 2023, All Right Reserved <a href="">The-Surf</a></p>
                                </div>
                          
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  
}

export default Footer