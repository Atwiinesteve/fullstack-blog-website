import "./register.css";

export default function Register() {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<div className="input__control">
					<label>Username</label>
					<input
						className="registerInput"
						type="text"
						placeholder="Enter your username..."
					/>
				</div>
				<div className="input__control">
                    <label>Email</label>
                    <input
                        className="registerInput"
                        type="text"
                        placeholder="Enter your email..."
                    />
                </div>
				<div className="input__control">
                    <label>Password</label>
                    <input
                        className="registerInput"
                        type="password"
                        placeholder="Enter your password..."
                    />
                </div>
				<button className="registerButton">Register</button>
			</form>
			<button className="registerLoginButton">Login</button>
		</div>
	);
}
