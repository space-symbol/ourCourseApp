import React from 'react';
import './container.css'
import Cards from "../../../components/cards/Cards";
import Footer from "../../../components/footer/Footer";

const Container = () => {
    return (
        <div className='container'>
                <Footer/>
                <Cards/>
        </div>
    );
};

export default Container;
