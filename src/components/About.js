import React from "react";
import './About.css';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-hero">
                <div className="about-hero-left">
                    <div className="about-profile-icon">
                        <img 
                            src="/images/me.jpg" 
                            alt="Kevin Nguyen" 
                            className="about-profile-img"
                    />
                    </div>
                    <div>
                        <h1 className="about-name">Kevin Nguyen</h1>
                        <h2 className="about-title">Product Manager</h2>
                        <p className="about-desc">
                            Passionate product manager with expertise in AI, full-stack development, and cloud solutions. Dedicated to building impactful products and driving innovation through technology.
                        </p>
                    </div>
                </div>
                <div className="about-hero-right">
                    <div className="about-contact">
                        <div><span role="img" aria-label="img">📧</span> kevinn0308@gmail.com</div>
                        <div><span role="img" aria-label="img">📞</span> (717) 736-2204</div>
                        <div><span role="img" aria-label="img">📍</span> Bellevue, WA</div>
                    </div>
                    <div className="about-social">
                        <a href="https://www.linkedin.com/in/kevinnguyen717/" target="_blank" rel="noopener noreferrer" className="about-social-btn">in</a>
                        <a href="https://github.com/kevwin717" target="_blank" rel="noopener noreferrer" className="about-social-btn">GH</a>
                    </div>
                </div>
            </div>
            <div className="about-card">
                <div className="about-card-header">
                    <span role="img" aria-label="about">👤</span>
                    <span>About Me</span>
                </div>
                <div className="about-card-body">
                    <p>
                        I'm a dedicated Product Manager with a passion for solving complex problems through technology. My journey began with curiosity about how software works and has evolved into expertise across multiple domains.
                    </p>
                    <p>
                        I thrive in collaborative environments and enjoy taking on challenging projects that push the boundaries of what's possible. Whether it's developing web applications, implementing AI solutions, or optimizing product strategy, I approach each task with enthusiasm and attention to detail.
                    </p>
                </div>
                <div className="about-stats">
                    <div>
                        <div className="about-stat-value">10+</div>
                        <div className="about-stat-label">Projects</div>
                    </div>
                    <div>
                        <div className="about-stat-value">3+</div>
                        <div className="about-stat-label">Years Experience</div>
                    </div>
                    <div>
                        <div className="about-stat-value">10+</div>
                        <div className="about-stat-label">Technologies</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;