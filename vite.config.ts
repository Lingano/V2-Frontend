import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        // Generate manifest.json for Django to link assets
        manifest: true,
        // Ensure assets are referenced with relative paths
        assetsDir: "assets",
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    // Base path for assets
    base: "/",
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8000",
                changeOrigin: true,
            },
        },
    },
});
