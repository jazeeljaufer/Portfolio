import React from 'react';
import './Skill.css';
import SkillList from './SkillList';

const Skill = () => {
    return (
        <>
        <div className="skill">
            <div className="skill-title">
                <h3>My skills</h3>
            </div>
            <p>Leveraging our skills to craft innovative solutions that elevate your business and engage your audience.</p>
            
        </div>
        <SkillList/>
        </>
    );
}   
export default Skill;