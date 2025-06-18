import React, { useState } from "react";
import Globe from "./Globe";
import GlobeMinimal from "./GlobeMinimal";
import GlobeSimple from "./GlobeSimple";

interface GlobeSwitcherProps {
    darkMode?: boolean; // Keep prop for backward compatibility
}

const GlobeSwitcher: React.FC<GlobeSwitcherProps> = () => {
    const [globeType, setGlobeType] = useState<
        "simple" | "standard" | "minimal"
    >("simple");
    return (
        <>
            {/* Globe Component as Background */}
            <div className="absolute inset-0 -z-10">
                {globeType === "simple" && <GlobeSimple />}
                {globeType === "standard" && <Globe />}
                {globeType === "minimal" && <GlobeMinimal />}
            </div>

            {/* Control Panel - Fixed Position */}
            <div className="fixed top-20 right-4 z-50 bg-base-200/95 p-4 rounded-lg backdrop-blur-md shadow-lg border border-base-300">
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-bold text-base-content">
                        🌍 Globe Type
                    </h3>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => setGlobeType("simple")}
                            className={`btn btn-sm ${
                                globeType === "simple"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }`}
                        >
                            Simple
                        </button>
                        <button
                            onClick={() => setGlobeType("standard")}
                            className={`btn btn-sm ${
                                globeType === "standard"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }`}
                        >
                            Standard
                        </button>
                        <button
                            onClick={() => setGlobeType("minimal")}
                            className={`btn btn-sm ${
                                globeType === "minimal"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }`}
                        >
                            Minimal
                        </button>
                    </div>{" "}
                    <div className="text-xs text-base-content/70 mt-1 max-w-40">
                        {globeType === "simple" && "🌟 Simple Background Globe"}
                        {globeType === "standard" &&
                            "🔵 Point Mesh + Language Points"}
                        {globeType === "minimal" &&
                            "🌑 Black Globe with Continents"}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobeSwitcher;
