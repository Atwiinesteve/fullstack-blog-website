// react imports
import React from 'react';

// import components.
import Sidebar from "../../components/sidebar/Sidebar";

// import styles
import "./settings.css";

// settings component
export default function Settings() {
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
							src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
