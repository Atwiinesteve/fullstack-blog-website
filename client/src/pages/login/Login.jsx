// react imports
import React from 'react';

// styles
import "./login.css";
import { Link } from 'react-router-dom';

// login component.
export default function Login() {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<div className="input__control">
					<label>Email</label>
					<input
						className="loginInput"
						type="text"
						placeholder="Enter your email..."
					/>
				</div>

				<div className="input__control">
					<label>Password</label>
					<input
						className="loginInput"
						type="password"
						placeholder="Enter your password..."
					/>
				</div>

				<button className="loginButton">Login</button>

				<p className="account__links">
					No Account, Register{" "}
					<Link to={'/register'}
						style={{
							fontSize: "1rem",
							textDecoration: "underline",
						}}>
						Here...
					</Link>
				</p>
			</form>
		</div>
	);
}
