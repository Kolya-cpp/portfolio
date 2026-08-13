import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/projects"
                        element={<Projects />}
                    />

                    <Route
                        path="/projects/:slug"
                        element={<ProjectDetails />}
                    />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;