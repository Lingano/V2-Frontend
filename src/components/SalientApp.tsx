import { useEffect, useState, useMemo } from "react";
import Hero from "./SalientHero";
import Features from "./SalientFeatures";
import CTA from "./SalientCTA";
import Footer from "./SalientFooter";
import SalientPricing from "./SalientPricing";
import SalientFAQ from "./SalientFAQ"; // Import the new component
import SalientLogin from "../pages/SalientLogin";
import SalientRegister from "../pages/SalientRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = ({
    darkMode,
    setDarkMode,
}: {
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
}) => (
    <header className="bg-transparent backdrop-blur border-b border-base-200/50 sticky top-0 z-50 dark:border-base-300/50">
        <nav className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-2xl font-extrabold text-primary">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <circle
                            cx="16"
                            cy="16"
                            r="16"
                            fill="currentColor"
                            className="text-primary"
                        />
                        <text
                            x="16"
                            y="22"
                            textAnchor="middle"
                            fontSize="16"
                            fill="#fff"
                            fontFamily="Arial"
                        >
                            L
                        </text>
                    </svg>
                    Lingano
                </span>
            </div>
            <div className="hidden md:flex gap-8 text-base font-medium">
                <a
                    href="#features"
                    className="hover:text-primary transition-colors"
                >
                    Features
                </a>
                <a
                    href="#pricing"
                    className="hover:text-primary transition-colors"
                >
                    Pricing
                </a>
                <a href="#faq" className="hover:text-primary transition-colors">
                    FAQ
                </a>
                <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                >
                    Contact
                </a>
            </div>
            <div className="flex gap-2 items-center">
                {/* Theme toggle */}
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        className="theme-controller hidden"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        aria-label="Toggle dark mode"
                    />
                    {/* sun icon */}
                    <svg
                        className="swap-off fill-current w-6 h-6 text-base-content"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64 17.657l-1.414 1.414-1.414-1.414 1.414-1.414zm12.02 0l1.414 1.414-1.414 1.414-1.414-1.414zm-12.02-12.02l-1.414-1.414 1.414-1.414 1.414 1.414zm12.02-1.414l1.414 1.414-1.414 1.414-1.414-1.414zM12 4V1h-1v3zm0 16v3h-1v-3zm8-8h3v-1h-3zm-16 0H1v-1h3zm12.364 6.364l2.121 2.121-1.415 1.415-2.12-2.122zm-10.728 0l-2.121 2.121 1.415 1.415 2.12-2.122zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
                    </svg>
                    {/* moon icon */}
                    <svg
                        className="swap-on fill-current w-6 h-6 text-base-content"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.752 15.002A9.718 9.718 0 0112 22C6.477 22 2 17.523 2 12c0-4.418 2.865-8.166 6.839-9.489a1 1 0 01.987 1.676A7.001 7.001 0 0012 19a7.001 7.001 0 006.813-5.813 1 1 0 011.676-.987c.293.293.293.768 0 1.061z" />
                    </svg>
                </label>
                <a
                    href="https://lingano.live/login"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 hover:bg-base-200 transition"
                >
                    Sign in
                </a>
                <a
                    href="https://lingano.live/register"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-base-100 bg-primary hover:bg-primary-focus transition"
                >
                    Sign up
                </a>
            </div>
        </nav>
    </header>
);

const SalientApp = () => {
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
                                <>
                                    <Navbar
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
                                    <SalientPricing />
                                    <div className="divider divider-primary mx-auto w-1/2"></div>
                                    <SalientFAQ />
                                    <div className="divider divider-primary mx-auto w-1/2"></div>
                                    <CTA />
                                    <Footer />
                                </>
                            }
                        />
                        <Route path="/login2" element={<SalientLogin />} />
                        <Route path="/register" element={<SalientRegister />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default SalientApp;
