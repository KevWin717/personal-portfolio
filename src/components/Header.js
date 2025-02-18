import React from 'react';
import './Header.css';

function Header() {
    // console.log('Header component rendered'); //debug
    return (
        <header>
            <div className='logo-content'>
                <img src='/images/logo.jpeg' alt='logo'/>
                <h1>Kevin Nguyen</h1>
            </div>
            <nav>
                <ul className='nav-links'>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="https://github.com/KevWin717" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://linkedin.com/in/kevinnguyen717" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;