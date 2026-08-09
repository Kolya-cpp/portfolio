import "../styles/Navbar.css";
import LanguageSwitcher from "./LanguageSwticher";

function Navbar({ t, language, setLanguage }) {
    return (
        <header className="navbar">
            <a href="/" className="logo">
                Kolya<span>.dev</span>
            </a>

            <nav className="nav-links">
                <a href="#about">
                    {language === "ua" ? "Про мене" : "About me"}
                </a>

                <a href="#skills">
                    {language === "ua" ? "Навички" : "Skills"}
                </a>

                <a href="#projects">
                    {language === "ua" ? "Проєкти" : "Projects"}
                </a>

                <a href="#contact">
                    {language === "ua" ? "Контакти" : "Contact"}
                </a>
            </nav>

            <LanguageSwitcher
                language={language}
                setLanguage={setLanguage}
            />
        </header>
    );
}

export default Navbar;