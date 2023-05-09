// react imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

// import pages
import SinglePost from '../single/SinglePost';
import Write from '../write/Write';
import Settings from '../settings/Settings';

// styles
import "./home.css";
import Posts from '../../components/posts/Posts';

// home component
export default function Home() {

  // post states
  const [posts, setPosts] = useState([]);

  // fetch posts.
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("/posts");
      setPosts(result.data.posts)
    };
    fetchPosts();
  }, [])

  return (
    <>
        <Header />
        <div className="main__body">
          <Posts postsData={posts} />
          <Sidebar />
        </div>
    </>
  )
};