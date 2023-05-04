// react imports
import React from 'react';

// styles
import "./sidebar.css";

// sidebar component
export default function Sidebar() {
  return (
		<>
			<div className="sidebar">
				<div className="sidebar__item">
					<span className="sidebar__title">ABOUT ME</span>
					<img
						src="https://images.unsplash.com/photo-1482355785872-95d19e9ebee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbGRpbmclMjBmb2xsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						alt="post snap"
					/>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
						error quos in sunt molestias, magnam enim amet ducimus commodi
						voluptates placeat dolore, quidem perferendis beatae saepe doloribus
						ipsam labore laborum?
					</p>
				</div>
				<div className="sidebar__item">
					<span className="sidebar__title">CATEGORIES</span>
					<ul className="sidebar__list">
						<li className="sidebar__list__item">Life</li>
						<li className="sidebar__list__item">Sports</li>
						<li className="sidebar__list__item">Technology</li>
						<li className="sidebar__list__item">Religion</li>
						<li className="sidebar__list__item">Health</li>
						<li className="sidebar__list__item">Relationships</li>
					</ul>
				</div>
				<div className="sidebar__item">
					<span className="sidebar__title">FOLLOW US</span>
					<div className="sidebar__social">
						<i className="fa-brands fa-square-facebook"></i>
						<i className="fa-brands fa-square-twitter"></i>
						<i className="fa-brands fa-square-instagram"></i>
						<i className="fa-brands fa-square-pinterest"></i>
					</div>
				</div>
			</div>
		</>
	);
};