import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav className='top'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/services">Services</Link>
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/trending">Trending</Link>

            </nav>


        </div>
    );
};

export default Header;