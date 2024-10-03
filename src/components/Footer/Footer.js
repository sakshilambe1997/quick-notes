import React from "react";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Twitter from "./twitter.png";
import Linkdin from "./linkedin.png";
import LogoImg from "./../Navbar/logo.png"
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
    
  return (
    <>
      <div className="footer-container">
        <div className="footer-img-container" >
          <img src={LogoImg} className="footer-logo-img"/>
        </div>
        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Company</h3>
          <p className="footer-text">About Us</p>
          <p className="footer-text">Our Services</p>
          <p className="footer-text">Privacy Policy</p>
        </div>

        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Get Help</h3>
          <p className="footer-text">FAQ</p>
          <p className="footer-text">Services</p>
          <p className="footer-text">Terms & Conditions</p>
        </div>

        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Contact Us</h3>
         <Link to="https://www.facebook.com/" target="_blank"><img src={Facebook}  className="footer-contact-logo"/></Link>

          <Link to="https://www.instagram.com/"><img src={Instagram} className="footer-contact-logo"/>
          </Link>

          <Link to="https://www.instagram.com/" target="_blank" >
          <img src={Twitter} className="footer-contact-logo"/>
          </Link>

          <Link to="" target="_blank">
          <img src={Linkdin} className="footer-contact-logo"/>
          </Link>
        </div>

        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Address</h3>
          <p className="footer-text"> Shivaji Nagar,main road Pune.</p>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30263.27720276891!2d73.82169982962522!3d18.532984574488818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0791d785177%3A0x20d86a81ca743dc8!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727872524372!5m2!1sen!2sin" width="130" height="60" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
      </div>
    </>
  );
}

export default Footer;
