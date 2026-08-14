import { useEffect, useState } from "react";
import { translations } from "../data/translation";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Skills from "../components/sections/Skills/Skills";
import Projects from "../components/sections/Projects/Projects";
import Education from "../components/sections/Education/Education";
import Journey from "../components/sections/Journey/Journey";
import BeyondCode from "../components/sections/BeyondCode/BeyondCode";
import Contact from "../components/sections/Contact/Contact";
import Footer from "../components/layout/Footer";


function Home() {
    const [language, setLanguage] = useState("ua");

    const t = translations[language];

    useEffect(() => {
    if (window.location.hash === "#projects") {
        setTimeout(() => {
            const projectsSection =
                document.getElementById("projects");

            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    }
}, []);

    return (
        <>
            <Navbar
                t={t}
                language={language}
                setLanguage={setLanguage}
            />

            <main>
                <Hero
                    t={t}
                    language={language}
                />

                <About t={t} />

                <Skills t={t} />

                <Projects
                t={t}
                language={language}
                />

                <Education t={t} />

                <Journey t={t} />

                <BeyondCode t={t} />

                <Contact t={t} />

                <Footer />
            </main>
        </>
    );
}

export default Home;