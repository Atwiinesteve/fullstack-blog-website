// react imports
import React, { useEffect, useState } from 'react';

// styles
import "./sidebar.css";
import axios from 'axios';

// sidebar component
export default function Sidebar() {

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const result = await axios.get("/categories");
			setCategories(result.data.categories);
			console.log(result.data.categories);
		};
		getCategories();
	}, []);

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
						{categories.map((c) => (
							<div className="sidebar__list__item" key={c.id}>
								<li>{c.name}</li>
							</div>
						))}
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