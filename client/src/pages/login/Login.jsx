import React from 'react';
import './login.css'
import Navbar from "../../components/navbar/Navbar";
import Container from "./login-container/Container";
const Auth = () => {
    return (
        <div className="app">
            <Navbar/>
            <Container/>
        </div>
    );
};

export default Auth;
