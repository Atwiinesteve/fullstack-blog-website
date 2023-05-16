// react imports
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";


// import styles
import "./single.css";
import axios from "axios";

// single post component
export default function Single() {
	
	// user context
	const {user} = useContext(Context);

	// image url
	const PF = "http://localhost:8080/images/";

	// post location on page
	const location = useLocation();
	const path = location.pathname.split("/")[2];

	// single post state
	const [post, setPost] = useState({});

	// handle delete function
	const handleDelete = async () => {
		try {
			await axios.delete(`/delete-post/${post._id}`, { data: { username: user.username }});
			window.location.replace("/");
		} catch (error) {
			console.log(error)
		}
	}

	// fetching one post
	useEffect(() => {
		const fetchPost = async () => {
			const result = await axios.get(`/post/${path}`);
			setPost(result.data.post);
		};
		fetchPost();
	}, [path]);

	console.log(post.username)
	console.log(user.user.username)

	return (
		<div className="single__post">
			<div className="single__post__wrapper">
				{post.photo && (
					<img className="single__post__img" src={PF + post.photo} alt="" />
				)}

				<h1 className="single__post__title">
					{post.title}
					{post.username === user.user?.username && (
						<div className="single__post__edit">
							<i className="single__post__icon far fa-edit"></i>
							<i
								className="single__post__icon far fa-trash-alt"
								onClick={handleDelete}></i>
						</div>
					)}
				</h1>
				<div className="single__post__info">
					<span>
						Author:
						<b className="single__post__author">
							<Link to={`/?user=${post.username}`} className="link">
								{post.username}
							</Link>
						</b>
					</span>
					<span>{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className="single__post__desc">{post.desc}</p>
			</div>
		</div>
	);
}
