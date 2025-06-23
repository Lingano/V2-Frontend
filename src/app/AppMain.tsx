import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

const AppMain: React.FC = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <AppNavbar />
            <main className="pt-16">
                {" "}
                {/* Account for fixed navbar */}
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/lessons" element={<Lessons />} />
                    <Route path="/lessons/:lessonId" element={<Lessons />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    );
};

export default AppMain;
