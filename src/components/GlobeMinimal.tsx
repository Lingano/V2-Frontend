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
    const [countries, setCountries] = useState<any[]>([]);
    const [arcsData, setArcsData] = useState<any[]>([]);
    const [beaconPoints, setBeaconPoints] = useState<any[]>([]);
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

    // Major cities around the world
    const majorCities = [
        { name: "New York", lat: 40.7128, lng: -74.006 },
        { name: "London", lat: 51.5074, lng: -0.1278 },
        { name: "Paris", lat: 48.8566, lng: 2.3522 },
        { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
        { name: "Sydney", lat: -33.8688, lng: 151.2093 },
        { name: "Dubai", lat: 25.2048, lng: 55.2708 },
        { name: "Singapore", lat: 1.3521, lng: 103.8198 },
        { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
        { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
        { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
        { name: "Mumbai", lat: 19.076, lng: 72.8777 },
        { name: "Moscow", lat: 55.7558, lng: 37.6176 },
        { name: "Beijing", lat: 39.9042, lng: 116.4074 },
        { name: "Berlin", lat: 52.52, lng: 13.405 },
        { name: "Madrid", lat: 40.4168, lng: -3.7038 },
        { name: "Rome", lat: 41.9028, lng: 12.4964 },
        { name: "Cairo", lat: 30.0444, lng: 31.2357 },
        { name: "Lagos", lat: 6.5244, lng: 3.3792 },
        { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
        { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
        { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
        { name: "Buenos Aires", lat: -34.6118, lng: -58.396 },
        { name: "Toronto", lat: 43.6532, lng: -79.3832 },
        { name: "Seoul", lat: 37.5665, lng: 126.978 },
        { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
        { name: "Manila", lat: 14.5995, lng: 120.9842 },
        { name: "Zurich", lat: 47.3769, lng: 8.5417 },
        { name: "Geneva", lat: 46.2044, lng: 6.1432 },
        { name: "Lugano", lat: 46.0037, lng: 8.9511 },
        { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
        { name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
    ]; // Generate arcs between cities (connecting major hubs) - Reduced density
    const generateCityArcs = () => {
        const arcs = [];
        const hubCities = [
            "London",
            "New York",
            "Tokyo",
            "Geneva",
            "Lugano", // Add Lugano as a hub
        ];

        // Connect each hub to fewer cities with lower probability
        hubCities.forEach((hubName) => {
            const hub = majorCities.find((city) => city.name === hubName);
            if (!hub) return;

            majorCities.forEach((city) => {
                if (city.name !== hubName && Math.random() > 0.8) {
                    // 20% chance for each connection (reduced from 40%)
                    arcs.push({
                        startLat: hub.lat,
                        startLng: hub.lng,
                        endLat: city.lat,
                        endLng: city.lng,
                        color: darkMode
                            ? `rgba(59, 130, 246, ${Math.random() * 0.6 + 0.4})` // Blue arcs for dark mode
                            : `rgba(234, 179, 8, ${Math.random() * 0.7 + 0.3})`, // Golden arcs for light mode
                    });
                }
            });
        });

        // Reduce random connections from 15 to 5
        for (let i = 0; i < 5; i++) {
            const city1 =
                majorCities[Math.floor(Math.random() * majorCities.length)];
            const city2 =
                majorCities[Math.floor(Math.random() * majorCities.length)];

            if (city1.name !== city2.name) {
                arcs.push({
                    startLat: city1.lat,
                    startLng: city1.lng,
                    endLat: city2.lat,
                    endLng: city2.lng,
                    color: darkMode
                        ? `rgba(34, 197, 94, ${Math.random() * 0.5 + 0.3})` // Green arcs
                        : `rgba(239, 68, 68, ${Math.random() * 0.5 + 0.3})`, // Red arcs
                });
            }
        }
        return arcs;
    };

    // Generate beacon points for ripple effects at cities
    const generateBeaconPoints = () => {
        const beacons = [];
        const activeCities = [
            "London",
            "New York",
            "Tokyo",
            "Geneva",
            "Lugano", // Add Lugano as an active beacon city
            "Dubai",
            "Singapore",
        ];

        activeCities.forEach((cityName) => {
            const city = majorCities.find((c) => c.name === cityName);
            if (city) {
                beacons.push({
                    lat: city.lat,
                    lng: city.lng,
                    size: Math.random() * 0.8 + 0.5, // Random size variation
                    color: darkMode
                        ? `rgba(59, 130, 246, ${Math.random() * 0.8 + 0.2})` // Blue for dark mode
                        : `rgba(234, 179, 8, ${Math.random() * 0.8 + 0.2})`, // Golden for light mode
                    rippleColor: darkMode
                        ? `rgba(59, 130, 246, 0.3)` // Blue ripple
                        : `rgba(234, 179, 8, 0.3)`, // Golden ripple
                });
            }
        });

        return beacons;
    }; // Generate arcs data and beacon points
    useEffect(() => {
        const arcs = generateCityArcs();
        const beacons = generateBeaconPoints();
        setArcsData(arcs);
        setBeaconPoints(beacons);
    }, [darkMode]); // Regenerate when theme changes

    // Animate beacon points for ripple effect
    useEffect(() => {
        if (!globeReady) return;

        const interval = setInterval(() => {
            setBeaconPoints((prevBeacons) =>
                prevBeacons.map((beacon) => ({
                    ...beacon,
                    size: Math.sin(Date.now() * 0.003 + beacon.lat) * 0.3 + 0.7, // Pulsing size
                    color: darkMode
                        ? `rgba(59, 130, 246, ${
                              Math.sin(Date.now() * 0.002 + beacon.lng) * 0.3 +
                              0.7
                          })`
                        : `rgba(234, 179, 8, ${
                              Math.sin(Date.now() * 0.002 + beacon.lng) * 0.3 +
                              0.7
                          })`,
                }))
            );
        }, 50); // Update every 50ms for smooth animation

        return () => clearInterval(interval);
    }, [globeReady, darkMode]);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="relative w-full h-full opacity-50 hover:opacity-60 transition-opacity duration-1000">
                {" "}
                <Globe
                    ref={globeEl}
                    width={windowSize.width}
                    height={windowSize.height}
                    // Black globe with continents
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundImageUrl={null}
                    backgroundColor="rgba(0, 0, 0, 0)" // Transparent background
                    showGlobe={true} // Show the globe sphere
                    // Dark atmosphere for black globe effect
                    atmosphereColor="rgba(255, 255, 255, 0.1)" // Subtle white glow
                    atmosphereAltitude={0.25} // Higher altitude for dramatic effect
                    // Country outlines on black globe
                    polygonsData={countries}
                    polygonCapColor={() => "rgba(0, 0, 0, 0.8)"} // Dark continent fill
                    polygonSideColor={() => "rgba(20, 20, 20, 0.9)"} // Very dark sides
                    polygonStrokeColor={() => "rgba(100, 100, 100, 0.6)"} // Gray outlines
                    polygonsTransitionDuration={0}
                    polygonAltitude={0.01} // Slight elevation for continent effect
                    // Beacon points for ripple effects at major cities
                    pointsData={beaconPoints}
                    pointColor={(point: any) => point.color}
                    pointRadius={(point: any) => point.size}
                    pointAltitude={0.02}
                    pointResolution={12} // Higher resolution for smooth circles
                    // Add custom point materials for ripple effect
                    pointsMerge={false} // Keep points separate for individual animation
                    // Animated arcs connecting major cities
                    arcsData={arcsData}
                    arcColor={(arc: any) => arc.color}
                    arcDashLength={0.4} // Dashed arcs for better visual effect
                    arcDashGap={0.2}
                    arcDashAnimateTime={8000} // 8 second animation cycle (slower)
                    arcStroke={0.5} // Arc thickness
                    arcAltitude={0.3} // Arc height for dramatic effect
                    arcAltitudeAutoScale={0.5} // Auto scale based on distance
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
