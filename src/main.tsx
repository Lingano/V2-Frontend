import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SalientApp from "./SalientApp.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <SalientApp />
    </StrictMode>
);
