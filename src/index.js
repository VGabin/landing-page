import React from "react";
import ReactDOMClient from "react-dom/client";
import { MacbookAir } from "./screens/MacbookAir";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MacbookAir />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
