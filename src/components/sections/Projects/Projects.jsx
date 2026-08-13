import "../../../styles/Projects.css";
import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";


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
                <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    t={t}
                    language={language}
                    />
    ))}
</div>

            </div>

        </section>
    );
}

export default Projects;