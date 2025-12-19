import React, { useState } from 'react';
import './Footer.css'; 
import Logo from "./image/logo.svg"; 
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
            <ul className="footer__list">
                <li>
                <a href="#"><img src={Logo} alt="Logo" />Artificial Intelligence</a>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                <a href="#" className="footer__links"><MdOutlineMarkEmailUnread />Company@gmail.com.com</a>
                <a href="#" className="footer__links"><FaPhoneAlt />Phone: (064) 332-1233</a>
                <a href="#" className="footer__links"><IoLocationOutline />450 Wall Street, USA, New York</a>
                </li>
              <li>
                <h5>INFORMATION</h5>
                <a href="#" className="footer__link">New Collection</a>
                <a href="#" className="footer__link">About Store</a>
                <a href="#" className="footer__link">Contact Us</a>
                <a href="#" className="footer__link">Latest News</a>
                <a href="#" className="footer__link">Our Sitemap</a>
                <a href="#" className="footer__link">Orders History</a>
                </li>
                <li>
                <h5>FOOTER MENU</h5>
                <a href="#" className="footer__link">Instagram profile</a>
                <a href="#" className="footer__link">New Collection</a>
                <a href="#" className="footer__link">Contact Us</a>
                <a href="#" className="footer__link">Latest News</a>
                <a href="#" className="footer__link">Terms & Conditions</a>
                <a href="#" className="footer__link">Purchase Theme</a>
                </li>
                <li>
                <h5>USEFUL LINKS</h5>
                <a href="#" className="footer__link">Instagram profile</a>
                <a href="#" className="footer__link">New Collection</a>
                <a href="#" className="footer__link">Contact Us</a>
                <a href="#" className="footer__link">Latest News</a>
                <a href="#" className="footer__link">Terms & Conditions</a>
                <a href="#" className="footer__link">Purchase Theme</a>
                </li>
                <li>
                <h5>ABOUT THE STORE</h5>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                <h5>www.company.com</h5>
                <div className="webs">
                <a href="#" className="footer__link"><FiFacebook /></a>
                <a href="#" className="footer__link"><FaInstagram /></a>
                <a href="#" className="footer__link"><CiLinkedin /></a>
                <a href="#" className="footer__link"><CiYoutube /></a>
                </div>
                <div className="languages">
                    <details>
                        <summary><BsGlobe />  English</summary>
                    </details>
                </div>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;