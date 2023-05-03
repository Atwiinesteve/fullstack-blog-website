// react imports
import React from 'react';

// styles
import './topbar.css';

// topbar components
export default function Topbar() {
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
						<li className="link">HOME</li>
						<li className="link">ABOUT</li>
						<li className="link">CONTACTS</li>
						<li className="link">WRITE</li>
						<li className="link">LOGOUT</li>
					</ul>
				</div>
				<div className="navbar__profile">
					<img
						src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZSUyMGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						alt="profile avatar"
						className="profile__image"
					/>
					<i className="fa-sharp fa-solid fa-magnifying-glass"></i>
				</div>
			</div>
		</>
	);
};