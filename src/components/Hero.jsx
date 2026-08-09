import "../styles/Hero.css";

function Hero({ t, language }) {
    return (
        <section className="hero" id="home">

            <span className="section-label">
                {t.hero.label}
            </span>

            <h1>
                {t.hero.title} <span>👋</span>
            </h1>

            <h2>
                {t.hero.subtitle}
            </h2>

            <p>
                {t.hero.description}
            </p>

            <div className="hero-buttons">
                <a
                    className="hero-button"
                    href="#projects"
                >
                    {t.hero.projectsButton}
                </a>

                <a
                    className="hero-button outline"
                    href="#contact"
                >
                    {t.hero.contactButton}
                </a>
            </div>

        </section>
    );
}

export default Hero;