import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useTheme } from "../hooks/useTheme";

interface GlobeComponentProps {
    darkMode?: boolean; // Keep prop for backward compatibility
}

const GlobeComponent: React.FC<GlobeComponentProps> = () => {
    // Use the theme hook to automatically detect theme changes
    const darkMode = useTheme();
    const globeEl = useRef<any>();
    const [globeReady, setGlobeReady] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
        height: typeof window !== "undefined" ? window.innerHeight : 800,
    }); // Generate sphere mesh of points using Fibonacci sphere
    const generateSpherePoints = () => {
        const points = [];
        const numPoints = 800; // Reduced for better performance
        const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle

        for (let i = 0; i < numPoints; i++) {
            const y = 1 - (i / (numPoints - 1)) * 2; // Latitude from 1 to -1
            const radius = Math.sqrt(1 - y * y);
            const theta = goldenAngle * i; // Golden angle increment

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            // Convert to lat/lng
            const lat = (Math.asin(y) * 180) / Math.PI;
            const lng = (Math.atan2(z, x) * 180) / Math.PI;

            points.push({
                lat,
                lng,
                size: 0.2 + Math.random() * 0.3, // Random size variation
                color: darkMode
                    ? `rgba(255, 255, 255, ${0.1 + Math.random() * 0.3})`
                    : `rgba(0, 0, 0, ${0.1 + Math.random() * 0.4})`,
            });
        }
        return points;
    };

    const [sphereMeshPoints, setSpherePoints] = useState(() =>
        generateSpherePoints()
    );

    // Update sphere points when theme changes
    useEffect(() => {
        setSpherePoints(generateSpherePoints());
    }, [darkMode]);

    const languagePoints = [
        {
            lat: 40.7128,
            lng: -74.006,
            name: "New York",
            language: "English",
            color: "#FFD700",
        },
        {
            lat: 48.8566,
            lng: 2.3522,
            name: "Paris",
            language: "French",
            color: "#FF6B35",
        },
        {
            lat: 35.6762,
            lng: 139.6503,
            name: "Tokyo",
            language: "Japanese",
            color: "#FF1744",
        },
        {
            lat: 52.52,
            lng: 13.405,
            name: "Berlin",
            language: "German",
            color: "#00E676",
        },
        {
            lat: 40.4168,
            lng: -3.7038,
            name: "Madrid",
            language: "Spanish",
            color: "#FF9800",
        },
        {
            lat: 55.7558,
            lng: 37.6176,
            name: "Moscow",
            language: "Russian",
            color: "#9C27B0",
        },
        {
            lat: 39.9042,
            lng: 116.4074,
            name: "Beijing",
            language: "Chinese",
            color: "#F44336",
        },
        {
            lat: -23.5505,
            lng: -46.6333,
            name: "São Paulo",
            language: "Portuguese",
            color: "#4CAF50",
        },
        {
            lat: 28.6139,
            lng: 77.209,
            name: "Delhi",
            language: "Hindi",
            color: "#FF5722",
        },
        {
            lat: 41.9028,
            lng: 12.4964,
            name: "Rome",
            language: "Italian",
            color: "#2196F3",
        },
        {
            lat: 46.2044,
            lng: 6.1432,
            name: "Geneva",
            language: "Lingano HQ",
            color: "#FFD700",
        },
    ];

    // Combine sphere mesh points with enhanced language points
    const allPoints = [
        ...sphereMeshPoints,
        ...languagePoints.map((point) => ({
            ...point,
            size: 1.2, // Larger size for language points
            isLanguagePoint: true, // Flag to identify language points
        })),
    ];

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-rotate the globe
    useEffect(() => {
        if (globeEl.current && globeReady) {
            // Set initial view to show Europe/Geneva area
            globeEl.current.pointOfView({
                lat: 46.2044,
                lng: 6.1432,
                altitude: 2,
            });

            // Start auto-rotation after a delay
            setTimeout(() => {
                if (globeEl.current?.controls) {
                    globeEl.current.controls().autoRotate = true;
                    globeEl.current.controls().autoRotateSpeed = 1.0;
                }
            }, 3000);
        }
    }, [globeReady]);

    const handleGlobeReady = () => {
        setGlobeReady(true);
    };

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="relative w-full h-full opacity-60 hover:opacity-70 transition-opacity duration-1000">
                <Globe
                    ref={globeEl}
                    width={windowSize.width}
                    height={windowSize.height}
                    // No globe textures or sphere - only outlines
                    globeImageUrl={null}
                    bumpImageUrl={null}
                    backgroundImageUrl={null}
                    backgroundColor="rgba(0, 0, 0, 0)" // Fully transparent background
                    showGlobe={false} // Hide the globe sphere completely
                    // No atmosphere - removes the visible globe sphere
                    atmosphereColor="rgba(0, 0, 0, 0)"
                    atmosphereAltitude={0}
                    // No country polygons - use point mesh instead
                    polygonsData={[]}
                    // Combined sphere mesh + language learning points
                    pointsData={allPoints}
                    pointColor={(d: any) =>
                        d.color ||
                        (darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)")
                    }
                    pointAltitude={(d: any) => (d.isLanguagePoint ? 0.015 : 0)}
                    pointRadius={(d: any) => d.size || 0.3}
                    pointResolution={6} // Reduced for better performance
                    pointLabel={(d: any) =>
                        d.name
                            ? `
                        <div style="
                            background: rgba(0,0,0,0.95); 
                            padding: 8px 12px; 
                            border-radius: 8px; 
                            color: white; 
                            font-size: 13px;
                            border: 2px solid ${d.color};
                            font-weight: 600;
                        ">
                            <strong>${d.name}</strong><br/>
                            <span style="color: ${d.color};">${d.language}</span>
                        </div>
                    `
                            : ""
                    }
                    // Remove arcs for better performance
                    arcsData={[]}
                    // Animation and interaction
                    animateIn={false} // Disable animation for better performance
                    onGlobeReady={handleGlobeReady}
                    // Performance optimizations
                    rendererConfig={{
                        antialias: false, // Disable antialiasing for better performance
                        alpha: true,
                        powerPreference: "high-performance",
                    }}
                />
            </div>

            {/* Loading overlay */}
            {!globeReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                    <div className="flex flex-col items-center gap-4">
                        <div className="loading loading-spinner loading-lg text-primary"></div>
                        <p className="text-sm text-base-content/70 font-medium">
                            Loading Globe...
                        </p>
                    </div>
                </div>
            )}

            {/* Beautiful gradient overlays for seamless blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-base-100/20 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-base-100/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-base-100/40 pointer-events-none"></div>
        </div>
    );
};

export default GlobeComponent;
