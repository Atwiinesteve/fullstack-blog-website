// react imports
import React from "react";

// styles
import "./post.css";

// sidebar component
export default function Post({ post }) {
	return (
		<>
			<div className="post">
				<img
					src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					alt="cayote snapshot"
					className="post__image"
				/>
				<div className="post__info">
					<div className="post__categories">
						<span className="post__category">{post.category}</span>
						<span className="post__category">{post.category}</span>
					</div>
					<span className="post__title">
						{post.title}
					</span>
					<hr />
					<span className="post__date">1 hour ago</span>
				</div>
                <p className="post__desc">
                    {post.desc}
                </p>
			</div>
		</>
	);
}
