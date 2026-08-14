import { useState } from "react";
import "../../styles/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

function Navbar({ t, language, setLanguage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <a href="/#home" className="logo" onClick={closeMenu}>
                Kolya<span>.dev</span>
            </a>

            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <a href="/#about" onClick={closeMenu}>
                    {t.nav.about}
                </a>

                <a href="/#skills" onClick={closeMenu}>
                    {t.nav.skills}
                </a>

                <a href="/#projects" onClick={closeMenu}>
                    {t.nav.projects}
                </a>

                <a href="/#education" onClick={closeMenu}>
                    {t.nav.education}
                </a>

                <a href="/#journey" onClick={closeMenu}>
                    {t.nav.journey}
                </a>

                <a href="/#beyond-code" onClick={closeMenu}>
                    {t.nav.beyondCode}
                </a>

                <a href="/#contact" onClick={closeMenu}>
                    {t.nav.contact}
                </a>

                <LanguageSwitcher
                    language={language}
                    setLanguage={setLanguage}
                />
            </nav>

            <button
                className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    );
}

export default Navbar;