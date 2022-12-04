import React from 'react';
import "./button.css"
const Button = ({onClick, text}) => {
    return (
            <button onClick={onClick} className="button"><span>{text}</span></button>

    );
};

export default Button;
