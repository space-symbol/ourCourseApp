import React from 'react';
import './navbar-link.css'
import {Link} from "react-router-dom";

const NavbarLink = ({to, text}) => {
    return (
        <Link to={to}><button>{text}</button></Link>
    );
};

export default NavbarLink;
