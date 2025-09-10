import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="ui-themes">
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
