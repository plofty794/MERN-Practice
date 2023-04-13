import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WorkoutContextComponent from "./WorkoutContext/WorkoutContextComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <WorkoutContextComponent>
            <App />
        </WorkoutContextComponent>
    </React.StrictMode>
);
