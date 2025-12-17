import React from 'react';
import './Aboutme.css'; 


const Aboutme = () => {
    return (
        <div className="aboutme-container">
        <div className="about-me">
            <div className="name">
                <span>I am</span><h1>Jazeel Jaufer</h1>
            </div>
            <div className="position">
                <h2>Web Application Developer & UI/UX Designer</h2>
            </div>
            <div className="description">
                <p>BSc IT (Software Engineering) undergrad | Skilled in Java, Python, HTML/CSS/JS & Figma | Passionate about UI/UX & full-stack development | Open to internships & collaborative projects</p>
            </div>
            <div className="buttons">
                <div className="cont">
                    <h4><a href="#contact">Get in touch</a></h4>
                </div>
                <div className="download">
                    <img src="/images/Download cloud.svg" alt="download" />
                    <h4><a href="/files/Jazeel_Jaufer_Resume.pdf" download>Download CV</a></h4>
                </div>
        </div>
    </div>
     <div className="about-me-image">
            <img src="/images/img.png" alt="shadow" className="shadow" />
            <div className="bg" id='facebook-about'>
                <img src="/images/Facebook.svg" alt="facebook" />
            </div>
            <div className="bg" id='Mail-about'>
                <img src="/images/Mail.svg" alt="mail" />
            </div>
            <div className="bg" id='Github-about'>
                <img src="/images/Github.svg" alt="github" />
            </div>
            <div className="bg" id='Linkedin-about'>
                <img src="/images/Linkedin.svg" alt="linkedin" />
            </div>
            <div className="bg" id='Instagram-about'>
                <img src="/images/Instagram.svg" alt="instagram" />
            </div>
        </div>
    </div>
    );
}
export default Aboutme;