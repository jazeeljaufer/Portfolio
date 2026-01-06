import React from 'react';
import './FullstackList.css';

function FullstackList() {
    const fullstackprojects = [
       {
    type: "Academic project",
    image: "/images/vakapo.svg",
    title: "Web-Based Vaccination Portal - VakaPo",
    link: "https://www.linkedin.com/in/jazeel-jaufer/"
},
{
    type: "Academic project",
    image: "/images/carpark.svg",
    title: "Online Parking System",
    link: "https://www.linkedin.com/in/jazeel-jaufer/"
},
{
    type: "Individual project",
    image: "/images/ceylon.svg",
    title: "Ceylon Gems",
    link: "https://www.linkedin.com/in/jazeel-jaufer/"
}

    ];

    return (
        <div className="fullstack-list">
            {fullstackprojects.map((project, index) => (
                <div key={index} className="project-item">
                    <p>{project.type}</p>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <div className="go">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src="/images/arrow.svg" alt="arrow" />
                    </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FullstackList;
