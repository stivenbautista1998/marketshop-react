import React from "react";
import ReactDOM from "react-dom/client";
import { App } from './routes/App';
import { swDev } from "./serviceWorkers/swDev";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

// trying to access service worker.
swDev();