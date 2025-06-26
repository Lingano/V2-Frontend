import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import UserProfile from "../pages/UserProfile";

const AppMain: React.FC = () => {
    return (
        <AuthGuard>
            <div className="min-h-screen bg-base-200">
                <AppNavbar />
                <main className="pt-16">
                    {" "}
                    {/* Account for fixed navbar */}{" "}
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/lessons" element={<Lessons />} />
                        <Route
                            path="/lessons/:lessonId"
                            element={<Lessons />}
                        />
                        <Route path="/practice" element={<Practice />} />
                        <Route path="/progress" element={<Progress />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
        </AuthGuard>
    );
};

export default AppMain;
