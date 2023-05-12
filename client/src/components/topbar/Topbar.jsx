// react imports
import React, { useContext } from "react";

// styles
import "./topbar.css";
import { Link } from "react-router-dom";

// context
import { Context } from "../../context/Context";

// topbar components
export default function Topbar() {

	// user context
	const { user, dispatch } = useContext(Context);

	// logout function
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" })
	}

	return (
		<>
			<div className="navbar__top">
				<div className="navbar__icons">
					<i className="fa-brands fa-square-facebook"></i>
					<i className="fa-brands fa-square-twitter"></i>
					<i className="fa-brands fa-square-instagram"></i>
					<i className="fa-brands fa-square-pinterest"></i>
				</div>
				<div className="navbar__links">
					<ul className="links">
						<li className="link">
							<Link to={"/"}>HOME</Link>
						</li>
						<li className="link">
							<Link to={"/about"}>ABOUT</Link>
						</li>
						<li className="link">
							<Link to={"/contacts"}>CONTACTS</Link>
						</li>
						<li className="link">
							<Link to={"/write"}>WRITE</Link>
						</li>
						<li className="link" onClick={handleLogout}>
							{user && "LOGOUT"}
						</li>
					</ul>
				</div>
				<div className="navbar__profile">
					{user ? (
						<img
							src={user.profilePic}
							alt="profile avatar"
							className="profile__image"
						/>
					) : (
						<>
							<ul
								className="links"
								style={{
									listStyle: "none",
									display: "flex",
									flexDirection: "row",
									color: "#444",
									justifyContent: "space-around",
									fontWeight: "300",
								}}>
								<li
									className="link"
									style={{
										marginRight: "20px",
									}}>
									<Link to={"/login"}>LOGIN</Link>
								</li>
								<li className="link">
									<Link to={"/register"}>REGISTER</Link>
								</li>
							</ul>
						</>
					)}
					<i className="fa-sharp fa-solid fa-magnifying-glass"></i>
				</div>
			</div>
		</>
	);
}
