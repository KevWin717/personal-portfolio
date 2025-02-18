import React from "react";
import './About.css'

function About() {
    return (
        <section id="about" className="about-section">
            <div className="content">
                <img src="/images/me.jpg" alt="me" className="profile-pic" />
                <h2>Hello, I'm Kevin</h2>
                <p>
                I am an passionate <strong>Software Engineer</strong> & <strong>Web Developer</strong> with a Bachelor's degree in Computer Science. I specialize in building efficient and scalable software solutions, leveraging technologies like JavaScript, React.js, Node.js, and AWS. My journey in tech is driven by curiosity and a commitment to lifelong learning.
                </p>
            </div>
        </section>
    );
}

export default About;