import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import App from "./App.tsx";

const rootElement = document.getElementById("app")!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
