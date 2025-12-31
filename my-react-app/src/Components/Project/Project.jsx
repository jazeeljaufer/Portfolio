import React from 'react';
import './Project.css';
import FullstackList from './FullstackList/FullstackList';
import UiList from './UI/UiList/UiList';


const Project = () => {
  return (
    <div className="project">   
        <div className="projecthead">
            <img src="/images/Project management, team work and idea generation.svg" alt="project" />
            <div className="p-text">
                <p>Academic Project – Individual Project</p>
                <h2>Projects</h2>
            </div>

        </div>
        <div className="projectbody">
            <div className="projectcard">
                <h3>Fullstack</h3>
            </div>
            <FullstackList/>
            <div className="projectcard">
                <h3>UI/UX Design</h3>
            </div>
            <UiList/>
        </div>
    </div>
  );
}   
export default Project;