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
	const { user } = useContext(Context);

	// image url
	const PF = "http://localhost:8080/images/";

	// post location on page
	const location = useLocation();
	const path = location.pathname.split("/")[2];

	// single post state
	const [post, setPost] = useState({});
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	// handle delete function
	const handleDelete = async () => {
		try {
			await axios.delete(`/delete-post/${post._id}`, {
				data: { username: user.username }
			});
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	// handle update
	const handleUpdate = async () => {
		try {
			await axios.put(`/update-post/${post._id}`, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (error) {
			console.log(error);
		}
	}

	// fetching one post
	useEffect(() => {
		const fetchPost = async () => {
			const result = await axios.get(`/post/${path}`);
			setPost(result.data.post);
			setTitle(result.data.post.title);
			setDesc(result.data.post.desc);
		};
		fetchPost();
	}, [path]);

	return (
		<div className="single__post">
			<div className="single__post__wrapper">
				{post.photo && (
					<img className="single__post__img" src={PF + post.photo} alt="" />
				)}

				{updateMode ? (
					<input
						name=""
						style={{
							width: "98.8%",
							border: "1px solid lightgray",
							borderRadius: "1px",
							outline: "none",
							padding: "0.5rem",
							textAlign: "center"
						}}
						type="text"
						value={title}
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className="single__post__title">
						{title}
						{post.username === user.user?.username && (
							<div className="single__post__edit">
								<i
									className="single__post__icon far fa-edit"
									onClick={() => setUpdateMode(true)}></i>
								<i
									className="single__post__icon far fa-trash-alt"
									onClick={handleDelete}></i>
							</div>
						)}
					</h1>
				)}

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

				{updateMode ? (
					<textarea
						style={{
							width: "97.5%",
							border: "1px solid lightgray",
							borderRadius: "1px",
							height: "450px",
							outline: "none",
							padding: "1rem",
						}}
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className="single__post__desc">{desc}</p>
				)}

				{updateMode && (
					<button
						style={{
							border: "none",
							padding: "0.8rem 1rem",
							outline: "none",
							cursor: "pointer",
							backgroundColor: "green",
							fontFamily: "Roboto",
							color: "white",
							borderRadius: "1px",
							letterSpacing: "1px",
							textTransform: "uppercase",
						}}
						onClick={handleUpdate}>
						Update post
					</button>
				)}
			</div>
		</div>
	);
}
