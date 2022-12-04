import React from 'react';
import './registration.css'
import Navbar from "../../components/navbar/Navbar";
import Container from "./registration-container/Container";


const Registration = () => {

    return (
        <div className="app">
            <Navbar/>
            <Container/>
        </div>
    );
};

export default Registration;
