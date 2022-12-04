import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Container from "./home-container/Container";
import './home.css'

const Home = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Container/>
        </div>
    );
};

export default Home;
