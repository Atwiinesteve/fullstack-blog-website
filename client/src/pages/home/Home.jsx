// react imports
import React from 'react';

// components
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';

// import pages
import SinglePost from '../single/SinglePost';
import Write from '../write/Write';

// styles
import "./home.css";

// home component
export default function Home() {
  return (
    <>
        <Header />
        <div className="main__body">
          {/* <Posts /> */}
          {/* <SinglePost /> */}
          <Write />
          {/* <Sidebar /> */}
        </div>
    </>
  )
};