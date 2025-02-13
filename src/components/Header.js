import React from 'react';
import './Header.css';

function Header() {
    console.log('Header component rendered'); //debug
    return (
        <header>
            <h1>Kevin Nguyen</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="https://github.com/KevWin717" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://linkedin.com/in/kevinnguyen717" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </nav>
        </header>
    );
}

export default Header;