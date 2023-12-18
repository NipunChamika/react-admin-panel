import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// PrimeReact CSS
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // flex

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
