import React from 'react';
function Project({ name, desc, img, type, tech, role, team, url }) {
    return (
        <div className="project-card">
            <img src={require('../../' + img)} alt={name} />
            <div className="project-details">
                <div className="project-name">
                    <a href={url || '#'} target="_blank" rel="noopener noreferrer">{name}</a>
                    <span className="project-type">{type}</span>
                </div>
                <div className="project-technologies">{tech}</div>
                <div className="project-desc">{desc}</div>
                <div className="project-role"> <i className="fa fa-code"></i> <span>{role}</span></div>
                <div className="project-members"><i className="fa fa-user"></i> <span>{team + (team > 1 ? ' Members' : ' Member')}</span></div>
            </div>
        </div>
    );
}
export default Project;
