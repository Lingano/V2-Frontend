import { useState } from "react";

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
        <div className="login-page">
            <div className="login-container">
                <h1>Welcome to Lingano</h1>
                <p className="subtitle">Log in to continue learning</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="login-button">
                            Log In
                        </button>
                    </div>

                    <div className="form-links">
                        <a href="#" className="forgot-password">
                            Forgot password?
                        </a>
                        <span className="separator">•</span>
                        <a href="#" className="create-account">
                            Create an account
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
