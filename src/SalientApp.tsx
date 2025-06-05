import { useEffect, useState } from "react";
import Hero from "./SalientHero";
import Features from "./SalientFeatures";
import CTA from "./SalientCTA";
import Footer from "./SalientFooter";

const Navbar = ({
    darkMode,
    setDarkMode,
}: {
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
}) => (
    <header className="bg-base-100/80 backdrop-blur border-b border-base-200 sticky top-0 z-50 dark:bg-base-200/80 dark:border-base-300">
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
        <div className="min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-300">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="flex-1">
                <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
                    <Hero />
                </section>
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
                    <Features />
                </section>
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-transparent">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-primary mb-10">
                            Pricing
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Basic Plan */}
                            <div className="card shadow-xl border border-base-200 bg-base-100/80 backdrop-blur-md transition-all hover:scale-105">
                                <div className="card-body items-center text-center">
                                    <h3 className="card-title text-primary mb-2">
                                        Basic
                                    </h3>
                                    <div className="text-4xl font-bold text-primary mb-4">
                                        Free
                                    </div>
                                    <ul className="mb-6 space-y-2 text-base-content">
                                        <li>✔️ Access to core lessons</li>
                                        <li>✔️ Daily practice</li>
                                        <li>✔️ Community support</li>
                                    </ul>
                                    <button className="btn btn-outline btn-primary w-full">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                            {/* Pro Plan */}
                            <div className="card shadow-2xl border-2 border-primary bg-primary/90 text-primary-content backdrop-blur-md scale-105 z-10 transition-all hover:scale-110">
                                <div className="card-body items-center text-center">
                                    <h3 className="card-title text-base-100 mb-2">
                                        Pro
                                    </h3>
                                    <div className="text-4xl font-bold text-base-100 mb-4">
                                        €9
                                        <span className="text-lg align-top">
                                            /mo
                                        </span>
                                    </div>
                                    <ul className="mb-6 space-y-2 text-primary-content/80">
                                        <li>✔️ Everything in Basic</li>
                                        <li>✔️ Advanced analytics</li>
                                        <li>✔️ Real-time updates</li>
                                        <li>✔️ Priority support</li>
                                    </ul>
                                    <button className="btn btn-white text-primary font-semibold w-full hover:bg-base-200">
                                        Start Free Trial
                                    </button>
                                </div>
                            </div>
                            {/* Team Plan */}
                            <div className="card shadow-xl border border-base-200 bg-base-100/80 backdrop-blur-md transition-all hover:scale-105">
                                <div className="card-body items-center text-center">
                                    <h3 className="card-title text-primary mb-2">
                                        Team
                                    </h3>
                                    <div className="text-4xl font-bold text-primary mb-4">
                                        €29
                                        <span className="text-lg align-top">
                                            /mo
                                        </span>
                                    </div>
                                    <ul className="mb-6 space-y-2 text-base-content">
                                        <li>✔️ All Pro features</li>
                                        <li>✔️ Team management</li>
                                        <li>✔️ Progress tracking</li>
                                        <li>✔️ Dedicated support</li>
                                    </ul>
                                    <button className="btn btn-outline btn-primary w-full">
                                        Contact Sales
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                {/* FAQ Section */}
                <section id="faq" className="py-20 bg-transparent">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-primary mb-10">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            <div className="collapse collapse-arrow bg-base-100/80 border border-base-200 backdrop-blur-md shadow-md">
                                <input
                                    type="radio"
                                    name="faq-accordion"
                                    defaultChecked
                                />
                                <div className="collapse-title text-lg font-semibold text-primary">
                                    What is Lingano?
                                </div>
                                <div className="collapse-content text-base-content">
                                    Lingano is a modern platform designed to
                                    make language learning fast, fun, and
                                    effective, with real-time updates and
                                    advanced analytics.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100/80 border border-base-200 backdrop-blur-md shadow-md">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title text-lg font-semibold text-primary">
                                    Is there a free plan?
                                </div>
                                <div className="collapse-content text-base-content">
                                    Yes! Our Basic plan is free and gives you
                                    access to core lessons and daily practice.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100/80 border border-base-200 backdrop-blur-md shadow-md">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title text-lg font-semibold text-primary">
                                    Can I upgrade or cancel anytime?
                                </div>
                                <div className="collapse-content text-base-content">
                                    Absolutely! You can upgrade, downgrade, or
                                    cancel your subscription at any time from
                                    your account settings.
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-100/80 border border-base-200 backdrop-blur-md shadow-md">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title text-lg font-semibold text-primary">
                                    Do you offer team plans?
                                </div>
                                <div className="collapse-content text-base-content">
                                    Yes, our Team plan is perfect for
                                    organizations and includes team management
                                    and dedicated support.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider divider-primary mx-auto w-1/2"> </div>
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default SalientApp;
