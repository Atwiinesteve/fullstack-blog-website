// react imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';

// import pages
import SinglePost from '../single/SinglePost';
import Write from '../write/Write';
import Settings from '../settings/Settings';

// styles
import "./home.css";

// home component
export default function Home() {

  // post states
  const [posts, setPosts] = useState([]);

  // fetch posts.
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts");
      console.log(response.data);
    };
    fetchPosts();
  }, [])

  return (
    <>
        <Header />
        <div className="main__body">
          <Posts />
          {/* <SinglePost /> */}
          {/* <Write /> */}
          {/* <Settings /> */}
          <Sidebar />
        </div>
    </>
  )
};