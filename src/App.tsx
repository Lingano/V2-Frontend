import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ"; // Import the new component
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppMain from "./app/AppMain";
import "./i18n"; // Initialize i18n

const App = () => {
    const { i18n } = useTranslation();

    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("dark-mode");
            if (saved !== null) return saved === "true";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    // Handle RTL direction for Hebrew
    useEffect(() => {
        const isRTL = i18n.language === "he";
        document.documentElement.dir = isRTL ? "rtl" : "ltr";
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "golden-light");
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
                                <>
                                    {" "}
                                    <Navbar
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />{" "}
                                    <section className="text-base-content transition-colors duration-300 bg-transparent">
                                        <Hero darkMode={darkMode} />
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
                        />{" "}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<UserProfile />} />{" "}
                        <Route
                            path="/about"
                            element={
                                <About
                                    darkMode={darkMode}
                                    setDarkMode={setDarkMode}
                                />
                            }
                        />{" "}
                        <Route
                            path="/careers"
                            element={
                                <Careers
                                    darkMode={darkMode}
                                    setDarkMode={setDarkMode}
                                />
                            }
                        />{" "}
                        <Route
                            path="/careers/:jobId"
                            element={
                                <JobDetail
                                    darkMode={darkMode}
                                    setDarkMode={setDarkMode}
                                />
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Contact
                                    darkMode={darkMode}
                                    setDarkMode={setDarkMode}
                                />
                            }
                        />
                        <Route path="/app/*" element={<AppMain />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
