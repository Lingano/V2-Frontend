import React from "react";
import { Link } from "react-router-dom";

const DaisyUIDemoPage = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center py-12 px-4">
            <div className="hero bg-gradient-to-br from-primary to-accent rounded-box shadow-xl w-full max-w-4xl mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                    <img
                        src="https://picsum.photos/320/240"
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Demo"
                    />
                    <div>
                        <h1 className="text-5xl font-bold text-primary-content mb-4">
                            Welcome to DaisyUI Demo
                        </h1>
                        <p className="py-4 text-lg text-primary-content/80">
                            Experience a modern, beautiful UI built with daisyUI
                            and Tailwind CSS 4. Explore sleek cards, alerts,
                            stats, and more!
                        </p>
                        <Link to="/" className="btn btn-secondary btn-lg mt-2">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10">
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img src="https://picsum.photos/400/200" alt="Card" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Modern Card</h2>
                        <p>
                            This card uses daisyUI's card component and base
                            colors for a clean look.
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="stats shadow stats-vertical bg-base-200">
                    <div className="stat">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-primary">2,400</div>
                        <div className="stat-desc">↗︎ 100 (4%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Active</div>
                        <div className="stat-value text-success">1,200</div>
                        <div className="stat-desc">↗︎ 50 (2%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value text-accent">$34K</div>
                        <div className="stat-desc">↗︎ $2K (6%)</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mb-10">
                <div className="alert alert-info flex-1">
                    <span>
                        Info: This is a beautiful info alert using daisyUI!
                    </span>
                </div>
                <div className="alert alert-success flex-1">
                    <span>Success: Everything is working perfectly!</span>
                </div>
            </div>

            <div className="card bg-base-200 shadow-xl w-full max-w-4xl mb-10">
                <div className="card-body">
                    <h2 className="card-title">Quick Actions</h2>
                    <div className="join mt-4">
                        <button className="btn btn-primary join-item">
                            Dashboard
                        </button>
                        <button className="btn btn-secondary join-item">
                            Settings
                        </button>
                        <button className="btn btn-accent join-item">
                            Profile
                        </button>
                    </div>
                </div>
            </div>

            <div className="mockup-code w-full max-w-4xl mb-10">
                <pre data-prefix="$">
                    <code>npm i daisyui</code>
                </pre>
                <pre data-prefix=">">
                    <code>Beautiful UI in seconds!</code>
                </pre>
            </div>
        </div>
    );
};

export default DaisyUIDemoPage;
