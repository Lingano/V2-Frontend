import { useState, useEffect } from "react";
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
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-screen bg-base-100">
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">
                User Profile
            </h1>

            {loading && (
                <div className="text-center">
                    <span className="loading loading-lg loading-spinner text-primary"></span>
                    <p>Loading profile...</p>
                </div>
            )}

            {!loading && error && (
                <div role="alert" className="alert alert-error shadow-lg">
                    <span>Error! {error}</span>
                </div>
            )}

            {!loading && !error && isLoggedIn && userData && (
                <div className="card lg:card-side bg-secondary text-secondary-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">
                            Welcome, {userData.name}!
                        </h2>
                        <p>
                            <strong className="text-primary-focus">
                                Email:
                            </strong>{" "}
                            {userData.email}
                        </p>
                        <p>
                            <strong className="text-primary-focus">
                                User ID:
                            </strong>{" "}
                            {userData.id}
                        </p>
                        {/* Add more user data fields here as needed */}
                        {/* Example:
                        <p>
                            <strong className="text-primary-focus">Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}
                        </p>
                        */}
                    </div>
                </div>
            )}

            {!loading && !error && !isLoggedIn && (
                <div role="alert" className="alert alert-info shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>
                        No user is currently logged in. Please log in to view
                        your profile.
                    </span>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
