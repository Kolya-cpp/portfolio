import "../styles/Projects.css";

const projects = [
    {
        title: "To-Do App",
        descriptionUA:
            "Веб-додаток для управління завданнями з реєстрацією користувачів та авторизацією",
        descriptionEN:
            "A web application for task management with user registration and authentication",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        category: "Web Development",
    },
    {
        title: "Car Rental System",
        descriptionUA:
            "Консольна система оренди автомобілів з управлінням автомобілями та клієнтами, пошуком, сортуванням і збереженням даних",
        descriptionEN:
            "A console-based car rental system with car and client management, search, sorting and data storage",
        technologies: ["C++", "OOP", "Algorithms"],
        category: "C++",
    },
    {
        title: "Database Optimization",
        descriptionUA:
            "Проєкт з оптимізації запитів до реляційної бази даних із використанням індексів, JOIN, аналізу запитів та структури БД",
        descriptionEN:
            "A project focused on optimizing relational database queries using indexes, JOINs, query analysis and database structure optimization",
        technologies: ["MySQL", "SQL", "Database"],
        category: "Databases",
    },
    {
        title: "Numerical Methods",
        descriptionUA:
            "Програма для рішення задач чисельних методів: методи проб, хорд, Ньютона, уточнення коренів і рішення систем.",
        descriptionEN:
            "A program for solving numerical methods problems using trial, chord and Newton methods, root refinement and system solving.",
        technologies: ["C++", "Algorithms", "Mathematics"],
        category: "C++",
    },
];

function Projects({ t, language }) {
    return (
        <section className="projects" id="projects">

            <div className="projects-container">

                <div className="projects-header">

                    <span className="section-label">
                        {t.projects.label}
                    </span>

                    <h2>
                        {t.projects.title}
                    </h2>

                    <p>
                        {t.projects.description}
                    </p>

                </div>

                <div className="projects-grid">

                    {projects.map((project, index) => (
                        <article
                            className="project-card"
                            key={project.title}
                        >

                            <div className="project-number">
                                0{index + 1}
                            </div>

                            <span className="project-category">
                                {project.category}
                            </span>

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {language === "ua"
                                    ? project.descriptionUA
                                    : project.descriptionEN}
                            </p>

                            <div className="project-technologies">
                                {project.technologies.map(
                                    (technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>

                            <div className="project-link">
                                {t.projects.viewProject}
                                <span>↗</span>
                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;