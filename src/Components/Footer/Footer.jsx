import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="media">
            <hr />
            <a href="mailto:mjmohammedjazeel@gmaill.com" target="_blank" rel="noopener noreferrer" className="box">
                <img src="/images/Mail.svg" alt="mail" />
            </a>
            <a href="https://web.facebook.com/jazeel.jaufer" target="_blank" rel="noopener noreferrer" className="box">
                <img src="/images/Facebook.svg" alt="FB" />
            </a>
            <a href="https://github.com/jazeeljaufer" target="_blank" rel="noopener noreferrer" className="box">
                <img src="/images/Github.svg" alt="git" />
            </a>
            <a href="https://www.instagram.com/_____jazee._.offl___?igsh=dnUweTN1aDduMWRt" target="_blank" rel="noopener noreferrer" className="box">
                <img src="/images/Instagram.svg" alt="insta" />
            </a>
            <a href="https://www.linkedin.com/in/jazeel-jaufer/" target="_blank" rel="noopener noreferrer" className="box">
                <img src="/images/Linkedin.svg" alt="linkedin" />
            </a>
            <hr />
        </div>
        <p>© {new Date().getFullYear()} Jazeel Jaufer. All Rights Reserved.</p>
      
    </footer>
  )
}   
export default Footer;
