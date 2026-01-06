import React from "react";
import './UI.css';

const UI = () => {
    return (
        <div className="ui">
            <div className="ui-details">
                <h2>UI/UX Design</h2>
                <p>Creating clean, intuitive, and user-friendly designs that ensure smooth navigation and a pleasant user experience. I focus on modern layouts, usability, and responsive design principles, using tools like Figma, Canva, and Photoshop to bring ideas to life.</p>
                <span>
                    <a href="/Designs">View Designs {">>"} </a>
                <div className="tools"> 
                    <div className="tool"><img src="/images/Figma.svg" alt="figma"  /></div>
                    <div className="tool"><img src="/images/Framer.svg" alt="adobe"  /></div>
                </div>
                
                </span>
            </div>
            <img src="/images/ui.svg" alt="ui" className="lap" />
        </div>
    );
}

export default UI;