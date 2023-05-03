// react imports
import React from 'react'

// styles
import "./header.css";

// header component
export default function Header() {
  return (
		<>
			<div className="header">
				<div className="header__titles">
					<span className="header__titles__sm">React & Node</span>
					<span className="header__titles__lg">Blog</span>
				</div>
				<img
					src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="blog snap"
					className="header__image"
				/>
			</div>
		</>
	);
};