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
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    return (
        <div className="bg-base-100 min-h-screen">
            {/* Sticky Navbar - Black with gold accents */}
            <div className="navbar bg-secondary text-secondary-content sticky top-0 z-50 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <span className="text-xl">☰</span>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-secondary-content rounded-box w-52"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a className="bg-primary text-primary-content">About</a>
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
                            <a className="hover:text-primary">Home</a>
                        </li>
                        <li>
                            <a className="bg-primary text-primary-content">About</a>
                        </li>
                        <li>
                            <a className="hover:text-primary">Courses</a>
                        </li>
                        <li>
                            <a className="hover:text-primary">Blog</a>
                        </li>
                        <li>
                            <a className="hover:text-primary">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate btn btn-ghost text-primary">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            value="dark"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        {/* sun icon */}
                        <span className="swap-off fill-current w-6 h-6 text-xl">☀️</span>
                        {/* moon icon */}
                        <span className="swap-on fill-current w-6 h-6 text-xl">🌙</span>
                    </label>
                </div>
            </div>

            {/* Hero Section - Gold background with black text */}
            <div className="hero min-h-[60vh] bg-primary text-primary-content">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold">
                            About Lingano
                        </h1>
                        <p className="py-6 text-xl">
                            Lingano is a revolutionary language learning
                            platform designed to help you master new languages
                            quickly, effectively, and with enjoyment. Our
                            innovative approach combines immersive learning
                            experiences with cutting-edge technology.
                        </p>
                        <button className="btn btn-secondary text-secondary-content">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Our Story Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Our Story
                    </h2>
                    {/* Using Card component with a black background and gold accents */}
                    <div className="card lg:card-side bg-secondary text-secondary-content shadow-xl">
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
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-primary">
                            <figure className="px-10 pt-10 text-5xl">🎯</figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
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
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-primary">
                            <figure className="px-10 pt-10 text-5xl">🧠</figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
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
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-primary">
                            <figure className="px-10 pt-10 text-5xl">🤖</figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
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
                    <div className="stats stats-vertical lg:stats-horizontal shadow-xl w-full bg-secondary text-secondary-content">
                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">1M+</div>
                            <div className="stat-title text-primary-focus">Active Learners</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">25+</div>
                            <div className="stat-title text-primary-focus">Languages</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">92%</div>
                            <div className="stat-title text-primary-focus">Success Rate</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-value text-primary">4.8</div>
                            <div className="stat-title text-primary-focus">User Rating</div>
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
                        <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-primary text-primary-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👩‍💼</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
                                    Sophia Chen
                                </h3>
                                <p className="text-sm text-primary-focus">
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
                        <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-primary text-primary-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
                                    Miguel Rodriguez
                                </h3>
                                <p className="text-sm text-primary-focus">CTO</p>
                                <p className="text-xs">
                                    AI researcher and polyglot who's fluent in 5
                                    languages. Leads our technology and
                                    innovation efforts.
                                </p>
                            </div>
                        </div>
                        {/* Team Member Card 3 */}
                        <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-primary text-primary-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👨‍🎓</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
                                    Dr. James Wilson
                                </h3>
                                <p className="text-sm text-primary-focus">
                                    Head of Pedagogy
                                </p>
                                <p className="text-xs">
                                    PhD in Applied Linguistics with 15+ years of
                                    experience in language acquisition research.
                                </p>
                            </div>
                        </div>
                        {/* Team Member Card 4 */}
                        <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-shadow">
                            <figure className="px-10 pt-10">
                                <div className="avatar placeholder">
                                    <div className="bg-primary text-primary-content rounded-full w-24 h-24">
                                        <span className="text-4xl">👩‍🎨</span>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-primary">
                                    Aisha Patel
                                </h3>
                                <p className="text-sm text-primary-focus">
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
                        <div className="card bg-base-100 shadow-xl border-2 border-primary">
                            <div className="card-body">
                                <div className="rating rating-sm mb-2">
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t1"
                                        className="mask mask-star-2 bg-primary"
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
                                        <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center">
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
                        <div className="card bg-base-100 shadow-xl border-2 border-primary">
                            <div className="card-body">
                                <div className="rating rating-sm mb-2">
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t2"
                                        className="mask mask-star-2 bg-primary"
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
                                        <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center">
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
                        <div className="card bg-base-100 shadow-xl border-2 border-primary">
                            <div className="card-body">
                                <div className="rating rating-sm mb-2">
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-primary"
                                        disabled
                                    />
                                    <input
                                        type="radio"
                                        name="rating-t3"
                                        className="mask mask-star-2 bg-primary"
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
                                        <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center">
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
                        <div className="card bg-secondary text-secondary-content shadow-lg">
                            <div className="card-body">
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl mr-4">🌍</span>
                                    <h3 className="card-title text-primary">
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

                        <div className="card bg-secondary text-secondary-content shadow-lg">
                            <div className="card-body">
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl mr-4">💡</span>
                                    <h3 className="card-title text-primary">
                                        Our Values
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="mr-2 text-primary">✓</span>
                                        <strong className="text-primary-focus">Accessibility:</strong>&nbsp;
                                        We believe language learning should be
                                        available to everyone.
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-primary">✓</span>
                                        <strong className="text-primary-focus">Innovation:</strong>&nbsp;
                                        We continuously improve our methods based
                                        on the latest research.
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-primary">✓</span>
                                        <strong className="text-primary-focus">Community:</strong>&nbsp;
                                        We foster connections between learners worldwide.
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-primary">✓</span>
                                        <strong className="text-primary-focus">Cultural Respect:</strong>&nbsp;
                                        We promote understanding and appreciation
                                        of diverse cultures.
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-primary">✓</span>
                                        <strong className="text-primary-focus">Effectiveness:</strong>&nbsp;
                                        We are committed to providing learning methods
                                        that actually work.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Using Hero for a prominent CTA */}
                <div className="hero bg-primary text-primary-content rounded-box shadow-xl">
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
                                <button className="btn btn-secondary text-secondary-content">
                                    Get Started Now
                                </button>
                                <button className="btn btn-outline border-secondary-content text-secondary-content hover:bg-secondary hover:border-secondary">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer using DaisyUI Footer component */}
                <footer className="footer p-10 bg-secondary text-secondary-content mt-16">
                    <nav>
                        <h6 className="footer-title text-primary">Lingano</h6>
                        <p className="w-3/4">
                            Making language learning natural, effective, and
                            enjoyable for everyone.
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-primary">Company</h6>
                        <a className="link link-hover hover:text-primary">About Us</a>
                        <a className="link link-hover hover:text-primary">Careers</a>
                        <a className="link link-hover hover:text-primary">Blog</a>
                        <a className="link link-hover hover:text-primary">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-primary">Resources</h6>
                        <a className="link link-hover hover:text-primary">Language Guides</a>
                        <a className="link link-hover hover:text-primary">Community</a>
                        <a className="link link-hover hover:text-primary">Tutors</a>
                        <a className="link link-hover hover:text-primary">FAQ</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-primary">Contact</h6>
                        <p>hello@lingano.com</p>
                        <p>1-800-LINGANO</p>
                        <p>123 Language Street</p>
                        <p>San Francisco, CA 94103</p>
                    </nav>
                </footer>
                <div className="footer footer-center p-4 bg-black text-primary mt-2">
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
