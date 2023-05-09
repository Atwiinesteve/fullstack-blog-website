// react imports
import React from 'react';

// import components.
import Single from '../../components/single/Single';
import Sidebar from '../../components/sidebar/Sidebar';

// import styles.
import "./singlePost.css";

export default function SinglePost() {
	return (
		<div className="single">
			<Single />
			<Sidebar />
		</div>
	);
}
