import { Link } from "react-router-dom";

function ProjectCard({ project, index, t, language }) {
    const title =
        language === "ua"
            ? project.titleUA
            : project.titleEN;

    const category =
        language === "ua"
            ? project.categoryUA
            : project.categoryEN;

    const description =
        language === "ua"
            ? project.descriptionUA
            : project.descriptionEN;

    return (
        <article className="project-card">
            <div className="project-number">
                {String(index + 1).padStart(2, "0")}
            </div>

            <span className="project-category">
                {category}
            </span>

            <h3>{title}</h3>

            <p>{description}</p>

            <div className="project-technologies">
                {project.technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            <Link
                to={`/projects/${project.slug}`}
                className="project-link"
                >
                {t.projects.viewProject}
            <span>↗</span>
            </Link>
            
        </article>
    );
}

export default ProjectCard;