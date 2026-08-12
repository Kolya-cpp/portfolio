import "../../../styles/Journey.css";

function Journey({ t }) {
    const items = [
        {
            year: t.journey.schoolYear,
            title: t.journey.schoolTitle,
            description: t.journey.schoolDescription,
        },
        {
            year: t.journey.collegeYear,
            title: t.journey.collegeTitle,
            description: t.journey.collegeDescription,
        },
        {
            year: t.journey.workYear,
            title: t.journey.workTitle,
            description: t.journey.workDescription,
        },
        {
            year: t.journey.nmtYear,
            title: t.journey.nmtTitle,
            description: t.journey.nmtDescription,
        },
        {
            year: t.journey.projectsYear,
            title: t.journey.projectsTitle,
            description: t.journey.projectsDescription,
        },
        {
            year: t.journey.councilYear,
            title: t.journey.councilTitle,
            description: t.journey.councilDescription,
        },
        {
            year: t.journey.currentYear,
            title: t.journey.currentTitle,
            description: t.journey.currentDescription,
        },
        {
            year: t.journey.futureYear,
            title: t.journey.futureTitle,
            description: t.journey.futureDescription,
        },
    ];

    return (
        <section className="journey" id="journey">
            <div className="journey-container">
                <span className="section-label">
                    {t.journey.label}
                </span>

                <h2>{t.journey.title}</h2>

                <p className="journey-intro">
                    {t.journey.description}
                </p>

                <div className="journey-timeline">
                    {items.map((item, index) => (
                        <article
                            className={`journey-item ${
                                index % 2 === 0
                                    ? "left"
                                    : "right"
                            }`}
                            key={`${item.year}-${item.title}`}
                        >
                            <div className="journey-marker">
                                {index + 1}
                            </div>

                            <div className="journey-card">
                                <span className="journey-year">
                                    {item.year}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Journey;