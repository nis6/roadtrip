import React from "react";
import Home from "./pages/home";
import "./utilities.css";
import Planning from './pages/planning';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plan" element={<Planning />} />
            </Routes>
        </Router>
    )
}

export default App;
