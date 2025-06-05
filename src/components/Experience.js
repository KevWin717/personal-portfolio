import React from "react";
import "./Experience.css"

const experiences = [
    {
        date: 'August 2014 - Present',
        title: 'Technical Operations Assistant · Sushi Nini',
        location: 'Round Rock, TX',
        description: [
            "Optimized the restaurant's POS systems by applying technical expertise, resulting in a 25% improvement in transaction speeds. I managed network configurations and system maintenance, ensuring 99.9% uptime and reliable connectivity. Additionally, I resolved customer concerns quickly in high-pressure environments, enhancing overall satisfaction ratings."
        ],
        skills: ['POS Systems', 'Network Management', 'Customer Service'],
    },
    {
        date: 'June 2023 - September 2023',
        title: 'Computer Lab Technician · University of Texas at San Antonio',
        location: 'San Antonio, TX',
        description: [
            "Resolved over 20 technical issues weekly for students and faculty, improving user satisfaction and reducing repeat support requests by 15%. I maintained and optimized lab systems, cutting downtime by 10% and enhancing functionality for more than 500 users. I also managed updates and configurations of IDEs and coding software, ensuring optimal performance for all users."
          ],
        skills: ['Technical Support', 'System Maintenance', 'IDE Configuration'],
    },
    {
        date: 'August 2021 - December 2021',
        title: 'Web Development Intern · Chromosome18',
        location: 'San Antonio, TX',
        description: [
            "Built and maintained secure web applications for genetic research using HTML, CSS, JavaScript, and back-end technologies. I collaborated with researchers and IT teams to meet 100% of project deadlines, contributing to significant advancements in genetic studies. I implemented security features that safeguarded sensitive information, resulting in zero data breaches during my tenure."
          ],
        skills: ['HTML', 'CSS', 'JavaScript', 'Data Security'],
    },
    {
        date: 'January 2017 - May 2017',
        title: 'Software Engineering Intern · IBM',
        location: 'Austin, TX',
        description: [
            "Developed and integrated cognitive computing applications using IBM Cloud technology, enhancing system capabilities and increasing processing efficiency. I created and delivered detailed project reports and presentations to senior leadership, facilitating informed decision-making. Collaborated with cross-functional teams to design and implement innovative solutions while meeting tight deadlines."
        ],
        skills: ['IBM Cloud', 'Cognitive Computing', 'Technical Communication'],
    }
];

const Experience = () => {
    const leftExperiences = experiences.slice(0, 2);
    const rightExperiences = experiences.slice(2, 4);

    return (
        <section id="experience" className="experience-section">
            <div className="experience-header">
                <span role="img" aria-label="briefcase">💼</span>
                <span>Experience</span>
            </div>
            <div className="experience-columns">
                <div className="experience-column">
                    {leftExperiences.map((exp, index) => (
                        <div className="experience-card" key={index}>
                            <div className="experience-card-header">
                                <h2 className="experience-date">{exp.date}</h2>
                                <h3 className="experience-title">{exp.title}</h3>
                                <h4 className="experience-location">{exp.location}</h4>
                            </div>
                            <div className="experience-description">
                                {exp.description.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </div>
                            {exp.skills && exp.skills.length > 0 && (
                                <div className="skills-container">
                                    {exp.skills.map((skill, idx) => (
                                        <div className="skill-bubble" key={idx}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="experience-column">
                    {rightExperiences.map((exp, index) => (
                        <div className="experience-card" key={index + leftExperiences.length}>
                            <div className="experience-card-header">
                                <h2 className="experience-date">{exp.date}</h2>
                                <h3 className="experience-title">{exp.title}</h3>
                                <h4 className="experience-location">{exp.location}</h4>
                            </div>
                            <div className="experience-description">
                                {exp.description.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </div>
                            {exp.skills && exp.skills.length > 0 && (
                                <div className="skills-container">
                                    {exp.skills.map((skill, idx) => (
                                        <div className="skill-bubble" key={idx}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="resume-link">
                <a href={'${process.env.PUBLIC_URL}/files/Kevin_Nguyen_Resume.pdf'} target="_blank" rel="noopener noreferrer">
                    View Full Resume
                </a>
            </div>
        </section>
    );
};

export default Experience;