import { useState } from "react";
import "../index.css"; // Import for Tailwind/DaisyUI classes

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        // Here you would typically handle authentication
        console.log("Login attempt:", { email });

        // Reset form
        setEmail("");
        setPassword("");
        setError("");

        // Simulate successful login
        alert("Login successful! Redirecting...");
    };

    return (
        <div className="min-h-screen bg-base-100 flex justify-center items-center p-4">
            <div className="card bg-secondary text-secondary-content max-w-md w-full shadow-2xl">
                <div className="card-body">
                    <h1 className="text-center text-3xl font-bold text-primary mb-2">Welcome to Lingano</h1>
                    <p className="text-center text-primary-focus mb-6">Log in to continue learning</p>

                    {error && (
                        <div className="alert alert-error mb-4">
                            <span className="text-xl">⚠️</span>
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-primary">Email</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input input-bordered bg-secondary-focus border-primary"
                                required
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text text-primary">Password</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="input input-bordered bg-secondary-focus border-primary"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Log In
                            </button>
                        </div>

                        <div className="flex justify-between mt-4 text-primary-focus">
                            <a href="#" className="link link-hover text-primary">
                                Forgot password?
                            </a>
                            <a href="#" className="link link-hover text-primary">
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
