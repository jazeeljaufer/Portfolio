import React from 'react';
import './UIList.css';

function UiList() {
    const uiprojects = [
        {
           type: "Academic project",
    image: "/images/vakapo.svg",
    title: "Web-Based Vaccination Portal - VakaPo",
    link: "https://www.figma.com/design/hulqBa8N2PIRW1yKvPM3RJ/vakapo?node-id=424-4&t=FXDGjpQRWgO8ztKF-1"
        },
        {
           type: "Individual project",
    image: "/images/taringa.svg",
    title: "Taringa - ecommerce website",
    link: "https://www.figma.com/design/oi5y5WoU4mOtqtPoRkaCza/Boltcreweng?node-id=99-944&m=dev"
        }
    ];

    return (
        <div className="ui-list">
            {uiprojects.map((project, index) => (
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

export default UiList;










