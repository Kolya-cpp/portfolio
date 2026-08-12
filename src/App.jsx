import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/projects" element={<Projects />} />

                <Route
                    path="/projects/:slug"
                    element={<ProjectDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;