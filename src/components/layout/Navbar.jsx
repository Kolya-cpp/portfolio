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
                    {language === "ua" ? "Про мене" : "About me"}
                </a>

                <a href="/#skills" onClick={closeMenu}>
                    {language === "ua" ? "Навички" : "Skills"}
                </a>

                <a href="/#projects" onClick={closeMenu}>
                    {language === "ua" ? "Проєкти" : "Projects"}
                </a>

                <a href="/#education" onClick={closeMenu}>
                    {language === "ua" ? "Освіта" : "Education"}
                </a>

                <a href="/#journey" onClick={closeMenu}>
                    {language === "ua" ? "Мій шлях" : "My journey"}
                </a>

                <a href="/#beyond-code" onClick={closeMenu}>
                    {language === "ua"
                        ? "Поза програмуванням"
                        : "Beyond Code"}
                </a>

                <a href="/#contact" onClick={closeMenu}>
                    {language === "ua" ? "Контакти" : "Contact"}
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