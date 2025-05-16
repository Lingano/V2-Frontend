import { useState, useEffect } from "react";
import "../index.css"; // Ensure global styles and DaisyUI are loaded
// import './Contact.css'; // If custom styles are needed

const Contact = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("dark-mode");
            if (savedMode !== null) {
                return savedMode === "true";
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }
    }, [darkMode]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Form submitted! (Placeholder)");
    };

    return (
        <div className="bg-base-100 min-h-screen">
            {/* Navbar - Consistent with About.tsx */}
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
                                <a>About</a>
                            </li>
                            <li>
                                <a>Courses</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a className="active">Contact</a>
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
                            <a>About</a>
                        </li>
                        <li>
                            <a>Courses</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a className="active">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate btn btn-ghost">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            value="dark" // This value is used by DaisyUI to toggle themes
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

            {/* Hero Section */}
            <div className="hero min-h-[40vh] bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-primary">
                            Contact Us
                        </h1>
                        <p className="py-6">
                            Have questions or feedback? We'd love to hear from
                            you! Reach out using the form below or through our
                            contact details.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information Section */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-secondary mb-4">
                                Get in Touch
                            </h2>
                            <p className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <strong>Email:</strong>&nbsp;
                                <a
                                    href="mailto:hello@lingano.com"
                                    className="link link-hover"
                                >
                                    hello@lingano.com
                                </a>
                            </p>
                            <p className="mb-2 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.042 11.042 0 005.516 5.516l1.154-2.308a1 1 0 011.21-.502l4.493 1.498A1 1 0 0119 16.72V20a2 2 0 01-2 2h-2a16 16 0 01-16-16V5z"
                                    />
                                </svg>
                                <strong>Phone:</strong>&nbsp;
                                <a
                                    href="tel:1-800-LINGANO"
                                    className="link link-hover"
                                >
                                    1-800-LINGANO
                                </a>
                            </p>
                            <p className="mb-2 flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-primary mt-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <strong>Address:</strong>&nbsp;
                                <span>
                                    123 Language Street
                                    <br />
                                    San Francisco, CA 94103
                                    <br />
                                    USA
                                </span>
                            </p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2 text-secondary">
                                    Office Hours
                                </h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                            {/* Placeholder for a map image or embedded map */}
                            <div className="mt-6">
                                <img
                                    src="https://via.placeholder.com/400x250.png?text=Map+Placeholder"
                                    alt="Map to Lingano Office"
                                    className="rounded-lg shadow-md w-full"
                                />
                                <p className="text-xs text-center mt-2">
                                    Our approximate location
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-secondary mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Your Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Your Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Subject
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Question about courses"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Your Message
                                        </span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered h-32 w-full"
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Consistent with About.tsx */}
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
    );
};

export default Contact;
