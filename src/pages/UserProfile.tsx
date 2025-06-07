import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // For Tailwind/DaisyUI styles

interface User {
    id: string;
    name: string;
    email: string;
    profile: {
        // Add this nested profile object
        bio?: string;
        profile_picture?: string;
        // Add other fields from models.UserProfile
    };
    // Add other user fields you expect from your API
}

const UserProfile = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        const fetchUserProfile = async () => {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem("token"); // Assuming you store your JWT token with this key

            if (!token) {
                setIsLoggedIn(false);
                setLoading(false);
                setError("No user is currently logged in.");
                return;
            }

            try {
                const profileEndpoint = `${apiBaseUrl}/api/app/profile`;
                const response = await fetch(profileEndpoint, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data: User = await response.json();
                    setUserData(data);
                    setIsLoggedIn(true);
                } else if (response.status === 401 || response.status === 403) {
                    setIsLoggedIn(false);
                    setError(
                        "Session expired or unauthorized. Please log in again."
                    );
                    localStorage.removeItem("token"); // Clear invalid token
                } else {
                    const errorData = await response.json();
                    setError(
                        errorData.message || "Failed to fetch user profile."
                    );
                    setIsLoggedIn(false);
                }
            } catch (err) {
                setError(
                    "An error occurred while fetching user data. Please try again."
                );
                setIsLoggedIn(false);
                console.error("Profile fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [apiBaseUrl]);
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5 relative overflow-hidden">
            {/* Dynamic Background Elements - Consistent with main app */}
            <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
                <div
                    className="absolute bg-primary/30 rounded-full blur-3xl animate-pulse"
                    style={{
                        top: "10%",
                        left: "20%",
                        width: "40vw",
                        height: "40vw",
                        opacity: 0.6,
                    }}
                ></div>
                <div
                    className="absolute bg-secondary/20 rounded-full blur-3xl animate-pulse"
                    style={{
                        top: "60%",
                        right: "10%",
                        width: "35vw",
                        height: "35vw",
                        opacity: 0.5,
                    }}
                ></div>
                <div
                    className="absolute bg-accent/25 rounded-full blur-3xl animate-pulse"
                    style={{
                        top: "80%",
                        left: "10%",
                        width: "30vw",
                        height: "30vw",
                        opacity: 0.5,
                    }}
                ></div>
                <div
                    className="absolute bg-info/30 rounded-full blur-3xl animate-pulse"
                    style={{
                        top: "40%",
                        right: "30%",
                        width: "25vw",
                        height: "25vw",
                        opacity: 0.4,
                    }}
                ></div>
            </div>{" "}
            {/* Navigation Header */}
            <div className="relative z-10 bg-base-100/80 backdrop-blur-sm border-b border-base-200/50 sticky top-0">
                <div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 text-2xl font-extrabold text-primary hover:text-primary/80 transition-colors">
                            <svg
                                width="32"
                                height="32"
                                fill="none"
                                viewBox="0 0 32 32"
                            >
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="16"
                                    fill="currentColor"
                                    className="text-primary"
                                />
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
                    </Link>
                    <Link
                        to="/"
                        className="btn btn-outline btn-primary hover:scale-105 transition-transform"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {" "}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 transition-colors duration-300">
                        User Profile 👤
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto transition-colors duration-300">
                        Manage your account settings and view your profile
                        information
                    </p>
                </div>
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <span className="loading loading-lg loading-spinner text-primary mb-4"></span>
                        <p className="text-base-content/70">
                            Loading your profile...
                        </p>
                    </div>
                )}{" "}
                {!loading && error && (
                    <div className="max-w-2xl mx-auto">
                        <div
                            role="alert"
                            className="alert alert-error shadow-lg mb-6 border border-error/20 bg-error/10 backdrop-blur-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6 text-error"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-error">{error}</span>
                        </div>
                        <div className="card bg-base-100/90 backdrop-blur-sm shadow-xl border border-base-200/50 hover:shadow-2xl transition-all duration-300">
                            <div className="card-body text-center">
                                <h2 className="card-title justify-center text-base-content text-2xl mb-4">
                                    🔐 Need to sign in?
                                </h2>
                                <p className="text-base-content/70 mb-6 text-lg">
                                    Access your profile by signing in to your
                                    account
                                </p>
                                <div className="card-actions justify-center gap-4">
                                    <Link
                                        to="/login"
                                        className="btn btn-primary btn-lg font-bold px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        🚀 Sign In
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="btn btn-outline btn-primary btn-lg hover:scale-105 transition-transform"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {!loading && !error && isLoggedIn && userData && (
                    <div className="max-w-4xl mx-auto">
                        {" "}
                        <div className="card bg-base-100/90 backdrop-blur-sm shadow-xl border border-base-200/50 hover:shadow-2xl transition-all duration-300">
                            <div className="card-body">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {" "}
                                    {/* Profile Avatar Section */}
                                    <div className="flex-shrink-0 flex flex-col items-center text-center">
                                        <div className="avatar placeholder mb-4">
                                            <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                                                {userData.profile
                                                    ?.profile_picture ? (
                                                    <img
                                                        src={
                                                            userData.profile
                                                                .profile_picture
                                                        }
                                                        alt="Profile"
                                                        className="rounded-full w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <span className="text-3xl font-bold">
                                                        {userData.name
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="badge badge-success badge-lg shadow-sm">
                                            ✅ Active User
                                        </div>
                                    </div>{" "}
                                    {/* Profile Information */}
                                    <div className="flex-1">
                                        <h2 className="card-title text-3xl text-primary mb-6 transition-colors duration-300">
                                            Welcome back, {userData.name}! 👋
                                        </h2>

                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold text-base-content">
                                                        Full Name
                                                    </span>
                                                </label>
                                                <div className="input input-bordered flex items-center bg-base-200/50 border-base-300 transition-colors">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        className="w-4 h-4 opacity-70 mr-2 text-primary"
                                                    >
                                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                                    </svg>
                                                    <span className="grow text-base-content">
                                                        {userData.name}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold text-base-content">
                                                        Email Address
                                                    </span>
                                                </label>
                                                <div className="input input-bordered flex items-center bg-base-200/50 border-base-300 transition-colors">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        className="w-4 h-4 opacity-70 mr-2 text-primary"
                                                    >
                                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                                    </svg>
                                                    <span className="grow text-base-content">
                                                        {userData.email}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-semibold text-base-content">
                                                        User ID
                                                    </span>
                                                </label>
                                                <div className="input input-bordered flex items-center bg-base-200/50 border-base-300 transition-colors">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        className="w-4 h-4 opacity-70 mr-2 text-primary"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="grow font-mono text-sm text-base-content/80">
                                                        {userData.id}
                                                    </span>
                                                </div>
                                            </div>

                                            {userData.profile?.bio && (
                                                <div className="form-control md:col-span-2">
                                                    <label className="label">
                                                        <span className="label-text font-semibold text-base-content">
                                                            Bio
                                                        </span>
                                                    </label>
                                                    <div className="textarea textarea-bordered min-h-20 p-4 bg-base-200/50 border-base-300 text-base-content transition-colors">
                                                        {userData.profile.bio}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="card-actions justify-end mt-8 gap-4">
                                            <button className="btn btn-outline btn-primary hover:scale-105 transition-transform">
                                                Edit Profile
                                            </button>
                                            <button className="btn btn-primary hover:scale-105 transition-transform shadow-lg">
                                                Account Settings
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* Quick Actions */}
                        <div className="grid gap-6 mt-8 md:grid-cols-3">
                            <div className="card bg-gradient-to-br from-primary to-primary/80 text-primary-content shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-primary/20">
                                <div className="card-body text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-content/20 rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="card-title justify-center text-lg font-bold">
                                        ⚙️ Settings
                                    </h3>
                                    <p className="text-primary-content/80">
                                        Manage account preferences
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-gradient-to-br from-secondary to-secondary/80 text-secondary-content shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-secondary/20">
                                <div className="card-body text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary-content/20 rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l-1-3m1 3l-1-3m-16.5-3h16.5"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="card-title justify-center text-lg font-bold">
                                        📊 Dashboard
                                    </h3>
                                    <p className="text-secondary-content/80">
                                        View your activity
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-gradient-to-br from-accent to-accent/80 text-accent-content shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-accent/20">
                                <div className="card-body text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-accent-content/20 rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="card-title justify-center text-lg font-bold">
                                        💬 Support
                                    </h3>
                                    <p className="text-accent-content/80">
                                        Get help and support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}{" "}
                {!loading && !error && !isLoggedIn && (
                    <div className="max-w-2xl mx-auto">
                        <div
                            role="alert"
                            className="alert alert-info shadow-lg mb-6 border border-info/20 bg-info/10 backdrop-blur-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-current shrink-0 w-6 h-6 text-info"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span className="text-info">
                                No user is currently logged in. Please log in to
                                view your profile.
                            </span>
                        </div>
                        <div className="card bg-base-100/90 backdrop-blur-sm shadow-xl border border-base-200/50 hover:shadow-2xl transition-all duration-300">
                            <div className="card-body text-center">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                    <span className="text-3xl">👤</span>
                                </div>
                                <h2 className="card-title justify-center text-base-content text-2xl mb-4">
                                    Access Your Profile
                                </h2>
                                <p className="text-base-content/70 mb-6 text-lg">
                                    Sign in to view and manage your account
                                    information
                                </p>
                                <div className="card-actions justify-center gap-4">
                                    <Link
                                        to="/login"
                                        className="btn btn-primary btn-lg font-bold px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        🚀 Sign In
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="btn btn-outline btn-primary btn-lg hover:scale-105 transition-transform"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
