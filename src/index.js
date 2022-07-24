import React from "react";
import ReactDOM from "react-dom/client";
import { App } from './routes/App';

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

console.log(process.env.NODE_ENV);
console.log(process.env.PUBLIC_URL);
console.log(process.env.S3_API);