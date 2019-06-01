import React from 'react';
import './Project2.scss';

function Project2({ name, desc, img, type, tech, role, team, url }) {
    return (
        <div className="pj-container">
            <div className="pj-card">
                <div className="pj-card__image-container">
                    <img className="pj-card__image" src={require('../../' + img)} alt={name} />
                </div>

                <svg className="pj-card__svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                    <path className="pj-card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent" />
                </svg>

                <div className="pj-card__content">
                    <h1 className="pj-card__title">{name}</h1>
                    <p className="pj-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
                </div>
            </div>
        </div>
    );
}
export default Project2;
