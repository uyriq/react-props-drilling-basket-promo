import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./components/app/app";

const styles = {
  card: { padding: 50, maxWidth: 800, margin: "0 auto 300px" },
  button: { display: "flex", marginLeft: "auto" }
};

const rootElement = document.getElementById("react-root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
