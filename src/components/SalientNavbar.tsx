import React from "react";
import { Link } from "react-router-dom";

interface SalientNavbarProps {
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
}

const SalientNavbar: React.FC<SalientNavbarProps> = ({
    darkMode,
    setDarkMode,
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
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        className="theme-controller hidden"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        aria-label="Toggle dark mode"
                    />
                    <svg
                        className="swap-off fill-current w-6 h-6 text-base-content"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64 17.657l-1.414 1.414-1.414-1.414 1.414-1.414zm12.02 0l1.414 1.414-1.414 1.414-1.414-1.414zm-12.02-12.02l-1.414-1.414 1.414-1.414 1.414 1.414zm12.02-1.414l1.414 1.414-1.414 1.414-1.414-1.414zM12 4V1h-1v3zm0 16v3h-1v-3zm8-8h3v-1h-3zm-16 0H1v-1h3zm12.364 6.364l2.121 2.121-1.415 1.415-2.12-2.122zm-10.728 0l-2.121 2.121 1.415 1.415 2.12-2.122zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
                    </svg>
                    <svg
                        className="swap-on fill-current w-6 h-6 text-base-content"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.752 15.002A9.718 9.718 0 0112 22C6.477 22 2 17.523 2 12c0-4.418 2.865-8.166 6.839-9.489a1 1 0 01.987 1.676A7.001 7.001 0 0012 19a7.001 7.001 0 006.813-5.813 1 1 0 011.676-.987c.293.293.293.768 0 1.061z" />
                    </svg>
                </label>
                <Link
                    to="/login"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 hover:bg-base-200 transition"
                >
                    Sign in
                </Link>
                <Link
                    to="/register"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-base-100 bg-primary hover:bg-primary-focus transition"
                >
                    Sign up
                </Link>
            </div>
        </nav>
    </header>
);

export default SalientNavbar;
