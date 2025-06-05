import React from 'react';
import './Header.css';

// console.log('Header component rendered'); //debug
function Header() {
    return(
        <header className='header'>
            <div className='logo-content'>
                <h1 className="gradient-name">Kevin Nguyen</h1>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    {/* <li><a href="#projects">Projects</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <a
                            href={'${process.env.PUBLIC_URL}/files/Kevin_Nguyen_Resume.pdf'}
                            className="download-cv-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             Download CV
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;