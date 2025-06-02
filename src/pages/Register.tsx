import { useState } from "react";
import "../index.css"; // Import for Tailwind/DaisyUI classes

const Register = () => {
    const [name, setName] = useState(""); // <-- Add state for name
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Get the API base URL from environment variables
    // If using Vite proxy for all /api calls, this can be an empty string
    // and the endpoint will be relative, e.g., "/api/auth/register"
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // TODO: Add more validation if needed (e.g., password strength)

        setLoading(true);
        setError("");

        try {
            console.log("Register attempt:", { name, email }); // <-- Log name
            const registerEndpoint = `${apiBaseUrl}/api/auth/register`;

            const response = await fetch(registerEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name, // <-- Send name
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (parseError) {
                    throw new Error(
                        response.statusText ||
                            "Registration failed. Please try again."
                    );
                }
                throw new Error(
                    errorData.message ||
                        errorData.error ||
                        "Registration failed. Please try again."
                );
            }

            const data = await response.json();
            console.log("Registration successful:", data);

            alert("Registration successful! Please log in.");
            setName(""); // <-- Clear name field
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch (err: any) {
            setError(
                err.message ||
                    "An unexpected error occurred during registration."
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
                        Create Your Account
                    </h1>
                    <p className="text-center text-gray-600 mb-6">
                        Sign up to start your Lingano journey
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
                        {/* Add Name Input Field */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="input input-bordered w-full bg-white focus:border-primary"
                                required
                                disabled={loading}
                            />
                        </div>

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

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-gray-700">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create a password"
                                className="input input-bordered w-full bg-white focus:border-primary"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text text-gray-700">
                                    Confirm Password
                                </span>
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Confirm your password"
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
                                    "Register"
                                )}
                            </button>
                        </div>

                        <div className="text-sm text-center mt-4">
                            <span className="text-gray-600">
                                Already have an account?{" "}
                            </span>
                            <a
                                href="/login"
                                /* TODO: Update to React Router Link */ className="link link-hover text-primary"
                            >
                                Log In
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
