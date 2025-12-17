import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="media">
            <hr />
            <div className="box">
                <img src="/images/Mail.svg" alt="mail" />
            </div>
            <div className="box">
                <img src="/images/Facebook.svg" alt="FB" />
            </div>
            <div className="box">
                <img src="/images/Github.svg" alt="git" />
            </div>
            <div className="box">
                <img src="/images/Instagram.svg" alt="insta" />
            </div>
            <div className="box">
                <img src="/images/Linkedin.svg" alt="linkedin" />
            </div>
            <hr />
        </div>
        <p>© 2025 Jazeel Jaufer. All Rights Reserved.</p>
    </footer>
  )
}   
export default Footer;