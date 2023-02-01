import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
	{ path: "/", element: <LandingPage /> },
	{ path: "/login", element: <Login /> },
	{ path: "/signup", element: <Signup /> },
]);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
