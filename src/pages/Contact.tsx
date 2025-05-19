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
            {/* Navbar - Black with gold accents */}
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
                                <a>About</a>
                            </li>
                            <li>
                                <a>Courses</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a className="bg-primary text-primary-content">Contact</a>
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
                            <a className="hover:text-primary">About</a>
                        </li>
                        <li>
                            <a className="hover:text-primary">Courses</a>                        </li>
                        <li>
                            <a className="hover:text-primary">Blog</a>
                        </li>
                        <li>
                            <a className="bg-primary text-primary-content">Contact</a>
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
            <div className="hero min-h-[40vh] bg-primary text-primary-content">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">
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
                    <div className="card bg-base-100 shadow-xl border-2 border-primary">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-primary mb-4">
                                Get in Touch
                            </h2>
                            <p className="mb-2 flex items-center">
                                <span className="text-xl mr-2 text-primary">✉️</span>
                                <strong>Email:</strong>&nbsp;
                                <a
                                    href="mailto:hello@lingano.com"
                                    className="link link-hover text-primary"
                                >
                                    hello@lingano.com
                                </a>
                            </p>
                            <p className="mb-2 flex items-center">
                                <span className="text-xl mr-2 text-primary">📞</span>
                                <strong>Phone:</strong>&nbsp;
                                <a
                                    href="tel:1-800-LINGANO"
                                    className="link link-hover text-primary"
                                >
                                    1-800-LINGANO
                                </a>
                            </p>
                            <p className="mb-2 flex items-start">
                                <span className="text-xl mr-2 text-primary mt-1">📍</span>
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
                                <h3 className="text-lg font-semibold mb-2 text-primary">
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
                                    className="rounded-lg shadow-md w-full border-2 border-primary"
                                />
                                <p className="text-xs text-center mt-2">
                                    Our approximate location
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="card bg-secondary text-secondary-content shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-primary mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-primary">
                                            Your Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="input input-bordered border-primary bg-secondary-focus text-secondary-content w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-primary">
                                            Your Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        className="input input-bordered border-primary bg-secondary-focus text-secondary-content w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-primary">
                                            Subject
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Question about courses"
                                        className="input input-bordered border-primary bg-secondary-focus text-secondary-content w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-primary">
                                            Your Message
                                        </span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered border-primary bg-secondary-focus text-secondary-content h-32 w-full"
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary text-primary-content"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Black with gold accents */}
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
    );
};

export default Contact;
