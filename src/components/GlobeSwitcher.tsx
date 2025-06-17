import React, { useState } from "react";
import Globe from "./Globe";
import GlobeMinimal from "./GlobeMinimal";

interface GlobeSwitcherProps {
    darkMode?: boolean; // Keep prop for backward compatibility
}

const GlobeSwitcher: React.FC<GlobeSwitcherProps> = () => {
    const [globeType, setGlobeType] = useState<"standard" | "minimal">(
        "standard"
    );

    return (
        <div className="relative">
            {/* Globe Component */}
            {globeType === "standard" ? <Globe /> : <GlobeMinimal />}

            {/* Control Panel */}
            <div className="absolute top-4 right-4 z-50 bg-base-200/90 p-3 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-base-content">
                        Globe Type
                    </h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setGlobeType("standard")}
                            className={`btn btn-xs ${
                                globeType === "standard"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }`}
                        >
                            Standard
                        </button>
                        <button
                            onClick={() => setGlobeType("minimal")}
                            className={`btn btn-xs ${
                                globeType === "minimal"
                                    ? "btn-primary"
                                    : "btn-outline"
                            }`}
                        >
                            Minimal
                        </button>
                    </div>{" "}
                    <div className="text-xs text-base-content/70 mt-1">
                        {globeType === "standard"
                            ? "Point Mesh + Language Points"
                            : "Pure Point Mesh Structure"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobeSwitcher;
