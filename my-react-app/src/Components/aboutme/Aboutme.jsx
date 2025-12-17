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
            <div className="top"></div>
            <div className="lht"></div>
            <img src="/images/shadow.svg" alt="shadow" className="shadow" />
        </div>
    </div>
    );
}
export default Aboutme;