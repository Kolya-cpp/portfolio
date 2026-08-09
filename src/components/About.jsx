import "../styles/About.css";

function About({ t, language }) {
    return (
        <section className="about" id="about">

            <div className="about-heading">
                <span className="section-label">
                    {t.about.label}
                </span>

                <h2>
                    {t.about.title}
                </h2>
            </div>

            <div className="about-content">

                <div className="about-image">
                    👨‍💻
                </div>

                <div className="about-text">

                    <p>
                        {t.about.paragraph1}
                    </p>

                    <p>
                        {t.about.paragraph2}
                    </p>

                    <p>
                        {t.about.paragraph3}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default About;