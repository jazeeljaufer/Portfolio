import React from "react";
import './Web.css';

const Web = () => {
    return (
        <div className="web">
            <img src="/images/Web.svg" alt="web" className="lap" />
            <div className="w-details">
                <h2>Web App Development</h2>
                <p>Building modern, responsive, and high-performance web applications using Java, python,HTML, CSS, and JavaScript. I focus on clean UI, secure backend logic, and smooth user experience</p>
                <div className="lang">
                    <img src="/images/Html 5.svg" alt="html" />
                    <img src="/images/CSS3.svg" alt="css" />
                    <img src="/images/JavaScript.svg" alt="js" />
                    <img src="/images/Java.svg" alt="java" />
                    <img src="/images/Python.svg" alt="python" />
                    <img src="/images/SQL.svg" alt="sql" />
                </div>
                <a href="/Projects">View Projects {">>"} </a>
            </div>
        </div>
    );
}

export default Web;

