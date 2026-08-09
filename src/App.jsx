import { useState } from "react";
import { translations } from "./data/translation";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
    const [language, setLanguage] = useState("ua");

    const t = translations[language];

    return (
        <div className="App">
            <Navbar
                t={t}
                language={language}
                setLanguage={setLanguage}
            />

            <Hero t={t} language={language} />

            <About t={t} language={language} />

            <Skills t={t} language={language} />

            <Projects t={t} language={language} />
        </div>
    );
}

export default App;