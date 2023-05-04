// react imports
import React from "react";

// styles
import "./post.css";

// sidebar component
export default function Post() {
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
						<span className="post__category">Music</span>
						<span className="post__category">Life</span>
					</div>
					<span className="post__title">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</span>
					<hr />
					<span className="post__date">1 hour ago</span>
				</div>
                <p className="post__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    In ex nihil fugiat vitae explicabo dolorum excepturi 
                    impedit, eaque nulla quae error quia eius neque non. 
                    A aliquam saepe quae est eius esse quaerat sequi quos expedita 
                    temporibus. Eaque ratione veniam, ipsum deleniti officiis maxime odio 
                    sed assumenda ad quae voluptatibus architecto ea. Dolor eius omnis dolorem consequuntur 
                    blanditiis tempora ipsam! Temporibus aliquam dolore, 
                    itaque et repellat fuga dignissimos modi odio atque 
                    ab praesentium nesciunt, perferendis commodi, placeat 
                    dicta necessitatibus! Sequi quidem debitis corrupti nobis 
                    ipsam accusantium molestias molestiae numquam dolorem!
                </p>
			</div>
		</>
	);
}
