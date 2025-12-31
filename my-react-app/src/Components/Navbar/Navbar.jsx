import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
        <div className="mail"
        onClick={() =>
                window.open(
                  'https://mail.google.com/mail/?view=cm&fs=1&to=mjmohammedjazeel@gmaill.com',
                  '_blank'
                )
              }>
            <h3 className="email-text">mjmohammedjazeel@gmaill.com</h3>
            <a href="mailto:mjmohammedjazeel@gmaill.com" className="email-icon" aria-label="Email">
                <img src="/images/Mail.svg" alt="Email" />
            </a>
        </div>
        <div className="nav-links">
            <ul className='links'>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <img src="/images/menu.svg" alt="Menu" />
        </button>
        {isMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMenu}>
                <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                    <ul className='mobile-links'>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
                        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar;