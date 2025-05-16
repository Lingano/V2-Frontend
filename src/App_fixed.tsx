import { useState, useEffect } from "react";
import "./App_fixed.css";
import "./pages/Login.css";
import Login from "./pages/Login";

// Your app
const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    // Use environment variables for API URL
    const API_URL =
        import.meta.env.VITE_API_BASE_URL ||
        "https://linganodjango-8d1cd6dceb8a.herokuapp.com"; // Update the clock every second
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

    if (showLogin) {
        return <Login />;
    }

    return (
        <div className="app">
            {/* Navigation */}
            <header className="header">
                <div className="logo">Lingano</div>
                <nav
                    className="nav-links"
                    style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                    }}
                >
                    <a
                        href="/"
                        style={{
                            color: "var(--primary-color)",
                            textDecoration: "none",
                        }}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        style={{
                            color: "var(--primary-color)",
                            textDecoration: "none",
                        }}
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        style={{
                            color: "var(--primary-color)",
                            textDecoration: "none",
                        }}
                    >
                        Contact
                    </a>
                </nav>
                <div>
                    <button
                        className="button outline glass"
                        onClick={() => setShowLogin(true)}
                    >
                        Sign In
                    </button>
                    <button
                        className="button login-button"
                        onClick={() => setShowLogin(true)}
                    >
                        Sign Up
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container">
                {/* Welcome Section */}
                <div className="welcome">
                    <h1>Welcome to Lingano</h1>
                    <p>
                        The fast, fun and effective way to learn. This is
                        netlify!
                    </p>{" "}
                    <div className="time-card">
                        <div className="time-icon">⏰</div>
                        <div className="time-content">
                            <p className="time-label">Current Time</p>
                            {currentTime.split("\n").map((line, index) => (
                                <p
                                    key={index}
                                    className={
                                        index === 0 ? "time-value" : "time-date"
                                    }
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="dashboard">
                    <h2>Dashboard</h2>
                    <div className="dashboard-grid">
                        <div className="dashboard-card">
                            <h3>Learning Progress</h3>
                            <div className="progress-section">
                                <div className="progress-item">
                                    <div className="progress-header">
                                        <span>Frontend Mastery</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="progress-header">
                                        <span>Backend Integration</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: "60%",
                                                backgroundColor: "#48BB78",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard-card stat-card">
                            <h3>Total Users</h3>
                            <div className="stat-number">5,670</div>
                            <div className="stat-label">Active users</div>
                            <div className="stat-change positive">
                                +15% vs last month
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="features">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h3>Real-time Updates</h3>
                            <p>
                                Stay updated with the latest information in
                                real-time.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Responsive Design</h3>
                            <p>
                                Our interface adapts perfectly to any device,
                                from mobile phones to large desktops.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3>Advanced Analytics</h3>
                            <p>
                                Track and analyze your data with our powerful
                                analytics dashboard tools.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <p className="copyright">
                        © 2025 Lingano. All rights reserved
                    </p>
                    <div className="footer-links">
                        <a href="/about">About</a>
                        <a href="#">Blog</a>
                        <a href="/contact">Contact</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
