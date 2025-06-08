import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <header className="bg-transparent backdrop-blur border-b border-base-200/50 sticky top-0 z-50 dark:border-base-300/50">
            <nav className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-2xl font-extrabold text-primary"
                    >
                        <svg
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 32 32"
                        >
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
                    </Link>
                </div>{" "}
                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 text-sm font-medium">
                    <a
                        href="#features"
                        className="hover:text-primary transition-colors"
                    >
                        {t("navbar.features")}
                    </a>
                    <a
                        href="#pricing"
                        className="hover:text-primary transition-colors"
                    >
                        {t("navbar.pricing")}
                    </a>
                    <Link
                        to="/about"
                        className="hover:text-primary transition-colors"
                    >
                        {t("navbar.about")}
                    </Link>
                    <Link
                        to="/careers"
                        className="hover:text-primary transition-colors"
                    >
                        Careers
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-primary transition-colors"
                    >
                        {t("navbar.contact")}
                    </Link>
                </div>{" "}
                {/* Desktop Actions */}
                <div className="hidden md:flex gap-3 items-center">
                    <LanguageSwitcher />
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            className="theme-controller hidden"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            aria-label="Toggle dark mode"
                        />
                        <svg
                            className="swap-off fill-current w-5 h-5 text-base-content"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64 17.657l-1.414 1.414-1.414-1.414 1.414-1.414zm12.02 0l1.414 1.414-1.414 1.414-1.414-1.414zm-12.02-12.02l-1.414-1.414 1.414-1.414 1.414 1.414zm12.02-1.414l1.414 1.414-1.414 1.414-1.414-1.414zM12 4V1h-1v3zm0 16v3h-1v-3zm8-8h3v-1h-3zm-16 0H1v-1h3zm12.364 6.364l2.121 2.121-1.415 1.415-2.12-2.122zm-10.728 0l-2.121 2.121 1.415 1.415 2.12-2.122zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
                        </svg>
                        <svg
                            className="swap-on fill-current w-5 h-5 text-base-content"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.752 15.002A9.718 9.718 0 0112 22C6.477 22 2 17.523 2 12c0-4.418 2.865-8.166 6.839-9.489a1 1 0 01.987 1.676A7.001 7.001 0 0012 19a7.001 7.001 0 006.813-5.813 1 1 0 011.676-.987c.293.293.293.768 0 1.061z" />
                        </svg>
                    </label>
                    <Link
                        to="/login"
                        className="rounded-md px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 transition"
                    >
                        {t("navbar.signIn")}
                    </Link>
                    <Link
                        to="/register"
                        className="rounded-md px-3 py-1.5 text-sm font-medium text-base-100 bg-primary hover:bg-primary-focus transition"
                    >
                        {t("navbar.signUp")}
                    </Link>
                </div>{" "}
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher />
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            className="theme-controller hidden"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            aria-label="Toggle dark mode"
                        />
                        <svg
                            className="swap-off fill-current w-5 h-5 text-base-content"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64 17.657l-1.414 1.414-1.414-1.414 1.414-1.414zm12.02 0l1.414 1.414-1.414 1.414-1.414-1.414zm-12.02-12.02l-1.414-1.414 1.414-1.414 1.414 1.414zm12.02-1.414l1.414 1.414-1.414 1.414-1.414-1.414zM12 4V1h-1v3zm0 16v3h-1v-3zm8-8h3v-1h-3zm-16 0H1v-1h3zm12.364 6.364l2.121 2.121-1.415 1.415-2.12-2.122zm-10.728 0l-2.121 2.121 1.415 1.415 2.12-2.122zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
                        </svg>
                        <svg
                            className="swap-on fill-current w-5 h-5 text-base-content"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.752 15.002A9.718 9.718 0 0112 22C6.477 22 2 17.523 2 12c0-4.418 2.865-8.166 6.839-9.489a1 1 0 01.987 1.676A7.001 7.001 0 0012 19a7.001 7.001 0 006.813-5.813 1 1 0 011.676-.987c.293.293.293.768 0 1.061z" />
                        </svg>
                    </label>
                    <button
                        className="btn btn-ghost btn-sm"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>{" "}
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-base-100 border-t border-base-200">
                    <div className="px-6 py-4 space-y-3">
                        <a
                            href="#features"
                            className="block hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t("navbar.features")}
                        </a>
                        <a
                            href="#pricing"
                            className="block hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t("navbar.pricing")}
                        </a>{" "}
                        <Link
                            to="/about"
                            className="block hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t("navbar.about")}
                        </Link>
                        <Link
                            to="/careers"
                            className="block hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Careers
                        </Link>
                        <Link
                            to="/contact"
                            className="block hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t("navbar.contact")}
                        </Link>
                        <div className="pt-3 border-t border-base-200 space-y-2">
                            <Link
                                to="/login"
                                className="block w-full text-center rounded-md px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t("navbar.signIn")}
                            </Link>
                            <Link
                                to="/register"
                                className="block w-full text-center rounded-md px-4 py-2 text-sm font-medium text-base-100 bg-primary hover:bg-primary-focus transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t("navbar.signUp")}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
