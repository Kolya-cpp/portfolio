import "../styles/Projects.css";

const projects = [
    {
        title: "To-Do App",
        description:
            "Веб-додаток для управління завданнями з реєстрацією користувачів та авторизацією",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        category: "Web Development",
    },
    {
        title: "Car Rental System",
        description:
            "Консольна система оренди автомобілів з управлінням автомобілями та клієнтами, пошуком, сортуванням і збереженням даних",
        technologies: ["C++", "OOP", "Algorithms"],
        category: "C++",
    },
    {
        title: "Database Optimization",
        description:
            "Проєкт з оптимізації запитів до реляційної бази даних із використанням індексів, JOIN, аналізу запитів та структури БД",
        technologies: ["MySQL", "SQL", "Database"],
        category: "Databases",
    },
    {
        title: "Numerical Methods",
        description:
            "Програма для рішення задач чисельних методів: методи проб, хорд, Ньютона, уточнення коренів і рішення систем.",
        technologies: ["C++", "Algorithms", "Mathematics"],
        category: "C++",
    },
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <div className="projects-heading">
                    <span className="section-label">MY WORK</span>

                    <h2>Проєкти</h2>

                    <p>
                        Практичні проєкти, в яких я застосовував
                        програмування, роботу з базами даних та алгоритмами.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-number">
                                0{index + 1}
                            </div>

                            <span className="project-category">
                                {project.category}
                            </span>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="project-link">
                                View project <span>↗</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;