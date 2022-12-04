import React from 'react';
import './container.css'
import Footer from "../../../components/footer/Footer";
import Test from "../../../components/test/Test";

const Container = () => {
    return (
        <div className='container'>
            <Footer/>
            <Test/>
        </div>
    );
};

export default Container;
