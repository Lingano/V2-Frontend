import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

const TestGlobe: React.FC = () => {
    const globeEl = useRef<any>();
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
        height: typeof window !== "undefined" ? window.innerHeight : 800,
    });

    console.log("TestGlobe component rendering...");

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

    useEffect(() => {
        console.log("Globe ref:", globeEl.current);
        if (globeEl.current) {
            console.log("Globe is ready!");
        }
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
                <p className="absolute top-4 left-4 z-50 text-white bg-black p-2">
                    Test Globe Component Loading...
                </p>
                <Globe
                    ref={globeEl}
                    width={windowSize.width}
                    height={windowSize.height}
                    backgroundColor="rgba(0, 0, 0, 0.1)"
                    onGlobeReady={() => console.log("Globe ready callback!")}
                />
            </div>
        </div>
    );
};

export default TestGlobe;
