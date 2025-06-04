import { useEffect } from "react";
import Hero from "./SalientHero";
import Features from "./SalientFeatures";
import CTA from "./SalientCTA";
import Footer from "./SalientFooter";

const Navbar = () => (
    <header className="bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-2xl font-extrabold text-indigo-600">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="16" fill="#6366F1" />
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
                    className="hover:text-indigo-600 transition-colors"
                >
                    Features
                </a>
                <a
                    href="#pricing"
                    className="hover:text-indigo-600 transition-colors"
                >
                    Pricing
                </a>
                <a
                    href="#faq"
                    className="hover:text-indigo-600 transition-colors"
                >
                    FAQ
                </a>
                <a
                    href="#contact"
                    className="hover:text-indigo-600 transition-colors"
                >
                    Contact
                </a>
            </div>
            <div className="flex gap-2">
                <a
                    href="#"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-indigo-600 ring-1 ring-indigo-600/20 hover:bg-indigo-50 transition"
                >
                    Sign in
                </a>
                <a
                    href="#"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
                >
                    Sign up
                </a>
            </div>
        </nav>
    </header>
);

const SalientApp = () => {
    useEffect(() => {
        document.body.classList.add(
            "bg-gradient-to-br",
            "from-white",
            "via-blue-50",
            "to-purple-50"
        );
        return () => {
            document.body.classList.remove(
                "bg-gradient-to-br",
                "from-white",
                "via-blue-50",
                "to-purple-50"
            );
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default SalientApp;
