import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";
import LanguageSwitcher from "../components/LanguageSwitcher";

const UserProfile = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth();
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, isLoading, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="mt-4 text-base-content/70">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title">Not Logged In</h2>
                        <p>Please log in to view your profile.</p>
                        <div className="card-actions">
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400/5 via-cyan-500/5 to-blue-600/5 relative overflow-hidden">
            {/* Language Switcher */}
            <div className="absolute top-4 right-4 z-10">
                <LanguageSwitcher />
            </div>

            {/* Navigation */}
            <div className="absolute top-4 left-4 z-10">
                <Link to="/" className="btn btn-ghost">
                    ← Home
                </Link>
            </div>

            <div className="container mx-auto p-6 max-w-4xl relative z-10">
                <div className="space-y-8">
                    {/* Profile Header */}
                    <div className="card bg-base-100/20 backdrop-blur-md shadow-xl border border-base-200">
                        <div className="card-body">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="avatar">
                                    <div className="w-24 rounded-full bg-primary/20 flex items-center justify-center">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt="Profile" className="rounded-full" />
                                        ) : (
                                            <span className="text-2xl font-bold text-primary">
                                                {user.name.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-center md:text-left flex-1">
                                    <h1 className="text-3xl font-bold">{user.name}</h1>
                                    <p className="text-base-content/70">{user.email}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <div className="badge badge-primary">
                                            Level: {user.level.charAt(0).toUpperCase() + user.level.slice(1)}
                                        </div>
                                        <div className="badge badge-secondary">
                                            {user.totalXP} XP
                                        </div>
                                        <div className="badge badge-accent">
                                            {user.streak} day streak
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => setEditing(!editing)}
                                        className="btn btn-outline btn-sm"
                                    >
                                        {editing ? 'Cancel' : 'Edit Profile'}
                                    </button>
                                    <button 
                                        onClick={handleLogout}
                                        className="btn btn-error btn-sm"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Basic Information */}
                        <div className="card bg-base-100/20 backdrop-blur-md shadow-xl border border-base-200">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Basic Information</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">User ID</span>
                                        </label>
                                        <div className="bg-base-200 p-3 rounded-lg font-mono text-sm">
                                            {user.id}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Name</span>
                                        </label>
                                        <div className="bg-base-200 p-3 rounded-lg">
                                            {user.name}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <div className="bg-base-200 p-3 rounded-lg">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Language Learning */}
                        <div className="card bg-base-100/20 backdrop-blur-md shadow-xl border border-base-200">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Language Learning</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Native Language</span>
                                        </label>
                                        <div className="bg-base-200 p-3 rounded-lg">
                                            {user.nativeLanguage.toUpperCase()}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Target Languages</span>
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {user.targetLanguages.map((lang, index) => (
                                                <div key={index} className="badge badge-outline">
                                                    {lang.toUpperCase()}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Current Level</span>
                                        </label>
                                        <div className="bg-base-200 p-3 rounded-lg">
                                            {user.level.charAt(0).toUpperCase() + user.level.slice(1)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progress Stats */}
                        <div className="card bg-base-100/20 backdrop-blur-md shadow-xl border border-base-200">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Progress</h2>
                                <div className="space-y-4">
                                    <div className="stat bg-primary/10 rounded-lg">
                                        <div className="stat-title">Total XP</div>
                                        <div className="stat-value text-primary">{user.totalXP}</div>
                                        <div className="stat-desc">Experience points earned</div>
                                    </div>
                                    <div className="stat bg-success/10 rounded-lg">
                                        <div className="stat-title">Current Streak</div>
                                        <div className="stat-value text-success">{user.streak}</div>
                                        <div className="stat-desc">Days of consistent learning</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="card bg-base-100/20 backdrop-blur-md shadow-xl border border-base-200">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Quick Actions</h2>
                                <div className="space-y-3">
                                    <Link to="/app/dashboard" className="btn btn-primary w-full">
                                        Go to Dashboard
                                    </Link>
                                    <Link to="/app/lessons" className="btn btn-outline w-full">
                                        Browse Lessons
                                    </Link>
                                    <Link to="/app/progress" className="btn btn-outline w-full">
                                        View Progress
                                    </Link>
                                    <Link to="/app/settings" className="btn btn-ghost w-full">
                                        Account Settings
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Raw Data (for debugging) */}
                    <div className="card bg-base-100/20 backdrop-blur-md shadow-xl border border-base-200">
                        <div className="card-body">
                            <h2 className="card-title mb-4">User Data (Debug)</h2>
                            <details className="collapse bg-base-200">
                                <summary className="collapse-title">View Raw User Object</summary>
                                <div className="collapse-content">
                                    <pre className="text-xs overflow-x-auto">
                                        {JSON.stringify(user, null, 2)}
                                    </pre>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
