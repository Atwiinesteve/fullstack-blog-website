// react imports
import { Link } from "react-router-dom";
import { useState } from "react";

// styles
import "./register.css";
import axios from "axios";

// register component
export default function Register() {

	// registration data
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	// registration function
	const handleRegistration = async (e) => {
		e.preventDefault();
		setError('');
		try {
			const result = await axios.post("/auth/register-user", { username, email, password})
			return result.data && window.location.replace("/login")
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleRegistration} style={{
				padding: '1rem'
			}}>
				{error && <span style={{
					fontSize: '0.9rem',
					color: 'red',
					textAlign: 'center'
				}}>{error}</span>}
				<div className="input__control">
					<label>Username</label>
					<input
						className="registerInput"
						type="text"
						placeholder="Enter your username..."
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="input__control">
					<label>Email</label>
					<input
						className="registerInput"
						type="text"
						placeholder="Enter your email..."
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="input__control">
					<label>Password</label>
					<input
						className="registerInput"
						type="password"
						placeholder="Enter your password..."
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="registerButton">Register</button>
				<p className="account__links">
					Already registered, Login{" "}
					<Link
						to={"/login"}
						style={{
							fontSize: "1rem",
							textDecoration: "underline",
						}}>
						Here...
					</Link>
				</p>
			</form>
			<button className="registerLoginButton">Login</button>
		</div>
	);
}
