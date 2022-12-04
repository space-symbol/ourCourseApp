import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";
import NavbarLink from "../navbar-link/NavbarLink";

const Navbar = () => {
    return (
        <header>
            <Link className="logoLink" to='/'>
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <div className="nav-wrapper">
                <NavbarLink  to="/" text="Home"></NavbarLink>
                <div className="auth">
                    <NavbarLink to="/login" text="Login"/>
                    <NavbarLink to="/registration" text="Registration"/>
                </div>
            </div>

        </header>
    );
};

export default Navbar;
