import React from 'react';
import './footer.css'
import vk from '../../assets/vk.svg'
const Footer = () => {
    return (
        <footer>
            <a target="_blank" href="https://vk.com/s.vadim500">
                <img src={vk} alt="contacts"/>
            </a>
            <a target="_blank" href="https://vk.com/feral_ber">
                <img src={vk} alt="contacts"/>
            </a>
        </footer>
    );
};

export default Footer;
