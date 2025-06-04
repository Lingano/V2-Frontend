import { Link } from "react-router-dom";

const Navbar = ({
    darkMode,
    setDarkMode,
    setShowLogin,
}: {
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
    setShowLogin: (v: boolean) => void;
}) => (
    <header className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/rybbit">Rybbit</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <button
                            className="btn btn-ghost"
                            onClick={() => setShowLogin(true)}
                        >
                            Sign In
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowLogin(true)}
                        >
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>
            <Link
                to="/"
                className="btn btn-ghost normal-case text-xl text-primary"
            >
                Lingano
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/" className="hover:text-primary">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-primary">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-primary">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/rybbit" className="hover:text-primary">
                        Rybbit
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="hover:text-primary">
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
        <div className="navbar-end gap-2">
            <label className="swap swap-rotate btn btn-ghost text-primary">
                <input
                    type="checkbox"
                    className="theme-controller"
                    value="dark"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className="swap-off text-xl">☀️</span>
                <span className="swap-on text-xl">🌙</span>
            </label>
            <button
                className="btn btn-outline btn-primary"
                onClick={() => setShowLogin(true)}
            >
                Sign In
            </button>
            <button
                className="btn btn-primary"
                onClick={() => setShowLogin(true)}
            >
                Sign Up
            </button>
        </div>
    </header>
);

export default Navbar;
