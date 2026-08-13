import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

import Navbar from "../components/layout/Navbar";

import "../styles/ProjectDetails.css";

function ProjectDetails() {
    const { slug } = useParams();
    const { language, setLanguage, t } = useLanguage();

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return (
            <>
                <Navbar
                    t={t}
                    language={language}
                    setLanguage={setLanguage}
                />

                <main className="project-details">
                    <div className="project-details-container">
                        <h1>
                            {language === "ua"
                                ? "Проєкт не знайдено"
                                : "Project not found"}
                        </h1>

                        <Link
                            to="/#projects"
                            className="project-back"
                        >
                            ←{" "}
                            {language === "ua"
                                ? "До проєктів"
                                : "Back to projects"}
                        </Link>
                    </div>
                </main>
            </>
        );
    }

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

    const details =
        language === "ua"
            ? project.detailsUA
            : project.detailsEN;

    return (
        <>
            <Navbar
                t={t}
                language={language}
                setLanguage={setLanguage}
            />

            <main className="project-details">
                <div className="project-details-container">
                    <Link
                        to="/#projects"
                        className="project-back"
                    >
                        ←{" "}
                        {language === "ua"
                            ? "До проєктів"
                            : "Back to projects"}
                    </Link>

                    <span className="project-details-category">
                        {category}
                    </span>

                    <h1>{title}</h1>

                    <span className="project-details-year">
                        {project.year}
                    </span>

                    <p className="project-details-description">
                        {description}
                    </p>

                    {details && (
                        <>
                            <p className="project-details-goal">
                                {details.goal}
                            </p>

                            <section className="project-details-section">
                                <h2>
                                    {language === "ua"
                                        ? "Що реалізовано"
                                        : "What was implemented"}
                                </h2>

                                <ul className="project-details-features">
                                    {details.features.map(
                                        (feature) => (
                                            <li key={feature}>
                                                {feature}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </section>
                        </>
                    )}

                    <div className="project-details-technologies">
                        {project.technologies.map(
                            (technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            )
                        )}
                    </div>

                    {(project.github || project.demo) && (
                        <div className="project-details-links">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                    <span>↗</span>
                                </a>
                            )}

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {language === "ua"
                                        ? "Демо"
                                        : "Live Demo"}
                                    <span>↗</span>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}

export default ProjectDetails;