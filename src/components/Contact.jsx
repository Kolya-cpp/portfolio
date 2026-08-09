import "../styles/Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <span className="section-label">GET IN TOUCH</span>

                <h2>Давай створимо щось круте.</h2>

                <p>
                    Якщо у тебе є ідея проєкту, пропозиція або просто хочеш
                    поспілкуватися — буду радий зв'язатися.
                </p>

                <div className="contact-links">
                    <a href="mailto:your-email@example.com">
                        ✉ Email
                    </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        💻 GitHub
                    </a>

                    <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ✈ Telegram
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;