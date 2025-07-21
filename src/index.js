// src/main.jsx or index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App"; // ✅ since App.jsx is inside /pages
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
