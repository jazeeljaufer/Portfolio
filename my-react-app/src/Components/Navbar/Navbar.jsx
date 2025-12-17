 import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="mail">
            <h3>mjmohammedjazeel@gmaill.com</h3>
        </div>
        <div className="nav-links">
            <ul className='links'>
                <li><a href="#home">About</a></li>
                <li><a href="#about">Resume</a></li>
                <li><a href="#services">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;