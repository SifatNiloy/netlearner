import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>

                <h2>Start learning from today</h2>
                <br />
                <div className='footer-points'>
                    <p>Business</p>
                    <p>Be an instructor</p>
                    <p>Be an instructor</p>
                    <p>Get app</p>
                    <p>About us</p>

                </div>
                <div className="footer-points">
                    <p>Career</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Contact us</p>
                    <p>Affiliate</p>
                </div>
                <div className="footer-points">
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>Cookie Settings</p>
                    <p>Sitemap</p>
                </div>
                <br />
                <br />
                <small>© by Netlearner | 2022 </small>
            </footer>
        </div>
    );
};

export default Footer;