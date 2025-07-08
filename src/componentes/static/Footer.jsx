import React from 'react';
import '../../styles/Footer.css';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">Cake Bakery</div>

                <div className="footer-socials">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
            </div>

            <div className="footer-copy">
                &copy; 2025 Cake Bakery. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
