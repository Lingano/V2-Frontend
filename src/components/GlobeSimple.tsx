import React, {
    useRef,
    useEffect,
    useState,
    useMemo,
    useCallback,
} from "react";
import Globe from "react-globe.gl";
import { useTheme } from "../hooks/useTheme";

interface GlobeSimpleProps {
    className?: string;
}

const GlobeSimple: React.FC<GlobeSimpleProps> = ({ className = "" }) => {
    const globeEl = useRef<any>();
    const darkMode = useTheme();
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [size, setSize] = useState({ width: 800, height: 600 });

    // Optimized arcs data - fewer, more meaningful connections
    const arcsData = useMemo(
        () => [
            {
                startLat: 40.7128,
                startLng: -74.006,
                endLat: 51.5074,
                endLng: -0.1278,
            }, // NY to London
            {
                startLat: 51.5074,
                startLng: -0.1278,
                endLat: 35.6762,
                endLng: 139.6503,
            }, // London to Tokyo
            {
                startLat: 35.6762,
                startLng: 139.6503,
                endLat: 37.7749,
                endLng: -122.4194,
            }, // Tokyo to SF
            {
                startLat: 37.7749,
                startLng: -122.4194,
                endLat: 40.7128,
                endLng: -74.006,
            }, // SF to NY
            {
                startLat: 40.7128,
                startLng: -74.006,
                endLat: -23.5505,
                endLng: -46.6333,
            }, // NY to São Paulo
            {
                startLat: 51.5074,
                startLng: -0.1278,
                endLat: 1.3521,
                endLng: 103.8198,
            }, // London to Singapore
            {
                startLat: 52.52,
                startLng: 13.405,
                endLat: 55.7558,
                endLng: 37.6173,
            }, // Berlin to Moscow
            {
                startLat: 19.076,
                lng: 72.8777,
                endLat: 1.3521,
                endLng: 103.8198,
            }, // Mumbai to Singapore
        ],
        []
    );

    // Load countries data
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
        )
            .then((res) => res.json())
            .then((data) => {
                setCountries(data.features);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error loading countries:", error);
                setIsLoading(false);
            });
    }, []);

    // Responsive sizing
    useEffect(() => {
        const updateSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []); // Initialize globe settings
    useEffect(() => {
        if (globeEl.current && !isLoading) {
            const globe = globeEl.current; // Set initial camera position - adjusted size
            globe.pointOfView({ lat: 20, lng: 0, altitude: 1.6 });

            // Disable user interactions but keep controls functional
            globe.controls().enableZoom = false;
            globe.controls().enablePan = false;
            globe.controls().enableRotate = false;
            globe.controls().enableDamping = false; // Start slower auto-rotation for better performance
            globe.controls().autoRotate = true;
            globe.controls().autoRotateSpeed = 0.15;
        }
    }, [isLoading]); // Throttled mouse parallax effect for better performance
    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        if (globeEl.current) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
            const y =
                (event.clientY - rect.top - rect.height / 2) / rect.height;

            const globe = globeEl.current;
            const controls = globe.controls();

            // Reduced parallax movement for better performance
            controls.target.x = x * 0.05;
            controls.target.y = -y * 0.05;
        }
    }, []);
    if (isLoading) {
        return (
            <div
                className={`absolute inset-0 flex items-center justify-center ${className}`}
            >
                <div className="loading loading-spinner loading-lg text-primary"></div>
            </div>
        );
    }
    return (
        <div
            className={`absolute inset-0 flex items-center justify-center ${className}`}
            onMouseMove={handleMouseMove}
        >
            <div className="relative">
                {" "}
                <Globe
                    ref={globeEl}
                    width={Math.max(size.width * 1.2, 1400)}
                    height={Math.max(size.height * 1.2, 1400)}
                    backgroundColor="rgba(0,0,0,0)"
                    showGlobe={true}
                    showGraticules={false}
                    showAtmosphere={true}
                    globeMaterial={{
                        color: darkMode ? "#1e293b" : "#f1f5f9",
                        emissive: darkMode ? "#0f172a" : "#e2e8f0",
                        emissiveIntensity: 0.1,
                        shininess: 0.7,
                        opacity: 1.0,
                        transparent: false,
                    }}
                    atmosphereColor={
                        darkMode
                            ? "rgba(96, 165, 250, 0.4)"
                            : "rgba(59, 130, 246, 0.3)"
                    }
                    atmosphereAltitude={0.15} // Country outlines - optimized for performance
                    polygonsData={countries}
                    polygonCapColor={() => {
                        return darkMode
                            ? "rgba(30, 41, 59, 0.6)"
                            : "rgba(241, 245, 249, 0.7)";
                    }}
                    polygonSideColor={() => "rgba(0, 0, 0, 0)"}
                    polygonStrokeColor={() => {
                        return darkMode
                            ? "rgba(96, 165, 250, 0.4)"
                            : "rgba(59, 130, 246, 0.5)";
                    }}
                    polygonsTransitionDuration={0}
                    polygonAltitude={0}
                    // Arcs only - no points
                    arcsData={arcsData}
                    arcColor={() =>
                        darkMode
                            ? "rgba(96, 165, 250, 0.6)"
                            : "rgba(59, 130, 246, 0.7)"
                    }
                    arcDashLength={0.9}
                    arcDashGap={4}
                    arcDashInitialGap={1}
                    arcDashAnimateTime={3000}
                    arcStroke={0.3}
                    arcAltitude={0.05}
                    arcsTransitionDuration={0}
                />
            </div>
        </div>
    );
};

export default GlobeSimple;
