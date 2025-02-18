import React from 'react';
import './Header.css';

// console.log('Header component rendered'); //debug
function Header() {
    return(
        <header className='header'>
            <div className='logo-content'>
                <img src='/images/logo.jpeg' alt='logo'/>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="https://github.com/KevWin717" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://linkedin.com/in/kevinnguyen717" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;