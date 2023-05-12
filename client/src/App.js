// import react
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Layout from "./components/Layout";
import Topbar from "./components/topbar/Topbar";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import SinglePost from "./pages/single/SinglePost";
import { Context } from "./context/Context";

// app component.
export default function App() {
	
	// user context
	const { user } = useContext(Context);

	return (
		<>
			<Topbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/settings" element={user ? <Settings /> : <Register />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/write" element={user ? <Write /> : <Register />} />
				<Route
					path="/post/:postId"
					element={user ? <SinglePost /> : <Register />}
				/>
			</Routes>
		</>
	);
}
