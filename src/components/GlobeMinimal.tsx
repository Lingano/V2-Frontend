import React, { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";
import { useTheme } from "../hooks/useTheme";

interface GlobeMinimalProps {
    darkMode?: boolean; // Keep prop for backward compatibility
}

const GlobeMinimal: React.FC<GlobeMinimalProps> = () => {
    // Use the theme hook to automatically detect theme changes
    const darkMode = useTheme();
    const globeEl = useRef<any>();
    const [globeReady, setGlobeReady] = useState(false);
    const [countries, setCountries] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
        height: typeof window !== "undefined" ? window.innerHeight : 800,
    });

    // Generate a mesh of points on sphere surface
    const generateSphereMesh = (density = 600) => {
        const points = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

        for (let i = 0; i < density; i++) {
            const y = 1 - (i / (density - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y); // radius at y
            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            // Convert cartesian to lat/lng
            const lat = (Math.asin(y) * 180) / Math.PI;
            const lng = (Math.atan2(z, x) * 180) / Math.PI;

            points.push({
                lat,
                lng,
                size: Math.random() * 0.3 + 0.2, // Random size variation
                opacity: Math.random() * 0.4 + 0.4, // Random opacity variation
                color: darkMode
                    ? `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.4})`
                    : `rgba(0, 0, 0, ${Math.random() * 0.5 + 0.4})`,
            });
        }
        return points;
    };

    const sphereMeshPoints = generateSphereMesh(600); // 600 points for good density    // Load countries data for outlines
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
        )
            .then((res) => res.json())
            .then((data) => {
                setCountries(data.features);
            })
            .catch((err) => console.log("Could not load countries data:", err));
    }, []); // Handle window resize
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

    // Mouse tracking for subtle globe interaction
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to -1 to 1
            const y = (event.clientY / window.innerHeight) * 2 - 1; // Normalize to -1 to 1
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Apply subtle mouse-following rotation
    useEffect(() => {
        if (globeEl.current && globeReady) {
            // Calculate subtle rotation based on mouse position (inverted for intuitive movement)
            const rotationFactor = 0.25; // Slightly less sensitive for minimal globe
            const targetLat = 46.2044 + mousePosition.y * 10 * rotationFactor; // Inverted: mouse up = countries move up
            const targetLng = 6.1432 + mousePosition.x * -20 * rotationFactor; // Inverted: mouse right = countries move right// Immediately update the point of view (no transition delay)
            globeEl.current.pointOfView({
                lat: targetLat,
                lng: targetLng,
                altitude: 2.5,
            });
        }
    }, [mousePosition, globeReady]);

    // Auto-rotate the globe
    useEffect(() => {
        if (globeEl.current && globeReady) {
            // Set initial view to show Europe/Geneva area
            globeEl.current.pointOfView({
                lat: 46.2044,
                lng: 6.1432,
                altitude: 2.5,
            });

            // Start very slow auto-rotation that works with mouse interaction
            setTimeout(() => {
                if (globeEl.current?.controls) {
                    globeEl.current.controls().autoRotate = true;
                    globeEl.current.controls().autoRotateSpeed = 0.15; // Very slow background rotation
                    globeEl.current.controls().enableDamping = true; // Smooth movement
                    globeEl.current.controls().dampingFactor = 0.1; // Smooth damping
                }
            }, 1000);
        }
    }, [globeReady]);

    const handleGlobeReady = () => {
        setGlobeReady(true);
    };

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="relative w-full h-full opacity-50 hover:opacity-60 transition-opacity duration-1000">
                {" "}
                <Globe
                    ref={globeEl}
                    width={windowSize.width}
                    height={windowSize.height}
                    // No globe textures or sphere - pure outlines only
                    globeImageUrl={null}
                    bumpImageUrl={null}
                    backgroundImageUrl={null}
                    backgroundColor="rgba(0, 0, 0, 0)" // Fully transparent background
                    showGlobe={false} // Hide the globe sphere completely                    // Enhanced blue atmosphere for visual depth
                    atmosphereColor={
                        darkMode
                            ? "rgba(96, 165, 250, 0.2)" // Blue atmosphere for dark mode
                            : "rgba(59, 130, 246, 0.18)" // Blue atmosphere for light mode
                    }
                    atmosphereAltitude={0.12} // Moderate altitude for subtle glow// Country outlines + point mesh combination with wider borders
                    polygonsData={countries}
                    polygonCapColor={() => "rgba(0, 0, 0, 0)"} // Transparent fill
                    polygonSideColor={() => {
                        return darkMode
                            ? "rgba(255, 255, 255, 0.7)" // White sides for dark mode (creates width effect)
                            : "rgba(0, 0, 0, 0.6)"; // Dark sides for light mode (creates width effect)
                    }}
                    polygonStrokeColor={() => {
                        return darkMode
                            ? "rgba(255, 255, 255, 0.95)" // Very bold white outline for dark mode
                            : "rgba(0, 0, 0, 0.85)"; // Very bold black outline for light mode
                    }}
                    polygonsTransitionDuration={0} // No transition for better performance
                    polygonAltitude={0.003} // Small elevation to create width effect through visible sides
                    // Point mesh creating sphere structure
                    pointsData={sphereMeshPoints}
                    pointColor={(d: any) => d.color}
                    pointRadius={(d: any) => d.size}
                    pointAltitude={0}
                    pointResolution={4} // Low resolution for performance
                    // No arcs for maximum performance
                    arcsData={[]}
                    // Animation and interaction
                    animateIn={false} // Disable animation for maximum performance
                    onGlobeReady={handleGlobeReady}
                    // Maximum performance optimizations
                    rendererConfig={
                        {
                            antialias: false,
                            alpha: true,
                            powerPreference: "high-performance",
                            precision: "lowp", // Low precision for better performance
                        } as any
                    }
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
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-base-100/20 pointer-events-none" />
        </div>
    );
};

export default GlobeMinimal;
