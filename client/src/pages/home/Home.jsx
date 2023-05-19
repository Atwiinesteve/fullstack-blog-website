// react imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

// // import pages
// import SinglePost from '../single/SinglePost';
// import Write from '../write/Write';
// import Settings from '../settings/Settings';

// styles
import "./home.css";
import Posts from '../../components/posts/Posts';
import { useLocation } from 'react-router-dom';

// home component
export default function Home() {

  // location
  const {search} = useLocation()

  // post states
  const [posts, setPosts] = useState([]);

  // fetch posts.
  useEffect(() => {
    const getPosts = async () => {
      const result = await axios.get("/posts"+search);
      setPosts(result.data);
    };
    getPosts();
  }, [search]);

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