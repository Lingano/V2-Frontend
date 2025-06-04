import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rybbit from "./pages/Rybbit";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import DaisyUIDemoPage from "./pages/DaisyUIDemoPage";
import "./index.css"; // Ensure Tailwind CSS is imported

// Salient-style Navbar
const Navbar = () => (
    <header className="bg-white/80 dark:bg-base-100/80 backdrop-blur border-b border-base-300 sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-2xl font-extrabold text-primary">
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
                <a href="/" className="hover:text-primary transition-colors">
                    Home
                </a>
                <a
                    href="/about"
                    className="hover:text-primary transition-colors"
                >
                    About
                </a>
                <a
                    href="/contact"
                    className="hover:text-primary transition-colors"
                >
                    Contact
                </a>
                <a
                    href="/rybbit"
                    className="hover:text-primary transition-colors"
                >
                    Rybbit
                </a>
                <a
                    href="/profile"
                    className="hover:text-primary transition-colors"
                >
                    Profile
                </a>
            </div>
            <div className="flex gap-2">
                <a
                    href="/login"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 hover:bg-primary/10 transition"
                >
                    Sign in
                </a>
                <a
                    href="/register"
                    className="rounded-md px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition"
                >
                    Sign up
                </a>
            </div>
        </nav>
    </header>
);

const App = () => {
    // Add a subtle gradient background like Salient
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
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <div className="max-w-7xl mx-auto px-6">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/rybbit" element={<Rybbit />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/profile" element={<UserProfile />} />
                            <Route
                                path="/daisyui-demo"
                                element={<DaisyUIDemoPage />}
                            />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
