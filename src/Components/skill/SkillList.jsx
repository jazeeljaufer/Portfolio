import React from 'react';
import './SkillList.css';

function SkillList() {
    const Skills = [
  {
    image: "/Git.svg",
    name: "Git"
  },
  {
    image: "/Figma.svg",
    name: "Figma"
  },
  {
    image: "/Microsoft SQL Server.svg",
    name: "MSSQL"
  },
  {
    image: "/JavaScript.svg",
    name: "JavaScript"
  },
  {
    image: "/Java.svg",
    name: "Java"
  },
  {
    image: "/CSS3.svg",
    name: "CSS"
  },
  {
    image: "/Html 5.svg",
    name: "HTML"
  },
  {
    image: "/Canva.svg",
    name: "Canva"
  },
  {
    image: "/Blender 3D.svg",
    name: "Blender"
  },
  {
    image: "/Framer Logo.svg",
    name: "Framer"
  },
  {
    image: "/Jupyter.svg",
    name: "Jupyter"
  },
  {
    image: "/Python.svg",
    name: "Python"
  }
]

    
    return (
        <div className="skill-list">
            {Skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    <img src={skill.image} alt={skill.name} />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    );
}   
export default SkillList;