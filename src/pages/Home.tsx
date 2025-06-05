import { useState, useEffect } from "react";
import "../index.css"; // Ensure Tailwind CSS is imported

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
    const [rangeValue1, setRangeValue1] = useState(40);
    const [rangeValue2, setRangeValue2] = useState(40);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeOptions: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };
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
        updateClock();
        const clockInterval = setInterval(updateClock, 1000);
        return () => clearInterval(clockInterval);
    }, []);

    return (
        <main className="container mx-auto px-4 py-8">
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
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar avatar-online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">
                        31 tasks remaining
                    </div>
                </div>
            </div>
            <input
                type="range"
                min={0}
                max="100"
                value={rangeValue1}
                className="range range-primary"
                onChange={(e) => setRangeValue1(Number(e.target.value))}
            />
            slider value: {rangeValue1}
            <input
                type="range"
                min={0}
                max="100"
                value={rangeValue2}
                className="range"
                onChange={(e) => setRangeValue2(Number(e.target.value))}
            />
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
            <div className="divider">OR</div>
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
                                Our interface adapts perfectly to any device,
                                from mobile phones to large desktops.
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
                                Track and analyze your data with our powerful
                                analytics dashboard tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
