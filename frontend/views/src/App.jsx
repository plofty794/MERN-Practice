import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

// Navigation Pages
import RootLayout from "./RootLayout";
import Workouts, { WorkoutsLoader } from "./Workouts";

// CSS
import "./index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index loader={WorkoutsLoader} element={<Workouts />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
