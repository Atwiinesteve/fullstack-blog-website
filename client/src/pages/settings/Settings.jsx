// react imports
import React, { useContext, useState } from "react";

// import components.
import Sidebar from "../../components/sidebar/Sidebar";

// import styles
import "./settings.css";
import { Context } from "../../context/Context";
import axios from "axios";

// settings component
export default function Settings() {
	// state
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	// user context
	const { user, dispatch } = useContext(Context);

	// public folder
	const PF = "http://localhost:8080/images/";

	// handle submit function
	const handleSubmit = async (e) => {

		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user.user._id,
			username,
			email,
			password,
		};

		// add image file
		if (file) {
		  const data = new FormData();
		  const filename = Date.now() + file.name;
		  data.append("name", filename);
		  data.append("file", file);
		  updatedUser.profilePic = filename;
		  try {
			await axios.post("/upload", data);
		  } catch (err) {}
		};

		try {
			const res = await axios.put("/update-user/" + user.user._id, updatedUser);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};


	return (
		<div className="settings">
			<div className="settings__wrapper">
				<div className="settings__title">
					<span className="settings__title__update">Update Your Account</span>
					<span className="settings__title__delete">Delete Account</span>
				</div>
				<form className="settings__form" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settings__profile__picture">
						<img
							src={file ? URL.createObjectURL(file) : PF + user.profilePic}
							alt=""
						/>
						<label htmlFor="file__input">
							<i className="settings__profile__picture__icon far fa-user-circle"></i>{" "}
						</label>
						<input
							id="file__input"
							type="file"
							style={{ display: "none" }}
							className="settings__profile__picture__input"
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder="Your names"
						name="name"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="email"
						placeholder="Your Email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="settings__submit__button" type="submit">
						Update
					</button>

					{/* success message */}
					{success && (
						<span
							style={{
								color: "green",
								textAlign: "center",
								marginTop: "20px",
							}}>
							Profile has been updated...
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
