// react imports
import React, { useContext, useRef } from 'react';
import axios from 'axios';

// styles
import "./login.css";
import { Link } from 'react-router-dom';

// import context
import { Context } from '../../context/Context';

// login component.
export default function Login() {

	const emailRef = useRef();
	const passwordRef = useRef();

	const  {user, dispatch, isFetching} = useContext(Context)

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" })
		try {
			const result = await axios.post("/auth/login-user", { 
				email: emailRef.current.value,
				password: passwordRef.current.value
			});
			dispatch({ type: "LOGIN_SUCCESS", payload: result.data })
		} catch (error) {
			dispatch({ type: "LOGIN_FAILURE" })
		}
	};

	console.log(user)

	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm" onSubmit={handleLogin}>
				<div className="input__control">
					<label>Email</label>
					<input
						className="loginInput"
						type="text"
						placeholder="Enter your email..."
						ref={emailRef}
					/>
				</div>

				<div className="input__control">
					<label>Password</label>
					<input
						className="loginInput"
						type="password"
						placeholder="Enter your password..."
						ref={passwordRef}
					/>
				</div>

				<button type='submit' className="loginButton">Login</button>

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
