/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FFD700', // Gold
                    focus: '#F5C400', // Slightly darker gold for focus states
                    content: '#000000', // Black text on gold backgrounds
                },
                secondary: {
                    DEFAULT: '#111111', // Dark shade for secondary elements
                    focus: '#2A2A2A', // Slightly lighter black for focus/hover
                    content: '#FFD700', // Gold text on black backgrounds
                },
                accent: {
                    DEFAULT: '#B8860B', // Dark gold/bronze for accent elements
                    focus: '#A67700', // Slightly darker for focus/hover states
                    content: '#000000', // Black text on accent backgrounds
                },
                neutral: {
                    DEFAULT: '#222222',
                    focus: '#333333',
                    content: '#FFFFFF',
                },
                base: {
                    '100': '#FFFFFF',
                    '200': '#F8F8F8',
                    '300': '#E5E5E5',
                    content: '#000000',
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#FFD700",
                    "primary-focus": "#F5C400",
                    "primary-content": "#000000",
                    "secondary": "#111111",
                    "secondary-focus": "#2A2A2A",
                    "secondary-content": "#FFD700",
                    "accent": "#B8860B",
                    "accent-focus": "#A67700",
                    "accent-content": "#000000",
                    "neutral": "#222222",
                    "neutral-focus": "#333333",
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FFFFFF",
                    "base-200": "#F8F8F8",
                    "base-300": "#E5E5E5",
                    "base-content": "#000000",
                },
                dark: {
                    "primary": "#FFD700",
                    "primary-focus": "#F5C400",
                    "primary-content": "#000000",
                    "secondary": "#111111",
                    "secondary-focus": "#2A2A2A",
                    "secondary-content": "#FFD700",
                    "accent": "#B8860B",
                    "accent-focus": "#A67700",
                    "accent-content": "#000000",
                    "neutral": "#222222",
                    "neutral-focus": "#333333",
                    "neutral-content": "#FFFFFF",
                    "base-100": "#121212",
                    "base-200": "#1E1E1E",
                    "base-300": "#292929",
                    "base-content": "#FFD700",
                }
            }
        ],
    },
}
