// Enhanced Map Component for Contact Page
// This file provides different map integration options

import { useState } from "react";
import {
    IoLocationOutline,
    IoExpandOutline,
    IoMapOutline,
} from "react-icons/io5";

interface MapComponentProps {
    darkMode?: boolean;
}

export const MapComponent = ({ darkMode = false }: MapComponentProps) => {
    const [mapType, setMapType] = useState<"google" | "openstreet" | "mapbox">(
        "google"
    );
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Lingano office coordinates (Geneva, Switzerland)
    const coordinates = {
        lat: 46.2044,
        lng: 6.1432,
        zoom: 15,
    };

    const mapConfigs = {
        google: {
            name: "Google Maps",
            url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.123!2d${
                coordinates.lng
            }!3d${
                coordinates.lat
            }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357d0b3d24!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1699999999999!5m2!1sen!2sch${
                darkMode
                    ? "&style=feature:all|element:geometry|color:0x242424&style=feature:all|element:labels.text.stroke|color:0x242424&style=feature:all|element:labels.text.fill|color:0x746855"
                    : ""
            }`,
            attribution: "Google Maps",
        },
        openstreet: {
            name: "OpenStreetMap",
            url: `https://www.openstreetmap.org/export/embed.html?bbox=${
                coordinates.lng - 0.01
            }%2C${coordinates.lat - 0.01}%2C${coordinates.lng + 0.01}%2C${
                coordinates.lat + 0.01
            }&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`,
            attribution: "OpenStreetMap contributors",
        },
        mapbox: {
            name: "Mapbox",
            url: `https://api.mapbox.com/styles/v1/mapbox/${
                darkMode ? "dark" : "streets"
            }-v11/static/pin-s-building+3374e6(${coordinates.lng},${
                coordinates.lat
            })/${coordinates.lng},${coordinates.lat},${
                coordinates.zoom
            }/600x400@2x?access_token=YOUR_MAPBOX_TOKEN`,
            attribution: "Mapbox",
        },
    };

    const currentMap = mapConfigs[mapType];

    return (
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-3xl font-bold text-base-content flex items-center gap-2">
                    <IoLocationOutline className="w-8 h-8 text-primary" />
                    Find Our Office
                </h2>

                {/* Map Type Selector */}
                <div className="flex gap-2">
                    {Object.entries(mapConfigs).map(([key, config]) => (
                        <button
                            key={key}
                            onClick={() => setMapType(key as typeof mapType)}
                            className={`btn btn-sm ${
                                mapType === key ? "btn-primary" : "btn-outline"
                            }`}
                            disabled={key === "mapbox"} // Disable Mapbox until token is configured
                        >
                            {config.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Map Container */}
            <div
                className={`relative ${
                    isFullscreen
                        ? "fixed inset-0 z-50 bg-base-100 p-4"
                        : "w-full h-96"
                } rounded-lg overflow-hidden shadow-lg`}
            >
                {isFullscreen && (
                    <button
                        onClick={() => setIsFullscreen(false)}
                        className="absolute top-4 right-4 btn btn-circle btn-sm z-10"
                    >
                        ✕
                    </button>
                )}

                <iframe
                    src={currentMap.url}
                    width="100%"
                    height={isFullscreen ? "calc(100vh - 8rem)" : "100%"}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lingano Office Location"
                    className="rounded-lg"
                />

                {/* Fullscreen Toggle */}
                {!isFullscreen && (
                    <button
                        onClick={() => setIsFullscreen(true)}
                        className="absolute top-4 right-4 btn btn-circle btn-sm bg-base-100/90 hover:bg-base-100"
                        title="View in fullscreen"
                    >
                        <IoExpandOutline className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Map Info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
                        <IoMapOutline className="w-5 h-5 text-primary" />
                        Office Location
                    </h3>
                    <div className="space-y-2 text-base-content/70">
                        <p>
                            <strong>Address:</strong> Geneva, Switzerland
                        </p>
                        <p>
                            <strong>Coordinates:</strong> {coordinates.lat},{" "}
                            {coordinates.lng}
                        </p>
                        <p>
                            <strong>Timezone:</strong> Central European Time
                            (CET)
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-base-content mb-2">
                        Getting There
                    </h3>
                    <div className="space-y-2 text-base-content/70">
                        <p>
                            <strong>Public Transport:</strong> Tram lines 12,
                            14, 18
                        </p>
                        <p>
                            <strong>Parking:</strong> Limited street parking
                            available
                        </p>
                        <p>
                            <strong>Airport:</strong> 15 minutes from Geneva
                            Airport
                        </p>
                    </div>
                </div>
            </div>

            {/* Attribution */}
            <p className="text-xs text-base-content/50 mt-4 text-center">
                Map data © {currentMap.attribution}
            </p>
        </div>
    );
};

export default MapComponent;
