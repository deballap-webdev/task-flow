import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, Routes, BrowserRouter as Router } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path="/*" />
      </Routes>
    </Router>
  </StrictMode>,
);
