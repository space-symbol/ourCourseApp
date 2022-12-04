import React from 'react';
import './card.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} alt="img"/>
            <div className="card_wrapper">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
);
};

export default Card;
