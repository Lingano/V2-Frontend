// Import global styles and ensure tailwind classes are available
import "../index.css";
import { useState, useEffect } from "react";

const About = () => {
    // Check if user previously preferred dark mode from localStorage
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage first
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("dark-mode");
            if (savedMode !== null) {
                return savedMode === "true";
            }
            // Otherwise check system preference
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    // Apply dark mode class to html element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light"); // Or your default light theme
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    return (
        // Use DaisyUI theme controller for dark mode, applied on <html> so remove from here
        // The main div can use bg-base-100 for theme-aware background
        <div className="bg-base-100">
            {/* Sticky Navbar using DaisyUI */}
            <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a className="active">About</a>
                            </li>
                            <li>
                                <a>Courses</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-primary">
                        Lingano
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a className="active">About</a>
                        </li>
                        <li>
                            <a>Courses</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate btn btn-ghost">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            value="dark"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        {/* sun icon */}
                        <svg
                            className="swap-off fill-current w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        {/* moon icon */}
                        <svg
                            className="swap-on fill-current w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>

            {/* Hero Section using DaisyUI */}
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold text-primary">
                            About Lingano
                        </h1>
                        <p className="py-6 text-xl">
                            Lingano is a revolutionary language learning
                            platform designed to help you master new languages
                            quickly, effectively, and with enjoyment. Our
                            innovative approach combines immersive learning
                            experiences with cutting-edge technology.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Our Story Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Our Story
                    </h2>
                    {/* Using Card component for a slightly more styled presentation */}
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className="mb-4">
                                Founded in 2023, Lingano began with a simple
                                mission: to transform how people learn
                                languages. Our founders experienced firsthand
                                the challenges of traditional language learning
                                methods and wanted to create something better—a
                                platform that makes language acquisition
                                natural, contextual, and personalized.
                            </p>
                            <p>
                                What started as a small project has grown into a
                                thriving community of language learners from
                                around the world. Today, Lingano offers courses
                                in over 25 languages, serving students,
                                professionals, travelers, and language
                                enthusiasts alike.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Approach Section with Cards */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                        Our Approach
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <figure className="px-10 pt-10 text-5xl">🎯</figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-secondary">
                                    Contextual Learning
                                </h3>
                                <p>
                                    We believe in learning languages through
                                    real-world content. Our platform uses
                                    authentic materials like articles, videos,
                                    and conversations to help you learn language
                                    as it's actually used.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <figure className="px-10 pt-10 text-5xl">🧠</figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-secondary">
                                    Spaced Repetition
                                </h3>
                                <p>
                                    Our intelligent system uses spaced
                                    repetition algorithms to optimize your
                                    memory retention, presenting words and
                                    phrases at the perfect intervals for maximum
                                    learning efficiency.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <figure className="px-10 pt-10 text-5xl">🤖</figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-secondary">
                                    AI-Powered Personalization
                                </h3>
                                <p>
                                    Lingano adapts to your learning style,
                                    interests, and progress. Our AI technology
                                    creates a personalized learning path that
                                    evolves as you advance in your language
                                    journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section - using DaisyUI Stats component */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                        Our Impact
                    </h2>
                    <div className="stats stats-vertical lg:stats-horizontal shadow-xl w-full">
                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">1M+</div>
                            <div className="stat-title">Active Learners</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-value text-secondary">25+</div>
                            <div className="stat-title">Languages</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-value text-accent">92%</div>
                            <div className="stat-title">Success Rate</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-value">4.8</div>
                            <div className="stat-title">User Rating</div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                        Our Team
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Team Member Card 1 */}
                        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👩‍💼</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-secondary">
                                    Sophia Chen
                                </h3>
                                <p className="text-sm text-accent">
                                    Founder & CEO
                                </p>
                                <p className="text-xs">
                                    Linguist with a passion for educational
                                    technology. Previously led product at a
                                    leading EdTech company.
                                </p>
                            </div>
                        </div>
                        {/* Team Member Card 2 */}
                        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-secondary">
                                    Miguel Rodriguez
                                </h3>
                                <p className="text-sm text-accent">CTO</p>
                                <p className="text-xs">
                                    AI researcher and polyglot who's fluent in 5
                                    languages. Leads our technology and
                                    innovation efforts.
                                </p>
                            </div>
                        </div>
                        {/* Team Member Card 3 */}
                        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👨‍🎓</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-secondary">
                                    Dr. James Wilson
                                </h3>
                                <p className="text-sm text-accent">
                                    Head of Pedagogy
                                </p>
                                <p className="text-xs">
                                    PhD in Applied Linguistics with 15+ years of
                                    experience in language acquisition research.
                                </p>
                            </div>
                        </div>
                        {/* Team Member Card 4 */}
                        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👩‍🎨</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-secondary">
                                    Aisha Patel
                                </h3>
                                <p className="text-sm text-accent">
                                    UX Director
                                </p>
                                <p className="text-xs">
                                    Creates engaging learning experiences that
                                    make language acquisition intuitive and
                                    enjoyable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial Card 1 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="rating rating-sm mb-2">
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked
                                        disabled
                                    />
                                </div>
                                <p className="italic mb-4">
                                    "Lingano completely transformed my language
                                    learning journey. In just 3 months, I went
                                    from being a complete beginner to having
                                    confident conversations in Spanish!"
                                </p>
                                <div className="flex items-center">
                                    <div className="avatar placeholder mr-3">
                                        {/* Use w-12 h-12 for a 3rem size, flex items-center justify-center to center span text */}
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                                            <span className="text-base">
                                                MJ
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Michael Johnson
                                        </p>
                                        <p className="text-xs text-base-content/70">
                                            Business Professional
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Card 2 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="rating rating-sm mb-2">
                                    {/* Assuming 5 stars */}
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked
                                        disabled
                                    />
                                </div>
                                <p className="italic mb-4">
                                    "The personalization is incredible. Lingano
                                    somehow knows exactly what words I'm
                                    struggling with and helps me master them
                                    through natural context."
                                </p>
                                <div className="flex items-center">
                                    <div className="avatar placeholder mr-3">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                                            <span className="text-base">
                                                SA
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Sarah Ahmed
                                        </p>
                                        <p className="text-xs text-base-content/70">
                                            Graduate Student
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Card 3 */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="rating rating-sm mb-2">
                                    {/* Assuming 5 stars */}
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-orange-400"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked
                                        disabled
                                    />
                                </div>
                                <p className="italic mb-4">
                                    "As someone who tried and failed with other
                                    language apps, Lingano was a revelation. The
                                    immersive approach and real-world content
                                    make all the difference."
                                </p>
                                <div className="flex items-center">
                                    <div className="avatar placeholder mr-3">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                                            <span className="text-base">
                                                DP
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            David Park
                                        </p>
                                        <p className="text-xs text-base-content/70">
                                            Software Engineer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision and Mission */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                        Vision & Values
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="card bg-base-200 shadow-lg">
                            <div className="card-body">
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl mr-4">🌍</span>
                                    <h3 className="card-title text-secondary">
                                        Our Vision
                                    </h3>
                                </div>
                                <p>
                                    We envision a world where language barriers
                                    no longer exist—where people can connect,
                                    collaborate, and understand each other
                                    regardless of their native tongues. Through
                                    accessible, effective language learning, we
                                    aim to foster global communication and
                                    cultural appreciation.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-lg">
                            <div className="card-body">
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl mr-4">💡</span>
                                    <h3 className="card-title text-secondary">
                                        Our Values
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <strong>Accessibility:</strong> We
                                        believe language learning should be
                                        available to everyone.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <strong>Innovation:</strong> We
                                        continuously improve our methods based
                                        on the latest research.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <strong>Community:</strong> We foster
                                        connections between learners worldwide.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <strong>Cultural Respect:</strong> We
                                        promote understanding and appreciation
                                        of diverse cultures.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <strong>Effectiveness:</strong> We are
                                        committed to providing learning methods
                                        that actually work.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Using Hero for a prominent CTA */}
                <div className="hero bg-primary rounded-box shadow-xl text-primary-content">
                    <div className="hero-content text-center py-10">
                        <div className="max-w-md">
                            <h2 className="text-3xl font-bold mb-4">
                                Ready to Start Your Language Journey?
                            </h2>
                            <p className="mb-8">
                                Join thousands of learners who've already
                                discovered a better way to master new languages.
                                Start for free and experience the Lingano
                                difference today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn btn-secondary">
                                    Get Started Now
                                </button>
                                <button className="btn btn-outline text-primary-content hover:bg-primary-focus">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer using DaisyUI Footer component */}
                <footer className="footer p-10 bg-base-200 text-base-content mt-16 rounded-box">
                    <nav>
                        <h6 className="footer-title text-primary">Lingano</h6>
                        <p className="w-3/4">
                            Making language learning natural, effective, and
                            enjoyable for everyone.
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Language Guides</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Tutors</a>
                        <a className="link link-hover">FAQ</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Contact</h6>
                        <p>hello@lingano.com</p>
                        <p>1-800-LINGANO</p>
                        <p>123 Language Street</p>
                        <p>San Francisco, CA 94103</p>
                    </nav>
                </footer>
                <div className="footer footer-center p-4 bg-base-300 text-base-content mt-2 rounded-box">
                    <aside>
                        <p>
                            © {new Date().getFullYear()} Lingano. All rights
                            reserved.
                        </p>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default About;
