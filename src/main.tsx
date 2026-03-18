import { createRoot } from "react-dom/client";
import React from "react";
import App from "./assets/App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);