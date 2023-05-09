// import react
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Layout from "./components/Layout";
import Topbar from "./components/topbar/Topbar";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";

// app component.
export default function App() {
	return (
		<>
			<Topbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/update" element={<Settings />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}
