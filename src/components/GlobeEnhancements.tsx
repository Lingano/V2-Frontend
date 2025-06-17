// Additional Globe Enhancement Options
// This file contains additional features you can add to your globe

import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

interface EnhancedGlobeProps {
    darkMode?: boolean;
    showRings?: boolean;
    showParticles?: boolean;
    showSatellites?: boolean;
}

export const EnhancedGlobe: React.FC<EnhancedGlobeProps> = ({
    darkMode = false,
    showRings = false,
    showParticles = false,
    showSatellites = false,
}) => {
    const globeEl = useRef<any>();
    const [globeReady, setGlobeReady] = useState(false);
    const [countries, setCountries] = useState([]);

    // Satellite data for orbital rings
    const satellites = [
        { lat: 0, lng: 0, alt: 0.1, size: 0.5, color: "#FFD700" },
        { lat: 45, lng: 90, alt: 0.15, size: 0.3, color: "#FF6B35" },
        { lat: -30, lng: -120, alt: 0.12, size: 0.4, color: "#00E676" },
    ]; // Particle systems for atmosphere effect
    const particles = Array.from({ length: 100 }, () => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        alt: Math.random() * 0.3,
        size: Math.random() * 0.1 + 0.05,
        color: darkMode ? "#FFD700" : "#87CEEB",
        opacity: Math.random() * 0.8 + 0.2,
    }));

    // Ring data for orbital paths
    const rings = [
        { lat: 0, lng: 0, maxR: 0.8, propagationSpeed: 1, repeatPeriod: 2000 },
        {
            lat: 45,
            lng: 45,
            maxR: 0.6,
            propagationSpeed: 1.5,
            repeatPeriod: 1500,
        },
        {
            lat: -45,
            lng: -45,
            maxR: 0.7,
            propagationSpeed: 0.8,
            repeatPeriod: 2500,
        },
    ];

    useEffect(() => {
        // Load countries data
        fetch(
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
        )
            .then((res) => res.json())
            .then((data) => setCountries(data.features))
            .catch((err) => console.log("Could not load countries data:", err));
    }, []);

    useEffect(() => {
        if (globeEl.current && globeReady) {
            // Enhanced camera controls
            globeEl.current.pointOfView({
                lat: 46.2044,
                lng: 6.1432,
                altitude: 2.5,
            });

            // Start auto-rotation with smooth acceleration
            setTimeout(() => {
                if (globeEl.current.controls) {
                    globeEl.current.controls().autoRotate = true;
                    globeEl.current.controls().autoRotateSpeed = 0.3;
                    globeEl.current.controls().enableDamping = true;
                    globeEl.current.controls().dampingFactor = 0.05;
                }
            }, 3000);
        }
    }, [globeReady]);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <Globe
                ref={globeEl}
                width={window.innerWidth}
                height={window.innerHeight}
                // Enhanced globe appearance
                globeImageUrl={
                    darkMode
                        ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
                        : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                }
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // Atmosphere and lighting
                atmosphereColor={darkMode ? "#FFD700" : "#87CEEB"}
                atmosphereAltitude={0.15}
                // Countries with enhanced styling
                polygonsData={countries}
                polygonCapColor={() =>
                    darkMode
                        ? "rgba(255, 215, 0, 0.1)"
                        : "rgba(135, 206, 235, 0.1)"
                }
                polygonSideColor={() =>
                    darkMode
                        ? "rgba(255, 215, 0, 0.05)"
                        : "rgba(135, 206, 235, 0.05)"
                }
                polygonStrokeColor={() => (darkMode ? "#FFD700" : "#4682B4")}
                polygonAltitude={0.01}
                // Conditional features
                {...(showRings && {
                    ringsData: rings,
                    ringColor: () => (darkMode ? "#FFD700" : "#87CEEB"),
                    ringMaxRadius: "maxR",
                    ringPropagationSpeed: "propagationSpeed",
                    ringRepeatPeriod: "repeatPeriod",
                })}
                {...(showParticles && {
                    pointsData: particles,
                    pointColor: (d: any) => d.color,
                    pointAltitude: (d: any) => d.alt,
                    pointRadius: (d: any) => d.size,
                    pointOpacity: (d: any) => d.opacity,
                })}
                {...(showSatellites && {
                    objectsData: satellites,
                    objectColor: (d: any) => d.color,
                    objectAltitude: (d: any) => d.alt,
                    objectRadius: (d: any) => d.size,
                    objectThreeObject: () => {
                        // Create a simple satellite mesh
                        const geometry = new (window as any).THREE.BoxGeometry(
                            0.1,
                            0.1,
                            0.1
                        );
                        const material = new (
                            window as any
                        ).THREE.MeshBasicMaterial({ color: 0xffd700 });
                        return new (window as any).THREE.Mesh(
                            geometry,
                            material
                        );
                    },
                })}
                onGlobeReady={() => setGlobeReady(true)}
                // Enhanced renderer settings
                rendererConfig={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                    precision: "highp",
                    stencil: false,
                    depth: true,
                }}
            />

            {/* Loading state */}
            {!globeReady && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="loading loading-spinner loading-lg text-primary"></div>
                        <p className="text-sm text-base-content/70">
                            Loading Enhanced Globe...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

// Performance monitoring hook
export const useGlobePerformance = () => {
    const [fps, setFps] = useState(0);
    const [lastTime, setLastTime] = useState(performance.now());

    useEffect(() => {
        let frameCount = 0;
        let animationId: number;

        const countFPS = () => {
            frameCount++;
            const currentTime = performance.now();

            if (currentTime - lastTime >= 1000) {
                setFps(frameCount);
                frameCount = 0;
                setLastTime(currentTime);
            }

            animationId = requestAnimationFrame(countFPS);
        };

        animationId = requestAnimationFrame(countFPS);

        return () => cancelAnimationFrame(animationId);
    }, [lastTime]);

    return fps;
};

export default EnhancedGlobe;
