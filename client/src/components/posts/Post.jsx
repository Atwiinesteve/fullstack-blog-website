// react imports
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./post.css";

// sidebar component
export default function Post({ post }) {

	// image url
	const PF = "http://localhost:3000/images";

	return (
		<>
			<div className="post">
				{post.photo && (
					<img src={PF + post.photo} alt="cayote snapshot" className="post__image" />
				)}

				<div className="post__info">
					<div className="post__categories">
						{post.categories.map((category) => (
							<div>
								<span key={category.id} className="post__category">
									{category.name}
								</span>
							</div>
						))}
					</div>
					<Link to={`/post/${post._id}`}>
						<span className="post__title">{post.title}</span>
					</Link>
					<hr />
					<span className="post__date">
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className="post__desc">{post.desc}</p>
			</div>
		</>
	);
}
