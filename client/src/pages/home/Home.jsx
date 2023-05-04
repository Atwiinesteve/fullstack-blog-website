// react imports
import React from 'react';

// components
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';

// styles
import "./home.css";
import Single from '../../components/single/Single';

// home component
export default function Home() {
  return (
    <>
        <Header />
        <div className="main__body">
          {/* <Posts /> */}
          <Single />
          <Sidebar />
        </div>
    </>
  )
};