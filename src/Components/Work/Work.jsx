import React from "react";
import './Work.css';
import Web from './web/Web';
import UI from './ui/UI';

const Work = () => {
    return (
        <div className="work">
            <div className="title">
                <div className="tit-head"><h3>My Work</h3></div>
                <p>Combining creativity with technical expertise to deliver exceptional digital experiences</p>
            </div>
            <div className="work-section">
        <Web />
        <UI />
    </div>
        </div>
    );
}   
export default Work;