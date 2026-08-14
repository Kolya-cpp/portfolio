import "../../../styles/Skills.css";

function Skills({ t }) {
    const skills = [
        {
            title: "Frontend",
            icon: "🌐",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Responsive Design",
            ],
        },
        {
            title: "Backend",
            icon: "⚙️",
            technologies: [
                "PHP",
                "MySQL",
                "SQL",
                "REST API",
            ],
        },
        {
            title: "Programming",
            icon: "💻",
            technologies: [
                "C++",
                "OOP",
                "Algorithms",
                "Data Structures",
            ],
        },
        {
            title: "Tools",
            icon: "🛠️",
            technologies: [
                "Git",
                "GitHub",
                "Visual Studio",
                "VS Code",
            ],
        },
    ];

    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                <div className="skills-heading">

                    <span className="section-label">
                        {t.skills.label}
                    </span>

                    <h2>
                        {t.skills.title}
                    </h2>

                    <p>
                        {t.skills.description}
                    </p>

                </div>

                <div className="skills-grid">

                    {skills.map((skill) => (
                        <div
                            className="skill-card"
                            key={skill.title}
                        >

                            <div className="skill-icon">
                                {skill.icon}
                            </div>

                            <h3>
                                {skill.title}
                            </h3>

                            <div className="skill-list">

                                {skill.technologies.map(
                                    (technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    )
                                )}

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;