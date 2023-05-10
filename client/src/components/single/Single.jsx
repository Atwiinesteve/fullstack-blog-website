// react imports
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import styles
import "./single.css";
import axios from "axios";

// single post component
export default function Single() {

	// post location on page
	const location = useLocation();
	const path = location.pathname.split("/")[2];

	// single post state
	const [post, setPost] = useState({});

	// fetching one post
	useEffect(() => {
		const fetchPost = async () => {
			const result = await axios.get(`/post/${path}`);
			setPost(result.data.post);
		};
		fetchPost();
	}, [path]);

	return (
		<div className="single__post">
			<div className="single__post__wrapper">
				{post.photo && (
					<img className="single__post__img" src={post.photo} alt="" />
				)}

				<h1 className="single__post__title">
					{post.title}
					<div className="single__post__edit">
						<i className="single__post__icon far fa-edit"></i>
						<i className="single__post__icon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="single__post__info">
					<span>
						Author:
						<b className="single__post__author">
							<Link className="link">{post.username}</Link>
						</b>
					</span>
					<span>{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className="single__post__desc">{post.desc}</p>
			</div>
		</div>
	);
}
