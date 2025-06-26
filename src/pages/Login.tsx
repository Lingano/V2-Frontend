import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../app/hooks/useAuth";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Login = () => {
    const { t } = useTranslation();
    const { login, isAuthenticated, isLoading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated && !isLoading) {
            navigate("/app");
        }
    }, [isAuthenticated, isLoading, navigate]);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError(t("auth.login.errors.missingFields"));
            return;
        }

        setSubmitting(true);
        setError("");

        try {
            await login(email, password);
            // Navigation will be handled by useEffect when isAuthenticated changes
        } catch (err: any) {
            setError(err.message || t("auth.login.errors.unexpected"));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5 p-4">
            {/* Language Switcher */}
            <div className="absolute top-4 right-4">
                <LanguageSwitcher />
            </div>

            <div className="card shadow-xl border border-base-200 bg-base-100/20 backdrop-blur-md max-w-md w-full">
                {" "}
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center text-primary mb-4">
                        {t("auth.login.title")}
                    </h1>
                    <p className="text-center text-base-content mb-6">
                        {t("auth.login.subtitle")}
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
                        {" "}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-base-content">
                                    {t("auth.login.email")}
                                </span>
                            </label>{" "}
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t("auth.login.emailPlaceholder")}
                                className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                required
                                disabled={submitting || isLoading}
                            />
                        </div>
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text text-base-content">
                                    {t("auth.login.password")}
                                </span>
                            </label>{" "}
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t(
                                    "auth.login.passwordPlaceholder"
                                )}
                                className="input input-bordered w-full bg-base-100/50 focus:border-primary"
                                required
                                disabled={submitting || isLoading}
                            />
                        </div>{" "}
                        <div className="form-control mt-6">
                            {" "}
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={submitting || isLoading}
                            >
                                {submitting || isLoading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    t("auth.login.loginButton")
                                )}
                            </button>
                        </div>
                        <div className="text-sm flex justify-between mt-4">
                            <button
                                type="button"
                                className="link link-hover text-primary"
                                onClick={() => navigate("/register")}
                            >
                                {t("auth.login.createAccount")}
                            </button>
                            <button
                                type="button"
                                className="link link-hover text-primary"
                                onClick={() => navigate("/forgot-password")}
                            >
                                {t("auth.login.forgotPassword")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
