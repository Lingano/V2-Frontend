import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SalientRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [profileFile, setProfileFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        if (!profileFile) return;
        const url = URL.createObjectURL(profileFile);
        setPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [profileFile]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !confirm) {
            setError("All fields are required.");
            return;
        }
        if (password !== confirm) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            if (profileFile) formData.append("avatar", profileFile);

            const response = await fetch(`${apiBaseUrl}/api/auth/register`, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (response.ok && data.token) {
                localStorage.setItem("token", data.token);
                navigate("/profile");
            } else {
                setError(
                    data.message || "Registration failed. Please try again."
                );
            }
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5 p-4">
            <div className="card shadow-xl border border-base-200 bg-base-100/20 backdrop-blur-md max-w-md w-full">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center text-primary mb-4">
                        Create an Account
                    </h1>
                    <p className="text-center text-base-content mb-6">
                        Sign up to start learning
                    </p>
                    {error && (
                        <div role="alert" className="alert alert-error mb-4">
                            <span>{error}</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label justify-center">
                                <span className="label-text text-base-content">
                                    Profile Picture
                                </span>
                            </label>
                            {preview && (
                                <div className="flex justify-center mb-4">
                                    <div className="avatar">
                                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                                            <img
                                                src={preview}
                                                alt="avatar preview"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                className="file-input file-input-bordered w-full bg-base-100/50 mt-2"
                                onChange={(e) =>
                                    e.target.files &&
                                    setProfileFile(e.target.files[0])
                                }
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-base-content">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your full name"
                                className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-base-content">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-base-content">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create a password"
                                className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text text-base-content">
                                    Confirm Password
                                </span>
                            </label>
                            <input
                                type="password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="Confirm password"
                                className="input input-bordered w-full bg-base-100/50 focus:border-primary"
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

                        <div className="text-sm flex justify-between mt-4">
                            <button
                                type="button"
                                className="link link-hover text-primary"
                                onClick={() => navigate("/login2")}
                            >
                                Already have an account?
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SalientRegister;
