import "../../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    Kolya<span>.dev</span>
                </div>

                <p>
                    Built with React, curiosity and a lot of coffee ☕
                </p>

                <div className="footer-bottom">
                    <span>
                        © {new Date().getFullYear()} Mykola Lichman
                    </span>

                    <span>
                        Software Developer
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;