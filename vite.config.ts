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
        outDir: "/var/www/lingano/build",
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
                target: "https://api.lingano.live",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path,
            },
        },
    },
});
