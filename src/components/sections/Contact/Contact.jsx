import "../../../styles/Contact.css";

function Contact({ t }) {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <span className="section-label">
                    {t.contact.label}
                </span>

                <h2>
                    {t.contact.title}
                </h2>

                <p className="contact-description">
                    {t.contact.description}
                </p>

                <div className="contact-links">
                    <a href="mailto:">
                        ✉ {t.contact.email}
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >
                        💻 {t.contact.github}
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ✈ {t.contact.telegram}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;