import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeTest: React.FC = () => {
    const isDarkMode = useTheme();

    return (
        <div className="fixed bottom-4 left-4 bg-base-200 p-4 rounded-lg shadow-lg z-50">
            <h3 className="font-semibold text-base-content mb-2">Theme Test</h3>
            <div className="flex flex-col gap-2 text-sm">
                <div>
                    <strong>Current Theme:</strong>{" "}
                    {isDarkMode ? "Dark" : "Light"}
                </div>
                <div>
                    <strong>Document Theme:</strong>{" "}
                    {document.documentElement.getAttribute("data-theme")}
                </div>
                <div className="text-xs text-base-content/70 mt-2">
                    This should update automatically when you toggle the theme
                    switch in the navbar
                </div>
            </div>
        </div>
    );
};

export default ThemeTest;
