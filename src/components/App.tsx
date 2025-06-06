import { useEffect, useState, useMemo } from "react";
import Hero from "./Hero";
import Features from "./Features";
import CTA from "./CTA";
import Footer from "./Footer";
import Pricing from "./Pricing";
import FAQ from "./FAQ"; // Import the new component
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("dark-mode");
            if (saved !== null) return saved === "true";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    // Randomized background shape configurations
    const shapeConfigs = [
        {
            color: "bg-primary/30",
            size: "40vw",
            blur: "blur-3xl",
            opacity: 0.6,
            animation: "animate-pulse-slow",
        },
        {
            color: "bg-secondary/20",
            size: "50vw",
            blur: "blur-3xl",
            opacity: 0.5,
            animation: "animate-float-slow-delay-1",
        },
        {
            color: "bg-accent/25",
            size: "35vw",
            blur: "blur-2xl",
            opacity: 0.5,
            animation: "animate-pulse-slow-delay-2",
        },
        {
            color: "bg-info/30",
            size: "30vw",
            blur: "blur-3xl",
            opacity: 0.6,
            animation: "animate-float-slow",
        },
        {
            color: "bg-success/20",
            size: "30vw",
            blur: "blur-3xl",
            opacity: 0.4,
            animation: "animate-pulse-slow-delay-1",
        },
    ];
    const shapes = useMemo(
        () =>
            shapeConfigs.map((cfg) => ({
                ...cfg,
                top: `${Math.random() * 100 - 20}%`, // random top between -20% and 80%
                left: `${Math.random() * 100 - 10}%`, // random left between -10% and 90%
            })),
        []
    );

    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5 relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
                    {shapes.map((s, i) => (
                        <div
                            key={i}
                            className={`absolute ${s.color} rounded-full ${s.blur} ${s.animation}`}
                            style={{
                                top: s.top,
                                left: s.left,
                                width: s.size,
                                height: s.size,
                                opacity: s.opacity,
                            }}
                        ></div>
                    ))}
                </div>

                <main className="flex-1 bg-transparent">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>                                    <Navbar
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                    <section className="py-20 text-base-content transition-colors duration-300 bg-transparent">
                                        <Hero />
                                    </section>
                                    <div className="divider divider-primary mx-auto w-1/2"></div>
                                    <section className="py-20 text-base-content transition-colors duration-300 bg-transparent">
                                        <Features />
                                    </section>
                                    <div className="divider divider-primary mx-auto w-1/2"></div>
                                    <Pricing />
                                    <div className="divider divider-primary mx-auto w-1/2"></div>
                                    <FAQ />
                                    <div className="divider divider-primary mx-auto w-1/2"></div>
                                    <CTA />
                                    <Footer />
                                </>
                            }
                        />                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
