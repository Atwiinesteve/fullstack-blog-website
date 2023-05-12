// react imports
import { React, useContext, useState } from "react";
import axios from "axios";

// styles
import "./write.css";

// context
import { Context } from "../../context/Context";

// write component.
export default function Write() {
	// state
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);

	// user context
	const { user } = useContext(Context);

	// handle submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			email: user.email,
			title,
			desc,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;
			try {
				await axios.post("/upload", data);
			} catch (error) {}
		}
		try {
			const result = await axios.post("/posts", newPost);
			window.location.replace("/post" + result.data._id);
		} catch (error) {}
		axios.post("/posts");
	};

	return (
		<div className="write">
			{file && (
				<img 
					className="write__img" 
					src={ URL.createObjectURL(file)} 
					alt="" />
			)}

			<form className="write__form" onSubmit={handleSubmit}>
				<div className="write__form__group">
					<label htmlFor="file__input">
						<i className="write__icon fas fa-plus"></i>
					</label>
					<input
						id="file__input"
						type="file"
						style={{ display: "none" }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						className="write__input"
						placeholder="Title"
						type="text"
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="write__form__group">
					<textarea
						className="write__input write__text"
						placeholder="Tell your story..."
						type="text"
						autoFocus={true}
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>
				<button className="write__submit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
}
