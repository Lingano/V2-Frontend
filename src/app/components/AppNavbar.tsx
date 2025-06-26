import React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/useAuth";

const NavLink = ({
    children,
    to,
}: {
    children: React.ReactNode;
    to: string;
}) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <RouterLink
            to={to}
            className={`btn btn-sm ${isActive ? "btn-primary" : "btn-ghost"}`}
        >
            {children}
        </RouterLink>
    );
};

const AppNavbar: React.FC = () => {
    const { t } = useTranslation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {" "}
                        <li>
                            <RouterLink to="/app/dashboard">
                                {t("app.Dashboard")}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/app/lessons">
                                {t("app.Lessons")}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/app/practice">
                                {t("app.Practice")}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/app/progress">
                                {t("app.Progress")}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <RouterLink
                    to="/app/dashboard"
                    className="btn btn-ghost text-xl font-bold text-primary"
                >
                    LinganoCorp
                </RouterLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                {" "}
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <NavLink to="/app/dashboard">
                            {t("app.Dashboard")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/app/lessons">{t("app.Lessons")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/app/practice">
                            {t("app.Practice")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/app/progress">
                            {t("app.Progress")}
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex items-center gap-4">
                    {" "}
                    <div className="badge badge-warning gap-2">
                        🔥 {user?.streak || 0}
                    </div>
                    <div className="badge badge-secondary badge-outline">
                        {user?.totalXP || 0} XP
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            {" "}
                            <div className="w-10 rounded-full">
                                {user?.avatar ? (
                                    <img alt="User avatar" src={user.avatar} />
                                ) : (
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content rounded-full w-10">
                                            <span className="text-sm">
                                                {user?.name?.charAt(0) || "U"}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <RouterLink to="/app/profile">
                                    Profile
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/app/settings">
                                    Settings
                                </RouterLink>
                            </li>
                            <li>
                                <hr className="my-2" />
                            </li>
                            <li>
                                <a>Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppNavbar;
