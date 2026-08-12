import "../../../styles/Education.css";

function Education({ t }) {
    return (
        <section className="education" id="education">
            <div className="education-container">
                <span className="section-label">
                    {t.education.label}
                </span>

                <h2>
                    {t.education.title}
                </h2>

                <div className="education-card">
                    <div className="education-period">
                        {t.education.period}
                    </div>

                    <div className="education-content">
                        <h3>
                            {t.education.institution}
                        </h3>

                        <span className="education-status">
                            {t.education.status}
                        </span>

                        <p>
                            {t.education.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;