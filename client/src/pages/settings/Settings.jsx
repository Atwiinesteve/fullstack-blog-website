// react imports
import React, { useContext } from 'react';

// import components.
import Sidebar from "../../components/sidebar/Sidebar";

// import styles
import "./settings.css";
import { Context } from '../../context/Context';

// settings component
export default function Settings() {

	// user context
	const {user} = useContext(Context);

	return (
		<div className="settings">
			<div className="settings__wrapper">
				<div className="settings__title">
					<span className="settings__title__update">Update Your Account</span>
					<span className="settings__title__delete">Delete Account</span>
				</div>
				<form className="settings__form">
					<label>Profile Picture</label>
					<div className="settings__profile__picture">
						<img
							src={user.profilePic}
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
						/>
					</div>
					<label>Username</label>
					<input type="text" placeholder="Your names" name="name" />
					<label>Email</label>
					<input type="email" placeholder="Your Email" name="email" />
					<label>Password</label>
					<input type="password" placeholder="Password" name="password" />
					<button className="settings__submit__button" type="submit">
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
