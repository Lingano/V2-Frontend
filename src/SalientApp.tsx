import { useEffect, useState } from "react";
import Hero from "./SalientHero";
import Features from "./SalientFeatures";
import CTA from "./SalientCTA";
import Footer from "./SalientFooter";
import SalientPricing from "./SalientPricing";
import SalientFAQ from "./SalientFAQ"; // Import the new component

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
                    href="#"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 hover:bg-base-200 transition"
                >
                    Sign in
                </a>
                <a
                    href="#"
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

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5 relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
                {/* Shape 1 */}
                <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-green-500/30 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
                {/* Shape 2 */}
                <div className="absolute bottom-[-15%] right-[-15%] w-[50vw] h-[50vw] bg-cyan-500/20 rounded-full blur-3xl opacity-50 animate-float-slow-delay-1"></div>
                {/* Shape 3 */}
                <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] bg-blue-600/25 rounded-full blur-2xl opacity-50 animate-pulse-slow-delay-2"></div>
                {/* Shape 4 */}
                <div className="absolute bottom-[5%] left-[2%] w-[30vw] h-[30vw] bg-emerald-400/30 rounded-full blur-3xl opacity-60 animate-float-slow"></div>
                {/* Shape 5 - more central */}
                <div className="absolute top-[30%] left-[35%] w-[30vw] h-[30vw] bg-teal-500/20 rounded-full blur-3xl opacity-40 animate-pulse-slow-delay-1"></div>
            </div>

            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="flex-1 bg-transparent">
                <section className="py-20 text-base-content transition-colors duration-300 bg-transparent">
                    <Hero />
                </section>
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                <section className="py-20 text-base-content transition-colors duration-300 bg-transparent">
                    <Features />
                </section>
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                {/* Pricing Section */}
                <SalientPricing /> {/* Use the new component here */}
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                {/* FAQ Section */}
                <SalientFAQ /> {/* Use the new component here */}
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default SalientApp;
