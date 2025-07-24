import React from "react";
import ReactDOM from "react-dom/client"; // 🔄 update this import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ React 18 style
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
