import "../../../styles/BeyondCode.css";

function BeyondCode({ t }) {
    return (
        <section className="beyond-code" id="beyond-code">
            <div className="beyond-code-container">
                <span className="section-label">
                    {t.beyondCode.label}
                </span>

                <h2>
                    {t.beyondCode.title}
                </h2>

                <p className="beyond-code-intro">
                    {t.beyondCode.description}
                </p>

                <div className="beyond-code-grid">
                    <article className="beyond-card">
                        <div className="beyond-card-icon">🏓</div>

                        <div className="beyond-card-years">
                            {t.beyondCode.tennisYears}
                        </div>

                        <h3>
                            {t.beyondCode.tennisTitle}
                        </h3>

                        <p>
                            {t.beyondCode.tennisDescription}
                        </p>
                    </article>

                    <article className="beyond-card">
                        <div className="beyond-card-icon">🏆</div>

                        <div className="beyond-card-years">
                            {t.beyondCode.competitionsCount}
                        </div>

                        <h3>
                            {t.beyondCode.competitionsTitle}
                        </h3>

                        <p>
                            {t.beyondCode.competitionsDescription}
                        </p>
                    </article>

                    <article className="beyond-card">
                        <div className="beyond-card-icon">🏐</div>

                        <h3>
                            {t.beyondCode.volleyballTitle}
                        </h3>

                        <p>
                            {t.beyondCode.volleyballDescription}
                        </p>
                    </article>

                    <article className="beyond-card">
                        <div className="beyond-card-icon">🎯</div>

                        <h3>
                            {t.beyondCode.goalsTitle}
                        </h3>

                        <p>
                            {t.beyondCode.goalsDescription}
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default BeyondCode;