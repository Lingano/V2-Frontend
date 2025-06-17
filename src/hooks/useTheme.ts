import { useState, useEffect } from "react";

/**
 * Custom hook to detect the current theme and listen for theme changes
 * This hook automatically detects theme changes at the document level
 * and returns whether dark mode is currently active
 */
export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const currentTheme =
                document.documentElement.getAttribute("data-theme");
            return currentTheme === "dark";
        }
        return false;
    });

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "data-theme"
                ) {
                    const currentTheme =
                        document.documentElement.getAttribute("data-theme");
                    setIsDarkMode(currentTheme === "dark");
                }
            });
        });

        // Start observing the document element for attribute changes
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        // Check initial theme
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        setIsDarkMode(currentTheme === "dark");

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return isDarkMode;
};
