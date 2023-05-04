// react imports
import React from 'react';

// components
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

// styles
import "./home.css";
import Post from '../../components/posts/Post';

// home component
export default function Home() {
  return (
    <>
        <Header />
        <div className="main__body">
          <Post />
          <Sidebar />
        </div>
    </>
  )
};