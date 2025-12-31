import React from 'react';
import './Aboutme.css';
import cvPdf from '../../assets/My -CV.pdf'; 


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
                    <h4><a href="/contact">Get in touch</a></h4>
                </div>
                <div className="download">
                    <img src="/images/Download cloud.svg" alt="download" />
                    <h4><a href={cvPdf} download="Jazeel_Jaufer_CV.pdf">Download CV</a></h4>
                </div>
        </div>
    </div>
     <div className="about-me-image">
            <img src="/images/img.png" alt="shadow" className="shadow" />
            <a href="https://web.facebook.com/jazeel.jaufer" target="_blank" rel="noopener noreferrer" className="bg" id='facebook-about'>
                <img src="/images/Facebook.svg" alt="facebook" />
            </a>
            <a href="mailto:mjmohammedjazeel@gmaill.com" target="_blank" rel="noopener noreferrer" className="bg" id='Mail-about'>
                <img src="/images/Mail.svg" alt="mail" />
            </a>
            <a href="https://github.com/jazeeljaufer" target="_blank" rel="noopener noreferrer" className="bg" id='Github-about'>
                <img src="/images/Github.svg" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/jazeel-jaufer/" target="_blank" rel="noopener noreferrer" className="bg" id='Linkedin-about'>
                <img src="/images/Linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/_____jazee._.offl___?igsh=dnUweTN1aDduMWRt" target="_blank" rel="noopener noreferrer" className="bg" id='Instagram-about'>
                <img src="/images/Instagram.svg" alt="instagram" />
            </a>
        </div>
    </div>
    );
}
export default Aboutme;