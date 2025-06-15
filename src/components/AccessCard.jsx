import React from 'react';
import { Link } from 'react-router-dom';
import '/src/index.css'

export default function AccessCard({imgSrc, alt, title, description, buttonText, to, buttonClass}) {
    return (
        <div className="access-card">
            <img src={imgSrc} alt={alt} className="access-image" />
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
            <Link to={to}>
                <button className={`btn ${buttonClass}`}>{buttonText}</button>
            </Link>
        </div>
    );
}