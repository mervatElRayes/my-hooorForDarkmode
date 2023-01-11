import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Level2 Organize Dark Mode
import { ThemeProvider } from "./context/ThemeContext";
//Organize change color into onlinestor

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
  
        <App />
  
    </ThemeProvider>
  </React.StrictMode>
);
