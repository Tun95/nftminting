import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router>
    <HelmetProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </HelmetProvider>
  </Router>
);
