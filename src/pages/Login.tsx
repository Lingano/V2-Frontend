import { useState } from "react";
import "../index.css"; // Import for Tailwind/DaisyUI classes
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const navigate = useNavigate();

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const loginEndpoint = `${apiBaseUrl}/api/auth/login`;
            const response = await fetch(loginEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // SUCCESSFUL LOGIN
                if (data.token) {
                    // VVVVVV  THIS IS THE CRITICAL PART VVVVVV
                    localStorage.setItem("token", data.token);
                    // ^^^^^^  THIS IS THE CRITICAL PART ^^^^^^

                    // Optionally, you can also store user info or redirect
                    // localStorage.setItem("user", JSON.stringify(data.user)); // If user data is also returned
                    setIsLoggedIn(true); // Update some global state if you have one
                    console.log("Login successful, token saved.");
                    navigate("/profile");
                } else {
                    setError("Login successful, but no token received.");
                }
            } else {
                // Handle login errors (e.g., invalid credentials)
                setError(
                    data.message ||
                        "Login failed. Please check your credentials."
                );
            }
        } catch (err: any) {
            setError(
                err.message || "An unexpected error occurred during login."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-100 flex justify-center items-center p-4">
            <div className="card bg-white max-w-md w-full shadow-2xl">
                <div className="card-body">
                    <h1 className="text-center text-3xl font-bold text-primary mb-2">
                        Welcome to Lingano
                    </h1>
                    <p className="text-center text-gray-600 mb-6">
                        Log in to continue learning
                    </p>

                    {error && (
                        <div role="alert" className="alert alert-error mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input input-bordered w-full bg-white focus:border-primary"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text text-gray-700">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="input input-bordered w-full bg-white focus:border-primary"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    "Log In"
                                )}
                            </button>
                        </div>

                        <div className="text-sm flex justify-between mt-4">
                            <a
                                href="/forgot-password"
                                /* TODO: Update to React Router Link */ className="link link-hover text-primary"
                            >
                                Forgot password?
                            </a>
                            <a
                                href="/register"
                                /* TODO: Update to React Router Link */ className="link link-hover text-primary"
                            >
                                Create an account
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
