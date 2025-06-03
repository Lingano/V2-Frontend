import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App_fixed.css";
import "./index.css"; // Make sure we import the index.css with Tailwind directives
import "./pages/Login.css";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rybbit from "./pages/Rybbit";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile"; // Add this import

// Home page component
const Home = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("dark-mode");
            if (savedMode !== null) {
                return savedMode === "true";
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    // Apply dark mode theme
    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    // Update the clock every second
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();

            // Format the time
            const timeOptions: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };

            // Format the date (e.g., "Sunday, May 11, 2025")
            const dateOptions: Intl.DateTimeFormatOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };

            const formattedTime = now.toLocaleTimeString(
                undefined,
                timeOptions
            );
            const formattedDate = now.toLocaleDateString(
                undefined,
                dateOptions
            );

            setCurrentTime(`${formattedTime}\n${formattedDate}`);
        };

        // Initial update
        updateClock();

        // Update clock every second
        const clockInterval = setInterval(updateClock, 1000);

        return () => clearInterval(clockInterval);
    }, []);

    return (
        <>
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="text-center my-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Welcome to Lingano
                    </h1>
                    <p className="text-xl text-base-content mb-8">
                        The fast, fun and effective way to learn.
                    </p>

                    <div className="card bg-secondary text-secondary-content shadow-lg max-w-md mx-auto">
                        <div className="card-body flex md:flex-row items-center">
                            <div className="text-primary text-3xl mr-4">⏰</div>
                            <div>
                                <p className="font-bold">Current Time</p>
                                {currentTime.split("\n").map((line, index) => (
                                    <p
                                        key={index}
                                        className={
                                            index === 0
                                                ? "text-primary text-xl"
                                                : "text-sm opacity-75"
                                        }
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Dashboard
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="card bg-secondary text-secondary-content shadow-lg col-span-2">
                            <div className="card-body">
                                <h3 className="card-title text-primary">
                                    Learning Progress
                                </h3>
                                <div className="space-y-6 mt-4">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span>Frontend Mastery</span>
                                            <span className="text-primary">
                                                75%
                                            </span>
                                        </div>
                                        <div className="w-full bg-base-300 rounded-full h-2.5">
                                            <div
                                                className="bg-primary h-2.5 rounded-full"
                                                style={{ width: "75%" }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span>Backend Integration</span>
                                            <span className="text-primary">
                                                60%
                                            </span>
                                        </div>
                                        <div className="w-full bg-base-300 rounded-full h-2.5">
                                            <div
                                                className="bg-primary h-2.5 rounded-full"
                                                style={{ width: "60%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-secondary text-secondary-content shadow-lg">
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
                                    Total Users
                                </h3>
                                <div className="text-4xl font-bold text-primary mt-4">
                                    5,670
                                </div>
                                <div className="text-primary-focus mt-2">
                                    Active users
                                </div>
                                <div className="badge badge-primary mt-4 py-3">
                                    +15% vs last month
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-all">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl mb-4">
                                    🔄
                                </div>
                                <h3 className="card-title text-primary">
                                    Real-time Updates
                                </h3>
                                <p>
                                    Stay updated with the latest information in
                                    real-time.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-all">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl mb-4">
                                    📱
                                </div>
                                <h3 className="card-title text-primary">
                                    Responsive Design
                                </h3>
                                <p>
                                    Our interface adapts perfectly to any
                                    device, from mobile phones to large
                                    desktops.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-all">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl mb-4">
                                    📊
                                </div>
                                <h3 className="card-title text-primary">
                                    Advanced Analytics
                                </h3>
                                <p>
                                    Track and analyze your data with our
                                    powerful analytics dashboard tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

// Your app
const App = () => {
    // Use environment variables for API URL
    const API_URL =
        import.meta.env.VITE_API_BASE_URL ||
        "https://linganodjango-8d1cd6dceb8a.herokuapp.com";

    const [showLogin, setShowLogin] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("dark-mode");
            if (savedMode !== null) {
                return savedMode === "true";
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    // Apply dark mode theme
    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    if (showLogin) {
        return <Login />;
    }

    return (
        <Router>
            <div className="min-h-screen bg-base-100">
                {/* Navigation */}
                <header className="navbar bg-secondary text-secondary-content sticky top-0 z-50 shadow-md">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <span className="text-xl">☰</span>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-secondary-content rounded-box w-52"
                            >
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/rybbit">Rybbit</Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="btn btn-ghost normal-case text-xl text-primary"
                        >
                            Lingano
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to="/" className="hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-primary"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-primary"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/rybbit"
                                    className="hover:text-primary"
                                >
                                    Rybbit
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    className="hover:text-primary"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    className="hover:text-primary"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <label className="swap swap-rotate btn btn-ghost text-primary mr-2">
                            <input
                                type="checkbox"
                                className="theme-controller"
                                value="dark"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            {/* sun icon */}
                            <span className="swap-off text-xl">☀️</span>
                            {/* moon icon */}
                            <span className="swap-on text-xl">🌙</span>
                        </label>
                        <button
                            className="btn btn-outline btn-primary mr-2"
                            onClick={() => setShowLogin(true)}
                        >
                            Sign In
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowLogin(true)}
                        >
                            Sign Up
                        </button>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rybbit" element={<Rybbit />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<UserProfile />} />{" "}
                    {/* Add this route */}
                </Routes>

                {/* Footer */}
                <footer className="footer p-10 bg-secondary text-secondary-content">
                    <nav>
                        <h6 className="footer-title text-primary">Lingano</h6>
                        <p className="w-3/4">
                            Making language learning natural, effective, and
                            enjoyable for everyone.
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-primary">Company</h6>
                        <Link
                            to="/about"
                            className="link link-hover hover:text-primary"
                        >
                            About Us
                        </Link>
                        <a className="link link-hover hover:text-primary">
                            Careers
                        </a>
                        <a className="link link-hover hover:text-primary">
                            Blog
                        </a>
                        <a className="link link-hover hover:text-primary">
                            Press
                        </a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-primary">Resources</h6>
                        <a className="link link-hover hover:text-primary">
                            Language Guides2
                        </a>
                        <a className="link link-hover hover:text-primary">
                            Community
                        </a>
                        <a className="link link-hover hover:text-primary">
                            Tutors
                        </a>
                        <a className="link link-hover hover:text-primary">
                            FAQ
                        </a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-primary">Contact</h6>
                        <Link
                            to="/contact"
                            className="link link-hover hover:text-primary"
                        >
                            Contact Us
                        </Link>
                        <p>hello@lingano.com</p>
                        <p>1-800-LINGANO22</p>
                    </nav>
                </footer>
                <div className="footer footer-center p-4 bg-black text-primary">
                    <aside>
                        <p>
                            © {new Date().getFullYear()} Lingano. All rights
                            reserved.
                        </p>
                    </aside>
                </div>
            </div>
        </Router>
    );
};

export default App;
