// react imports
import React from "react";

// post component
import Post from "../posts/Post";

// styles
import "./post.css";

// sidebar component
export default function Posts({postsData}) {
	return (
		<>
			<div className="posts">
				{
					postsData.map((p) => (
						<div className="post" key={p.id}>
							<Post post={p} />
						</div>
					))
				}
			</div>
		</>
	);
}
