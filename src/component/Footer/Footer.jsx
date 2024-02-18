import React from 'react';
import './Footer.css';
import footer_logo from '../Assest/logo_big.png';
import instagram_icon from '../Assest/instagram_icon.png';
import pintester_icon from '../Assest/pintester_icon.png';
import whatapp_icon from '../Assest/whatsapp_icon.png';
const Footer = () => {
    return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo}alt="" />
            <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
         <div className="social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon}alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon}alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatapp_icon}alt="" />
            </div>
         </div>
                  <div className="copyright">
                    <hr />
                    <p>Copyright @ 2023 - All Right Reserverd.</p>
                  </div>
    </div>
    );
}



export default Footer;