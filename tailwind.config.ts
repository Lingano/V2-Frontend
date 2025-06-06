import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            animation: {
                "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float-slow": "float 8s ease-in-out infinite",
                "float-slow-delay-1": "float 8s ease-in-out 2s infinite",
                "pulse-slow-delay-2":
                    "pulse 7s cubic-bezier(0.4, 0, 0.6, 1) 1.5s infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-25px)" },
                },
            },
        },
    },
    plugins: [daisyui],
};

export default config;
