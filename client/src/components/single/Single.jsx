// react imports
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import styles
import "./single.css";
import axios from "axios";

// single post component
export default function Single() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
console.log("path", path);
	useEffect(() => {
		const fetchPost = async () => {
			const result = await axios.get(`/post`, {
				params: { id: path },
			});
			console.log(result);
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
