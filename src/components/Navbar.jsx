import "../styles/Navbar.css";

function Navbar() {
    return (
        <header className="navbar">

            <div className="logo">
                Kolya<span>.dev</span>
            </div>

            <nav className="nav-links">
                <a href="#about">Про мене</a>
                <a href="#skills">Навички</a>
                <a href="#projects">Проєкти</a>
                <a href="#contact">Контакти</a>
            </nav>

        </header>
    );
}

export default Navbar;