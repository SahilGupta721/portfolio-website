import React from 'react';
import '../css/work.css';

const Work = () => {
    const experiences = [
        {
            company: "Government of Ontario ",
            title: "Project Support Analyst (Co-op)",
            location: "Toronto, ON, Canada",
            date: "Sept 2025 - Dec 2025",

            isVolunteer: false
        },
        {
            company: "Centennial College",
            title: "Enterprise Architecture Support Analyst (Co-op)",
            location: "Toronto, ON, Canada",
            date: "May 2025 - Aug 2025",

            isVolunteer: false
        },
        {
            company: "CodePath",
            title: "Interviewer",
            location: "San Francisco, CA, USA (Remote)",
            date: "Sept 2024 - Present",

            isVolunteer: true
        },
        {
            company: "Headstarter",
            title: "Software Engineering Fellow",
            location: "Long Island City, NY, USA (Remote)",
            date: "July 2024 - Sept 2024",

            isVolunteer: false
        }
    ];

    return (
        <section id="work" className="work-experience-section">
            <div className="section-header">
                <div className="section-tag">Professional Journey</div>
                <h2 className="section-title">Work Experience</h2>
                <p className="section-description">
                    Hands-on experience building impactful solutions across government, education, and tech sectors
                </p>
            </div>

            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="experience-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="card-header">
                            <div className="card-title-group">
                                <div className="company-name">{exp.company}</div>
                                <h3 className="job-title">
                                    {exp.title}
                                    {exp.isVolunteer && (
                                        <span className="volunteer-badge">Volunteer</span>
                                    )}
                                </h3>
                                <div className="location">{exp.location}</div>
                            </div>
                            <div className="date-badge">{exp.date}</div>
                        </div>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;