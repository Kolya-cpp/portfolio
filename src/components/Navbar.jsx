import "../styles/Navbar.css";

function Navbar() {
    return (
        <header className="navbar">

            <a href="/" className="logo">
            Kolya<span>.dev</span>
            </a>

            <nav className="nav-links">
                <a href="#about">Про мене</a>
                <a href="#skills">Навички</a>
                <a href="#projects">Проєкти</a>
                <a href="#contact">Контакти</a>
            </nav>

        </header>
    );
    <section className="skills" id="skills"></section>
}

export default Navbar;