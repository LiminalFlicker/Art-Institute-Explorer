import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import ArtSearchContextProvider from "./contexts/ArtContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ArtSearchContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ArtSearchContextProvider>
  </StrictMode>
);
